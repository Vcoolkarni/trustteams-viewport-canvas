import { useState } from "react";
import { Building, Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const PersonaFeatures = () => {
  const [activeTab, setActiveTab] = useState("universities");

  const tabs = [
    { id: "universities", label: "Universities", icon: Building },
    { id: "partners", label: "Industry Partners", icon: Briefcase },
    { id: "students", label: "Students", icon: GraduationCap },
  ];

  const content = {
    universities: {
      steps: [
        { title: "Connect & Verify", description: "Establish verified partnerships with industry leaders" },
        { title: "Match Students", description: "Use smart algorithms to connect students with opportunities" },
        { title: "Track Success", description: "Monitor outcomes and student career progression" },
      ],
      color: "primary",
    },
    partners: {
      steps: [
        { title: "Post Projects", description: "Share real-world challenges and opportunities" },
        { title: "Find Talent", description: "Access a pool of pre-vetted student candidates" },
        { title: "Build Pipeline", description: "Develop lasting relationships with future employees" },
      ],
      color: "accent",
    },
    students: {
      steps: [
        { title: "Discover", description: "Browse verified opportunities from top companies" },
        { title: "Apply & Grow", description: "Gain hands-on experience and build your portfolio" },
        { title: "Succeed", description: "Launch your career with industry connections" },
      ],
      color: "mint",
    },
  };

  return (
    <section className="min-h-screen flex items-center py-20 bg-background" id="solutions">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Solutions for Every User
          </h2>
          <p className="text-lg text-muted-foreground">
            Tailored experiences that drive success across all stakeholders
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              variant={activeTab === tab.id ? "default" : "outline"}
              className={`transition-all duration-300 ${
                activeTab === tab.id
                  ? "glow-primary scale-105"
                  : ""
              }`}
            >
              <tab.icon className="w-5 h-5 mr-2" />
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {content[activeTab as keyof typeof content].steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Connector Line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-accent -z-10" />
                )}
                
                <div className="flex flex-col items-center text-center space-y-4">
                  {/* Circle Step */}
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br from-${content[activeTab as keyof typeof content].color} to-accent flex items-center justify-center text-white text-3xl font-bold glow-primary`}>
                    {index + 1}
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonaFeatures;
