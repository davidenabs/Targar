"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { equation } from "@/lib/content";

export default function EquationStrip() {
  return (
    <section className="bg-surface-dark py-16 lg:py-24 overflow-hidden relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-brand-pink/10 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto max-w-6xl"
        >
          {/* Glassmorphic Wrapper */}
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5 bg-white/[0.02] border border-white/[0.05] backdrop-blur-xl rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 shadow-2xl w-fit mx-auto">
            {equation.map((clause, i) => {
              const isLast = i === equation.length - 1;
              const isEquals = clause.trim() === "=";
              const hasCross = clause.includes("×");
              const text = clause.replace("×", "").trim();

              if (isEquals) {
                return (
                  <motion.div 
                    key={i} 
                    initial={{ scale: 0, rotate: -45 }} 
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                    className="flex flex-shrink-0 items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 text-white/40 font-medium text-lg md:text-xl"
                  >
                    =
                  </motion.div>
                );
              }

              return (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col md:flex-row items-center gap-3 md:gap-5"
                >
                  <div
                    className={`flex items-center px-5 py-2.5 md:px-8 md:py-4 rounded-full border transition-all duration-500 ${
                      isLast
                        ? "bg-brand-pink/10 border-brand-pink/30 shadow-[0_0_30px_rgba(233,30,99,0.15)]"
                        : "bg-white/5 border-white/10"
                    }`}
                  >
                    <span 
                      className={`text-base md:text-xl lg:text-2xl font-extrabold tracking-tight ${
                        isLast ? "text-brand-pink" : "text-white/40 line-through decoration-white/30 decoration-2"
                      }`}
                    >
                      {text}
                    </span>
                  </div>
                  {hasCross && (
                    <span className="text-white/20 font-light text-xl md:text-3xl">×</span>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
