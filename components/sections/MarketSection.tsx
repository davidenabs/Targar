import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import ImageMarquee from "@/components/ImageMarquee";
import { market } from "@/lib/content";
import { fadeUp } from "@/lib/motion";

export default function MarketSection() {
  return (
    <section id="markets" className="py-16 lg:py-28 bg-surface">
      <Container>
        <div className="mb-10 lg:mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-pink">
            {market.eyebrow}
          </span>
          <h2 className="mt-2 text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold leading-[1.05] tracking-tight">
            <span className="block text-gray-400 font-medium mb-1">
              Payment infrastructure for
            </span>
            <span className="block text-[#1A1A1A]">
              {market.heading}
            </span>
          </h2>
        </div>

        <RevealOnScroll variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {/* Card 1 */}
          <figure className="relative rounded-[1.5rem] overflow-hidden aspect-[4/5] lg:col-span-1 group shadow-sm">
            <Image
              src={market.gallery[0].src}
              alt={market.gallery[0].alt}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />
            <div className="absolute top-5 left-5">
              <span className="px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-[9px] font-bold text-white uppercase tracking-wider">
                CUSTOMER
              </span>
            </div>
            <div className="absolute bottom-5 left-5 right-5">
              <h3 className="text-[22px] font-bold text-white mb-0.5 tracking-tight">Instant Payments</h3>
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.1em]">NO TERMINAL REQUIRED</p>
            </div>
          </figure>

          {/* Card 2 */}
          <figure className="relative rounded-[1.5rem] overflow-hidden aspect-[4/5] lg:col-span-1 group shadow-sm">
            <Image
              src={market.gallery[1].src}
              alt={market.gallery[1].alt}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />
            <div className="absolute top-5 left-5">
              <span className="px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-[9px] font-bold text-white uppercase tracking-wider">
                MERCHANT
              </span>
            </div>
            <div className="absolute bottom-5 left-5 right-5">
              <h3 className="text-[22px] font-bold text-white mb-0.5 tracking-tight">Faster Payouts</h3>
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.1em]">OPEN-AIR MARKETS</p>
            </div>
          </figure>

          {/* Card 3 */}
          <figure className="relative rounded-[1.5rem] overflow-hidden aspect-square md:aspect-auto md:h-full lg:col-span-2 group shadow-sm">
            <Image
              src={market.lead.src}
              alt={market.lead.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent opacity-90" />
            <div className="absolute top-5 left-5">
              <span className="px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-[9px] font-bold text-white uppercase tracking-wider">
                INFRASTRUCTURE
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8">
              <h3 className="text-3xl lg:text-[34px] font-bold text-white mb-1 tracking-tight">Every trader is a merchant</h3>
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.1em] mb-3">POWERING INFORMAL TRADE</p>
              <p className="text-[13px] text-gray-300 italic max-w-[90%] leading-relaxed">
                "{market.lead.caption}"
              </p>
            </div>
          </figure>
        </RevealOnScroll>

        {/* Desktop-only continuous drift, restating the same photos for texture/motion */}
        <div className="mt-10">
          <ImageMarquee items={market.gallery} />
        </div>
      </Container>
    </section>
  );
}
