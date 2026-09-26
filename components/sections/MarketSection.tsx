import Image, { StaticImageData } from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import RevealOnScroll from "@/components/RevealOnScroll";
import ImageMarquee from "@/components/ImageMarquee";
import { market } from "@/lib/content";
import { fadeUp } from "@/lib/motion";

interface MarketCardProps {
  imageSrc: string | StaticImageData;
  imageAlt: string;
  tag: string;
  title: string;
  subtitle: string;
  quote?: string;
}

function MarketCard({ imageSrc, imageAlt, tag, title, subtitle, quote }: MarketCardProps) {
  return (
    <figure className="relative rounded-[1.5rem] overflow-hidden flex-1 lg:hover:flex-[2] transition-all duration-700 ease-out aspect-[4/5] lg:aspect-auto group shadow-sm cursor-pointer">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-100" />
      <div className="absolute top-5 left-5">
        <span className="px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-[9px] font-bold text-white uppercase tracking-wider">
          {tag}
        </span>
      </div>
      <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8">
        <h3 className="text-[22px] font-bold text-white mb-1 tracking-tight leading-tight line-clamp-3">
          {title}
        </h3>
        <p className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.1em]">
          {subtitle}
        </p>
        {quote && (
          <div className="grid grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] transition-all duration-700 ease-out mt-2">
            <div className="overflow-hidden">
              <p className="text-[13px] text-gray-300 italic max-w-[90%] leading-relaxed pt-2">
                "{quote}"
              </p>
            </div>
          </div>
        )}
      </div>
    </figure>
  );
}

export default function MarketSection() {
  // Combine image sources with card text content
  const marketCards = [
    { ...market.cards[0], imageSrc: market.gallery[0].src, imageAlt: market.gallery[0].alt },
    { ...market.cards[1], imageSrc: market.gallery[1].src, imageAlt: market.gallery[1].alt },
    { ...market.cards[2], imageSrc: market.lead.src, imageAlt: market.lead.alt },
  ];

  return (
    <section id="markets" className="py-16 lg:py-28 bg-surface">
      <Container>
        <div className="mb-10 lg:mb-14">
          <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-pink">
            {market.eyebrow}
          </span>
          <h2 className="mt-2 text-[32px] sm:text-[40px] lg:text-[48px] font-extrabold leading-[1.05] tracking-tight">
            <span className="block text-gray-400 font-medium mb-1">
              {market.headingPrefix}
            </span>
            <span className="block text-[#1A1A1A]">
              {market.heading}
            </span>
          </h2>
        </div>

        <RevealOnScroll variants={fadeUp} className="flex flex-col lg:flex-row gap-4 lg:gap-5 w-full lg:h-[380px] xl:h-[420px]">
          {marketCards.map((card, i) => (
            <MarketCard
              key={i}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              tag={card.tag}
              title={card.title}
              subtitle={card.subtitle}
              quote={card.quote}
            />
          ))}
        </RevealOnScroll>

        {/* Desktop-only continuous drift, restating the same photos for texture/motion */}
        <div className="mt-10">
          <ImageMarquee items={market.gallery} />
        </div>
      </Container>
    </section>
  );
}
