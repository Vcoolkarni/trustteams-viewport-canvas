import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Building2, TrendingUp } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

const Hero = () => {
  const stats = [
    { icon: Building2, value: "500+", label: "Universities" },
    { icon: Users, value: "10K+", label: "Students" },
    { icon: TrendingUp, value: "1K+", label: "Partners" },
  ];

  return (
    <section className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Connecting{" "}
              <span className="text-gradient">Universities</span> with{" "}
              <span className="text-gradient">Industry Partners</span> for
              Meaningful Student Success
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              Transform collaboration between educational institutions and industry
              leaders. Build the future workforce together with smart matching,
              verified partnerships, and seamless integration.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 glow-primary text-lg group">
                Start Free Trial
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Schedule Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-start space-y-2">
                  <stat.icon className="w-6 h-6 text-primary" />
                  <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="relative animate-fade-in animation-delay-200">
            <div className="relative z-10 rounded-2xl overflow-hidden glow-hover">
              <img
                src={heroIllustration}
                alt="University and Industry Collaboration"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10 animate-glow" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10 animate-glow animation-delay-1000" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
