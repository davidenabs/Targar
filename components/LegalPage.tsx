import { ReactNode } from "react";
import Container from "@/components/ui/Container";

export default function LegalPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <div className="pt-28 pb-20 lg:pt-36 lg:pb-28">
      <Container className="max-w-3xl">
        <h1 className="text-[28px] sm:text-[36px] font-extrabold tracking-tight text-ink">
          {title}
        </h1>
        <p className="mt-2 text-sm text-ink-faint">Last updated: {lastUpdated}</p>

        <div className="mt-6 rounded-xl border border-border bg-brand-pink-tint px-4 py-3 text-sm text-ink-muted">
          Placeholder content — pending final legal text from TARGAR. Structure, typography,
          and navigation are production-ready; this copy block should be replaced before launch.
        </div>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-ink-muted [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-ink [&_h2]:mb-3 [&_p]:mb-4">
          {children}
        </div>
      </Container>
    </div>
  );
}
