import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import TrustStrip from '@/components/TrustStrip';
import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import FeaturedProducts from '@/components/FeaturedProducts';
import GamingSection from '@/components/GamingSection';
import DealsBanner from '@/components/DealsBanner';
import Brands from '@/components/Brands';
import WhyChooseUs from '@/components/WhyChooseUs';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col w-full bg-background overflow-x-hidden">
      <AnnouncementBar />
      <Header />
      <TrustStrip />
      
      <main className="flex-1 w-full">
        <Hero />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 py-12">
          <CategoryGrid />
          <FeaturedProducts />
        </div>
        
        <GamingSection />
        
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 py-16">
          <DealsBanner />
          <Brands />
          <WhyChooseUs />
        </div>
        
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
}
