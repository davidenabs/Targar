import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import ProductTabs from "./ProductTabs";
import { product } from "@/lib/content";

export default function ProductFeatures() {
  return (
    <section id="product" className="py-20 lg:py-32 bg-white">
      <Container>
        <SectionHeading 
          eyebrow={product.eyebrow} 
          heading={product.heading} 
          intro={product.intro} 
        />
        
        {/* Render the interactive scroll-spy tabs layout */}
        <div className="mt-16 lg:mt-24">
          <ProductTabs tabs={product.tabs} />
        </div>
      </Container>
    </section>
  );
}
