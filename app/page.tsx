import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import HowItWorks from '@/components/HowItWorks';
import SocialProof from '@/components/SocialProof';
import Features from '@/components/Features';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <ValueProposition />
      <HowItWorks />
      <SocialProof />
      <Features />
      <CTASection />
      <Footer />
    </main>
  );
}