import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import Brands from "@/components/Brands";
import FeaturedProducts from "@/components/FeaturedProducts";
import DealsBanner from "@/components/DealsBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Header />
      <main className="flex-grow">
        <Hero />
        <CategoryGrid />
        <Brands />
        <FeaturedProducts />
        <DealsBanner />
        <WhyChooseUs />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
