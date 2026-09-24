"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { equation } from "@/lib/content";
import { viewportOnce } from "@/lib/motion";

export default function EquationStrip() {
  return (
    <section className="bg-surface-dark py-12 lg:py-16">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 sm:gap-x-2"
        >
          {equation.map((clause, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${clause === "="
                  ? "text-white/40"
                  : i === equation.length - 1
                    ? "text-brand-pink"
                    : "text-white/70"
                }`}
            >
              {clause}
            </motion.span>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
