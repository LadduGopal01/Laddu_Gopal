import { Header } from "@/components/site-header";
import { Hero } from "@/components/hero";
import ProductsSection from "@/components/products-section";
import { QualityStrip } from "@/components/quality-strip";
import { About } from "@/components/about";
import { Sustainability } from "@/components/sustainability";
import { Contact } from "@/components/contact";
import ProcessSection from "@/components/process-section";
import ExportingSection from "@/components/exporting-section";
import PackagingSection from "@/components/packaging-section";
import BusinessesSection from "@/components/gallery";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <QualityStrip />
      <ProductsSection />
      <ProcessSection />
      <ExportingSection />
      <PackagingSection />
      <Sustainability />
      <About />
      <BusinessesSection />
      <Contact />
    </main>
  );
}
