import { Sparkles, BarChart3, Shield, FileText, MessageSquare, Plug } from "lucide-react";

const FeatureGrid = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Smart Matching",
      description: "AI-powered algorithms connect the right students with the perfect opportunities",
      gradient: "from-primary/10 to-accent/10",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Real-time insights and metrics to track engagement and success rates",
      gradient: "from-accent/10 to-primary/10",
    },
    {
      icon: Shield,
      title: "Verified Profiles",
      description: "Automated verification ensures trust and authenticity across all partnerships",
      gradient: "from-primary/10 to-mint/30",
    },
    {
      icon: FileText,
      title: "Automated Reports",
      description: "Generate comprehensive reports with a single click, saving hours of work",
      gradient: "from-mint/30 to-primary/10",
    },
    {
      icon: MessageSquare,
      title: "Collaboration Spaces",
      description: "Dedicated workspaces for seamless communication and project management",
      gradient: "from-accent/10 to-primary/10",
    },
    {
      icon: Plug,
      title: "Integration Ready",
      description: "Connect with your existing tools through our powerful API and integrations",
      gradient: "from-primary/10 to-accent/10",
    },
  ];

  return (
    <section className="min-h-screen flex items-center py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Smart. <span className="text-gradient italic">Simple.</span> Scalable.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything institutions and companies need to connect effortlessly
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 space-y-4 hover:scale-105 hover:shadow-lg transition-all duration-300 animate-fade-up cursor-pointer`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
