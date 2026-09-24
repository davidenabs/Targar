"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import Image from "next/image";
import { nav, siteConfig } from "@/lib/content";
import { easeOutExpo } from "@/lib/motion";

const panelVariants: Variants = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { duration: 0.28, ease: easeOutExpo } },
  exit: { x: "100%", transition: { duration: 0.2, ease: easeOutExpo } },
};

const linkContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
};

const linkItem: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

export default function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <motion.div
            className="absolute inset-0 bg-ink/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            className="absolute right-0 top-0 h-full w-[80%] max-w-xs bg-white shadow-float p-6 flex flex-col"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex items-center justify-between">
              <div className="relative h-8 w-[112px]">
                <Image src="/logo/lockup-white.png" alt="TARGAR" fill className="object-contain object-left" />
              </div>
              <button
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <motion.nav
              className="mt-10 flex flex-col gap-6"
              variants={linkContainer}
              initial="hidden"
              animate="visible"
            >
              {nav.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  variants={linkItem}
                  className="text-lg font-semibold text-ink"
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.nav>

            <motion.a
              href={siteConfig.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={linkItem}
              initial="hidden"
              animate="visible"
              className="mt-auto inline-flex items-center justify-center rounded-xl bg-brand-pink px-6 py-3.5 text-sm font-semibold text-white"
            >
              Get the app
            </motion.a>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
