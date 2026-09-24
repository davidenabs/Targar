import Link from "next/link";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="pt-32 pb-24 lg:pt-44 lg:pb-32">
      <Container className="max-w-xl text-center">
        <span className="text-[12px] font-bold uppercase tracking-[0.12em] text-brand-pink">
          404
        </span>
        <h1 className="mt-3 text-[28px] sm:text-[36px] font-extrabold tracking-tight text-ink">
          This page moved — or never existed.
        </h1>
        <p className="mt-4 text-ink-muted">
          Let&apos;s get you back to somewhere useful.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-brand-pink px-7 py-3.5 text-base font-semibold text-white hover:bg-brand-pink-dark transition-colors"
        >
          Back to home
        </Link>
      </Container>
    </div>
  );
}
