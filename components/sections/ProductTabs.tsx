"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

export default function ProductTabs({ tabs }: { tabs: any[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track the scroll progress through the massive container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Update active tab based on scroll percentage
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const chunk = 1 / tabs.length;
    // Map latest (0 to 1) to an index (0 to tabs.length - 1)
    const index = Math.min(Math.floor(latest / chunk), tabs.length - 1);
    
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  });

  const activeTab = tabs[activeIndex];

  return (
    // The scroll track - height determines how long the sticky effect lasts
    <div ref={containerRef} style={{ height: `${tabs.length * 100}vh` }} className="relative w-full">
      
      // The sticky container that stays in the viewport
      <div className="sticky top-24 lg:top-32 w-full flex flex-col justify-start pb-20">
        
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-24 w-full">
          {/* Left Sidebar - Clickable for fast-travel */}
          <div className="hidden lg:block w-[200px] shrink-0 mt-12">
            <ul className="space-y-12">
              {tabs.map((tab, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <li key={tab.id} className="relative">
                    <button 
                      onClick={() => {
                        // Fast scroll to the specific section of the track
                        if (containerRef.current) {
                          const top = containerRef.current.offsetTop;
                          const height = window.innerHeight;
                          window.scrollTo({ top: top + (idx * height), behavior: "smooth" });
                        }
                      }}
                      className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-4 ${
                        isActive ? "text-brand-pink" : "text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      {isActive && (
                        <motion.span 
                          layoutId="activeTabIndicator"
                          className="absolute -left-8 w-6 h-[1px] bg-brand-pink" 
                        />
                      )}
                      {tab.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Mobile tabs indicator (hidden on desktop) */}
          <div className="flex lg:hidden overflow-x-auto gap-6 pb-4 w-full z-20 border-b border-gray-100 mb-4">
             {tabs.map((tab, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button 
                    key={tab.id}
                    onClick={() => {
                      if (containerRef.current) {
                        const top = containerRef.current.offsetTop;
                        const height = window.innerHeight;
                        window.scrollTo({ top: top + (idx * height), behavior: "smooth" });
                      }
                    }}
                    className={`text-[10px] whitespace-nowrap font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                      isActive ? "text-brand-pink border-b-2 border-brand-pink pb-1" : "text-gray-400"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
          </div>

          {/* Right Content - Fades in/out in place */}
          <div className="flex-1 w-full min-h-[600px] lg:min-h-[640px] relative">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col xl:flex-row items-start xl:items-center gap-8 lg:gap-12"
              >
                 
                 {/* Large Mockup Area */}
                 <div className="w-full xl:w-[45%] h-[400px] lg:h-[640px] bg-gray-50/60 rounded-[2.5rem] p-4 lg:p-8 flex items-center justify-center relative overflow-hidden border border-gray-100 shadow-sm group">
                    <Image 
                       src={activeTab.image} 
                       alt={activeTab.label} 
                       fill 
                       className="object-cover object-center transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent" />
                 </div>

                 {/* Cards Grid */}
                 <div className="w-full xl:w-[55%] grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                   {activeTab.features.map((feature: any, idx: number) => (
                     <div key={idx} className="bg-white rounded-[1.25rem] p-6 lg:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] border border-gray-50 transition-all duration-300 hover:-translate-y-1">
                        <div className="w-10 h-10 rounded-full bg-indigo-50/80 flex items-center justify-center text-indigo-500 mb-6">
                           <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             {idx % 3 === 0 ? (
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                             ) : idx % 3 === 1 ? (
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                             ) : (
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                             )}
                           </svg>
                        </div>
                        <h4 className="text-[15px] font-bold text-ink mb-2.5">{feature.title}</h4>
                        <p className="text-[13px] text-gray-500 leading-relaxed mb-6">{feature.body}</p>
                        <a href="#" className="text-[11px] font-bold text-indigo-500 flex items-center gap-1 hover:gap-2 transition-all">
                          Learn More <span className="text-lg leading-none">&rsaquo;</span>
                        </a>
                     </div>
                   ))}
                 </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
