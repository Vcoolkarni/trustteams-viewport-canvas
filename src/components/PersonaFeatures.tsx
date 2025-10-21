import { useState } from "react";
import { GraduationCap, Briefcase, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const PersonaFeatures = () => {
  const [activeTab, setActiveTab] = useState("universities");

  const tabs = [
    { id: "universities", label: "Universities", icon: GraduationCap },
    { id: "partners", label: "Industry Partners", icon: Briefcase },
    { id: "students", label: "Students", icon: Users },
  ];

  const content = {
    universities: {
      icon: GraduationCap,
      title: "Universities",
      subtitle: "How TRUSTTEAMS works for you",
      steps: [
        { title: "Connect & Verify", description: "Find and verify industry partners instantly" },
        { title: "Match Students", description: "AI-powered matching with partner opportunities" },
        { title: "Track Success", description: "Monitor outcomes and student achievements" },
      ],
    },
    partners: {
      icon: Briefcase,
      title: "Industry Partners",
      subtitle: "How TRUSTTEAMS works for you",
      steps: [
        { title: "Post Projects", description: "Share real-world challenges and opportunities" },
        { title: "Find Talent", description: "Access pre-vetted student candidates" },
        { title: "Build Pipeline", description: "Develop lasting relationships with future employees" },
      ],
    },
    students: {
      icon: Users,
      title: "Students",
      subtitle: "How TRUSTTEAMS works for you",
      steps: [
        { title: "Discover", description: "Browse verified opportunities from top companies" },
        { title: "Apply & Grow", description: "Gain hands-on experience and build portfolio" },
        { title: "Succeed", description: "Launch career with industry connections" },
      ],
    },
  };

  return (
    <section className="min-h-screen flex items-center py-20 bg-gradient-to-b from-secondary to-background" id="solutions">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Solutions for <span className="text-primary">Every User</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tailored experiences for universities, industry partners, and students
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              size="lg"
              variant={activeTab === tab.id ? "default" : "outline"}
              className={`transition-all duration-300 ${
                activeTab === tab.id ? "shadow-lg" : ""
              }`}
            >
              <tab.icon className="w-5 h-5 mr-2" />
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-12">
            <div className="text-center mb-12">
              {(() => {
                const Icon = content[activeTab as keyof typeof content].icon;
                return (
                  <div className="inline-flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{content[activeTab as keyof typeof content].title}</h3>
                    <p className="text-muted-foreground">{content[activeTab as keyof typeof content].subtitle}</p>
                  </div>
                );
              })()}
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative">
              {content[activeTab as keyof typeof content].steps.map((step, index) => (
                <div
                  key={index}
                  className="relative animate-fade-in text-center"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Connector Line */}
                  {index < 2 && (
                    <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-primary/30" />
                  )}
                  
                  <div className="flex flex-col items-center space-y-4">
                    {/* Circle Step */}
                    <div className="relative z-10 w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                      {index + 1}
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-foreground">
                        {step.title}
                      </h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonaFeatures;
