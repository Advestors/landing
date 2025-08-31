import AdvestorsHero from '@/components/AdvestorsHero';
import AdvestorsFeatures from '@/components/AdvestorsFeatures';
import AdvestorsHowItWorks from '@/components/AdvestorsHowItWorks';
import AdvestorsSocialProof from '@/components/AdvestorsSocialProof';
import AdvestorsCTASection from '@/components/AdvestorsCTASection';
import Footer from '@/components/Footer';

export default function AdvestorsPage() {
  return (
    <main className="min-h-screen bg-white">
      <AdvestorsHero />
      <AdvestorsFeatures />
      <AdvestorsHowItWorks />
      <AdvestorsSocialProof />
      <AdvestorsCTASection />
      <Footer />
    </main>
  );
}
