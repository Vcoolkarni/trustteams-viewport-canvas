import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration-new.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-primary via-[#7c7aff] to-accent">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white">
              Connecting Universities with{" "}
              <span className="text-mint">Industry Partners</span> for Meaningful Student Success
            </h1>
            
            <p className="text-xl text-white/90 max-w-xl">
              Empowering institutions and industries to build verified collaborations that drive student outcomes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Start Free Trial
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="flex flex-col">
                <div className="text-4xl font-bold text-yellow-300">500+</div>
                <div className="text-sm text-white/80">Universities</div>
              </div>
              <div className="flex flex-col">
                <div className="text-4xl font-bold text-yellow-300">10K+</div>
                <div className="text-sm text-white/80">Students</div>
              </div>
              <div className="flex flex-col">
                <div className="text-4xl font-bold text-yellow-300">1K+</div>
                <div className="text-sm text-white/80">Partners</div>
              </div>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="relative animate-fade-in animation-delay-200">
            <img
              src={heroIllustration}
              alt="University and Industry Collaboration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
