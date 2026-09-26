"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import MobileNav from "@/components/layout/MobileNav";
import { nav, siteConfig } from "@/lib/content";
import { Icons } from "../ui/icons";

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Use a ref to always have the latest hover state in the event listener without re-binding
  const isHoveredRef = useRef(isHovered);
  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    function onScroll() {
      const currentScrollY = window.scrollY;
      setSolid(currentScrollY > 20);
      setIsVisible(true);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (window.scrollY > 100 && !isHoveredRef.current) {
          setIsVisible(false);
        }
      }, 2000);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Effect to handle hover state changes independently
  useEffect(() => {
    let hoverTimeout: NodeJS.Timeout;

    if (isHovered) {
      setIsVisible(true);
    } else {
      // When mouse leaves, hide after delay if not at top
      hoverTimeout = setTimeout(() => {
        if (window.scrollY > 100) {
          setIsVisible(false);
        }
      }, 2000);
    }

    return () => clearTimeout(hoverTimeout);
  }, [isHovered]);

  return (
    <>
      {/* Invisible hover zone at the top of the screen to reveal the header */}
      <div
        className="fixed top-0 inset-x-0 h-6 z-[60]"
        onMouseEnter={() => setIsHovered(true)}
      />

      <header
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ease-in-out ${solid ? "py-4" : "py-6 lg:py-8"
          } ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <Container className="flex items-center justify-between">
          <Link href="/" className="relative block h-8 w-[112px] lg:h-9 lg:w-[132px]">
            <Image
              src="/logo/lockup-pink.png"
              alt="TARGAR"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          <div
            className={`hidden lg:flex items-center transition-all duration-300 backdrop-blur-lg ${solid
              ? "bg-white/95 border border-gray-100"
              : "bg-white/80 border border-transparent"
              } rounded-full pl-8 gap-8`}
          >
            <nav className="flex items-center gap-8">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[12px] font-bold uppercase tracking-wider text-[#555555] hover:text-brand-pink transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <Button
              as="a"
              href={siteConfig.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="!rounded-full px-7 py-3 text-sm shadow-md shadow-brand-pink/20"
            >
              <Icons.googlePlay className="w-5 h-5" />
              Download the App
            </Button>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm border border-gray-100 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </Container>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
