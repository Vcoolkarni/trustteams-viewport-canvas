import { Link, BarChart3, Shield, FileCheck, Users, Layers } from "lucide-react";

const FeatureGrid = () => {
  const features = [
    {
      icon: Link,
      title: "Smart Matching",
      description: "AI-powered connections between universities and industry partners",
      bgColor: "bg-primary",
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Track collaboration outcomes and student success metrics",
      bgColor: "bg-primary",
    },
    {
      icon: Shield,
      title: "Verified Partners",
      description: "Trust scores and credential verification for all partners",
      bgColor: "bg-gradient-to-br from-blue-400 to-cyan-300",
    },
    {
      icon: FileCheck,
      title: "Automated Workflows",
      description: "Streamline paperwork and approval processes",
      bgColor: "bg-gradient-to-br from-blue-400 to-purple-400",
    },
    {
      icon: Users,
      title: "Student Placement",
      description: "Manage internships, projects, and job placements effortlessly",
      bgColor: "bg-gradient-to-br from-blue-300 to-cyan-200",
    },
    {
      icon: Layers,
      title: "Integrated Platform",
      description: "One dashboard for all your partnership management needs",
      bgColor: "bg-primary",
    },
  ];

  return (
    <section className="min-h-screen flex items-center py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Smart. <span className="text-primary">Simple.</span> Scalable.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything institutions and companies need to connect effortlessly
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-border rounded-2xl p-8 space-y-4 hover:shadow-xl transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.bgColor} flex items-center justify-center`}>
                <feature.icon className="w-7 h-7 text-white" strokeWidth={2} />
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
