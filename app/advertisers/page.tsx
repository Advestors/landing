import AdvertisersHero from '@/components/AdvertisersHero';
import AdvertisersFeatures from '@/components/AdvertisersFeatures';
import AdvertisersHowItWorks from '@/components/AdvertisersHowItWorks';
import AdvertisersSocialProof from '@/components/AdvertisersSocialProof';
import AdvertisersCTASection from '@/components/AdvertisersCTASection';
import Footer from '@/components/Footer';

export default function AdvertisersPage() {
  return (
    <main className="min-h-screen bg-white">
      <AdvertisersHero />
      <AdvertisersFeatures />
      <AdvertisersHowItWorks />
      <AdvertisersSocialProof />
      <AdvertisersCTASection />
      <Footer />
    </main>
  );
}






