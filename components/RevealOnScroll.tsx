"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function RevealOnScroll({
  children,
  variants = fadeUp,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  as?: "div" | "li";
}) {
  const MotionTag = motion[Tag];
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
