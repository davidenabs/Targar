import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import RevealOnScroll from "@/components/RevealOnScroll";
import { howItWorks } from "@/lib/content";
import { fadeUp } from "@/lib/motion";

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-20 lg:py-32 bg-[#F8F9FC] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-brand-pink/5 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow={howItWorks.eyebrow}
          heading={howItWorks.heading}
          intro={howItWorks.intro}
        />

        <div className="relative mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-brand-pink/20 to-transparent border-t-2 border-dashed border-brand-pink/30 z-0" />

          {howItWorks.steps.map((s, i) => (
            <RevealOnScroll key={s.title} variants={fadeUp} className="relative z-10">
              <div
                style={{ transitionDelay: `${i * 0.15}s` }}
                className="group h-full rounded-[2rem] bg-white p-8 lg:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-gray-100 hover:border-brand-pink/20 transition-all duration-500 hover:-translate-y-2 flex flex-col"
              >
                <div className="flex items-center gap-5 mb-8">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-pink/10 text-brand-pink font-extrabold text-xl shadow-inner group-hover:scale-110 group-hover:bg-brand-pink group-hover:text-white transition-all duration-300">
                    {i + 1}
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 group-hover:text-brand-pink/70 transition-colors">
                    {s.step}
                  </p>
                </div>
                
                <h3 className="text-[20px] font-extrabold text-[#101014] tracking-tight mb-3">
                  {s.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-gray-500">
                  {s.body}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
