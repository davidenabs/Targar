import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { footer, siteConfig } from "@/lib/content";

const SocialIcon = ({ label }: { label: string }) => {
  switch (label.toLowerCase()) {
    case "facebook":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      );
    case "x":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      );
    case "linkedin":
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      );
    default:
      return <span>{label.substring(0, 2)}</span>;
  }
};

export default function Footer() {
  return (
    <footer className="bg-[#101014] text-white overflow-hidden relative">
      <Container className="pt-20 lg:pt-24 pb-12 relative z-10">

        {/* Logo */}
        <div className="mb-12">
          <Link href="/" className="relative block h-8 w-[112px] lg:h-9 lg:w-[132px]">
            <Image
              src="/logo/lockup-white.png"
              alt="TARGAR"
              fill
              className="object-contain object-left"
            />
          </Link>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12">
          <div className="col-span-2 lg:col-span-2">
            <h3 className="text-[11px] font-bold text-white uppercase tracking-wider mb-6">About</h3>
            <p className="text-[13px] text-gray-400 leading-relaxed max-w-sm pr-4">
              {footer.tagline}
            </p>
            <div className="mt-8 flex items-center gap-4">
              {siteConfig.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <SocialIcon label={s.label} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-bold text-white uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {footer.quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[13px] font-medium text-gray-400 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-bold text-white uppercase tracking-wider mb-6">Services</h3>
            <ul className="space-y-4">
              {footer.services.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-[13px] font-medium text-gray-400 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-2">
            <h3 className="text-[11px] font-bold text-white uppercase tracking-wider mb-6">Legal & Security</h3>
            <ul className="space-y-4">
              {footer.legalLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[13px] font-medium text-gray-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Middle Section: Download Card & Contact */}
        <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-1 lg:grid-cols-[1.3fr,1fr] gap-12 lg:gap-24">

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-between gap-10">
            <div className="space-y-6">
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-[13px] font-bold text-white group-hover:text-brand-pink transition-colors">{siteConfig.contact.email}</span>
              </a>
              <a href={siteConfig.contact.phoneHref} className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-[13px] font-bold text-white group-hover:text-brand-pink transition-colors">{siteConfig.contact.phone}</span>
              </a>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-[13px] font-bold text-white group-hover:text-brand-pink transition-colors">FAQS</span>
              </div>
            </div>

            <div className="max-w-[200px]">
              <h5 className="text-[10px] font-bold text-white uppercase tracking-wider mb-4">COME SAY HI...</h5>
              <p className="text-[11px] text-gray-400 italic leading-relaxed">
                {siteConfig.contact.address}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-brand-pink">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className="text-[11px] font-bold uppercase tracking-widest text-white">Bank-Grade Secure</span>
          </div>
          <p className="text-[11px] text-gray-500 font-medium">{footer.copyright}</p>
        </div>

        <p className="mt-6 text-[10px] leading-relaxed text-gray-600 max-w-4xl">
          {footer.regulatory}
        </p>

      </Container>

      {/* Huge Watermark */}
      <div className="absolute bottom-[-1%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none overflow-hidden h-40">
        <span className="text-[180px] lg:text-[240px] font-black tracking-tighter text-white/[0.02] leading-none whitespace-nowrap">
          Targar App
        </span>
      </div>
    </footer>
  );
}
