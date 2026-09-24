"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import TrustChip from "@/components/ui/TrustChip";
import AppStoreModal from "@/components/AppStoreModal";
import { hero, siteConfig } from "@/lib/content";
import { easeOutExpo } from "@/lib/motion";

const words = hero.headline.split(" ");

const stats = [
  { value: "500K+", label: "REGISTERED USERS" },
  { value: "₦2.3B+", label: "VALUE PROCESSED" },
  { value: "10K+", label: "MARKET MERCHANTS" },
  { value: "1M+", label: "MONTHLY TRANSACTIONS" },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <div className="relative bg-[#F8F9FA] pt-28 md:pt-32 lg:pt-40 overflow-hidden">
      {/* Background Shapes mimicking Raven Bank */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#E5E7EB] opacity-60 rounded-full blur-[100px]" />
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[60%] bg-[#F3F4F6] opacity-80 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[60%] bg-white rounded-t-[100%] blur-[80px]" />
      </div>

      <Container className="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 pb-16 md:pb-24">
        
        {/* Left Side: Main Text */}
        <div className="w-full md:w-[55%] lg:w-[60%] z-10 flex-shrink-0">
          <h1 className="text-[40px] sm:text-[48px] md:text-[50px] lg:text-[68px] xl:text-[76px] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#1A1A1A]">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: easeOutExpo }}
                className={`inline-block mr-[0.24em] ${
                  i >= 5 ? "text-brand-pink" : "font-normal"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 max-w-[500px] text-[16px] sm:text-[18px] md:text-[18px] lg:text-[20px] leading-relaxed text-[#555555] font-medium"
          >
            {hero.subtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          >
            <Button
              as="a"
              href={siteConfig.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto !rounded-full !px-8 !py-4 text-lg font-bold shadow-lg shadow-brand-pink/25 hover:shadow-brand-pink/40 transition-shadow"
            >
              Get Started
            </Button>
            <div className="w-full sm:w-auto text-center sm:text-left">
               <AppStoreModal buttonClassName="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-brand-pink hover:text-brand-pink-dark transition-colors focus-visible:outline-none" />
            </div>
          </motion.div>
        </div>

        {/* Right Side: Image */}
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: easeOutExpo }}
          className="relative w-full md:w-[45%] lg:w-[40%] flex justify-end z-10 mt-8 md:mt-0"
        >
          {/* Main phone mockup */}
          <div className="relative z-10 w-[90%] sm:w-[80%] md:w-[100%] max-w-[450px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] aspect-[4/5] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden  ml-auto">
             <Image
              src="/images/targar-mockup.png"
              alt="TARGAR App"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 90vw"
              className="object-cover"
            />
          </div>

          {/* <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: easeOutExpo }}
            className="absolute top-1/4 -left-4 sm:-left-8 md:-left-12 lg:-left-16 z-20"
          >
            <div className="bg-white/95 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 flex flex-col gap-0.5 sm:gap-1">
               <div className="flex items-center gap-2">
                 <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-success" />
                 <span className="text-[9px] sm:text-[11px] text-gray-500 font-bold uppercase tracking-wider">Payment Received</span>
               </div>
               <span className="text-brand-pink font-black text-lg sm:text-xl">₦12,500</span>
               <span className="text-[9px] sm:text-[10px] text-gray-400 font-medium">from Ada's Store</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: easeOutExpo }}
            className="absolute bottom-1/4 -right-2 sm:-right-6 md:-right-8 lg:-right-10 z-20 hidden sm:block"
          >
            <div className="bg-white/95 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 flex flex-col gap-1">
               <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
                 <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-brand-pink/10 flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-brand-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                 </div>
                 <span className="text-ink font-bold text-[12px] sm:text-sm">Identity Verified</span>
               </div>
               <span className="text-gray-500 text-[9px] sm:text-[11px] max-w-[120px] sm:max-w-[140px] leading-tight">Bank-grade security on every transaction</span>
            </div>
          </motion.div> */}
        </motion.div>
      </Container>

      {/* Stats Section resembling the bottom of Raven's hero */}
      <div className="relative z-20 bg-white border-t border-gray-100 py-10 sm:py-12 md:py-16 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-4 divide-x-0 md:divide-x divide-gray-100">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center justify-center text-center px-2 sm:px-4"
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#1A1A1A] mb-1.5 sm:mb-2 tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-[10px] sm:text-[11px] md:text-[13px] font-bold text-gray-400 uppercase tracking-[0.15em]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
