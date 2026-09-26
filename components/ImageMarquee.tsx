"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type Item = { src: string; alt: string; caption: string };

export default function ImageMarquee({ items }: { items: Item[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onVisibility() {
      const el = trackRef.current;
      if (!el) return;
      el.style.animationPlayState = document.visibilityState === "hidden" ? "paused" : "running";
    }
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  // Duplicate the list once so the CSS loop (translateX -50%) is seamless.
  const looped = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <div ref={trackRef} className="marquee-track flex gap-5 w-max">
        {looped.map((item, i) => (
          <figure key={i} className="relative w-64 shrink-0 rounded-xl overflow-hidden">
            <div className="relative aspect-[4/3]">
              <Image src={item.src} alt={item.alt} fill sizes="256px" className="object-cover" />
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
