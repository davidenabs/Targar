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

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-ink-muted [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-ink [&_h2]:mb-3 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-ink [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:mb-1 [&_strong]:font-semibold [&_strong]:text-ink [&_a]:text-brand-pink hover:[&_a]:underline">
          {children}
        </div>
      </Container>
    </div>
  );
}
