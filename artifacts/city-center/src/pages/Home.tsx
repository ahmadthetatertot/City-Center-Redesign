import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import TrustStrip from '@/components/TrustStrip';
import Hero from '@/components/Hero';
import SocialProofTicker from '@/components/SocialProofTicker';
import CategoryGrid from '@/components/CategoryGrid';
import FeaturedProducts from '@/components/FeaturedProducts';
import GamingSection from '@/components/GamingSection';
import DealsBanner from '@/components/DealsBanner';
import Brands from '@/components/Brands';
import WhyChooseUs from '@/components/WhyChooseUs';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col w-full bg-black overflow-x-hidden text-white font-sans">
      <AnnouncementBar />
      <Header />
      
      <main className="flex-1 w-full">
        <Hero />
        <SocialProofTicker />
        
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-24">
          <CategoryGrid />
          <FeaturedProducts />
        </div>
        
        <GamingSection />
        
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-24">
          <DealsBanner />
          <WhyChooseUs />
          <Brands />
        </div>
        
        <Newsletter />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
