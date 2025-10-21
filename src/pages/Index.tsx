import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ChallengesSolutions from "@/components/ChallengesSolutions";
import FeatureGrid from "@/components/FeatureGrid";
import PersonaFeatures from "@/components/PersonaFeatures";
import TrustFeedback from "@/components/TrustFeedback";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ChallengesSolutions />
      <FeatureGrid />
      <PersonaFeatures />
      <TrustFeedback />
      <Footer />
    </div>
  );
};

export default Index;
