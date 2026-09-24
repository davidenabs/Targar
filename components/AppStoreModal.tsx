"use client";

import { useState } from "react";
import Modal from "@/components/ui/Modal";
import { appStoreModal } from "@/lib/content";

export default function AppStoreModal({
  buttonClassName = "",
}: {
  buttonClassName?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          buttonClassName ||
          "inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-7 py-3.5 text-base font-semibold text-ink hover:bg-surface-alt transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2"
        }
      >
        <AppleGlyph />
        App Store
      </button>

      <Modal open={open} onClose={() => setOpen(false)} titleId="app-store-modal-title">
        <div className="flex flex-col items-center text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-pink to-[#ff5c8a] text-white">
            <ClockGlyph />
          </div>
          <h2 id="app-store-modal-title" className="mt-5 text-xl font-extrabold text-ink">
            {appStoreModal.heading}
          </h2>
          <p className="mt-2 text-sm text-ink-muted leading-relaxed">{appStoreModal.body}</p>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="mt-6 w-full rounded-xl bg-brand-pink px-6 py-3.5 text-sm font-semibold text-white hover:bg-brand-pink-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2"
          >
            {appStoreModal.cta}
          </button>
        </div>
      </Modal>
    </>
  );
}

function AppleGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.365 1.43c0 1.14-.417 2.06-1.25 2.94-.964.99-2.014 1.56-3.13 1.47-.05-1.11.42-2.09 1.24-2.96.87-.9 2.05-1.5 3.13-1.45.01.33.01.66.01 1zM20.5 17.09c-.52 1.17-1.15 2.32-2.09 3.44-.94 1.11-1.94 2.19-3.3 2.21-1.31.02-1.74-.82-3.24-.82-1.5 0-1.98.8-3.22.84-1.31.04-2.31-1.19-3.26-2.29-1.94-2.24-3.45-6.35-1.45-9.12 1-1.38 2.61-2.24 4.28-2.27 1.28-.02 2.5.86 3.24.86.74 0 2.2-1.06 3.72-.9.63.03 2.42.26 3.56 1.93-.09.06-2.12 1.24-2.1 3.7.03 2.95 2.58 3.94 2.61 3.96-.02.07-.4 1.42-1.05 2.47z" />
    </svg>
  );
}

function ClockGlyph() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.75" />
      <path d="M12 7v5l3.5 2" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
