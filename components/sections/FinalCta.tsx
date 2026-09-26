import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import AppStoreModal from "@/components/AppStoreModal";
import RevealOnScroll from "@/components/RevealOnScroll";
import { finalCta, siteConfig } from "@/lib/content";
import { fadeUp } from "@/lib/motion";
import { Icons } from "@/components/ui/icons";

export default function FinalCta() {
  const splitIndex = finalCta.heading.indexOf(" and ");
  const firstPart = splitIndex !== -1 ? finalCta.heading.substring(0, splitIndex) : finalCta.heading;
  const secondPart = splitIndex !== -1 ? finalCta.heading.substring(splitIndex) : "";

  return (
    <section id="download" className="relative py-20 lg:py-32 bg-brand-pink overflow-hidden rounded-t-[2.5rem]">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[40%] h-[60%] bg-brand-pink/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-[#A880FF]/10 blur-[120px] rounded-full" />
      </div>

      <Container className="relative z-10">
        <RevealOnScroll variants={fadeUp} className="max-w-3xl mx-auto text-center">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-white">
            {finalCta.eyebrow}
          </span>

          <h2 className="mt-4 text-[40px] sm:text-[56px] lg:text-[72px] font-extrabold leading-[1.05] tracking-tight">
            <span className="block bg-linear-to-r from-surface via-[#ca83f8] to-[#ff80c2] bg-clip-text text-white pb-2 font-normal">
              {firstPart}
            </span>
            <span className="block text-white">
              {secondPart}
            </span>
          </h2>

          <p className="mt-6 text-[15px] sm:text-[17px] leading-relaxed text-white max-w-xl mx-auto">
            {finalCta.body}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              as="a"
              href={siteConfig.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full! px-8 py-3.5 text-base font-bold bg-white hover:bg-white/80! text-brand-pink! border-0! shadow-lg shadow-white/20! transition-all! flex items-center justify-center gap-2"
            >
              <Icons.googlePlay className="w-5 h-5" />
              Get it on Google Play
            </Button>
            <AppStoreModal
              buttonClassName="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink focus-visible:ring-offset-2 focus-visible:ring-offset-[#101014]"
            />
          </div>

          <p className="mt-8 text-xs text-white font-medium tracking-wide">
            {finalCta.fineprint}
          </p>
        </RevealOnScroll>
      </Container>
    </section>
  );
}

