import { X, Check, ArrowRight } from "lucide-react";

const ChallengesSolutions = () => {
  const challenges = [
    "Fragmented communication between universities and employers",
    "Lack of verified partner credentials",
    "Manual tracking of student placements",
    "No centralized data on collaboration outcomes",
  ];

  const solutions = [
    "Unified platform for seamless partnerships",
    "Verified credentials and trust scores",
    "Automated tracking and analytics",
    "Real-time insights and success metrics",
  ];

  return (
    <section className="min-h-screen flex items-center py-20 bg-gradient-to-b from-background to-secondary" id="features">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            From <span className="text-[#FFB4B4]">Challenges</span> to Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            Transforming the way universities and industries collaborate
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 relative max-w-6xl mx-auto">
          {/* Challenges Card */}
          <div className="bg-[#FFE5E5] rounded-3xl p-8 space-y-6 animate-slide-in relative">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-foreground">The Challenges</h3>
              <div className="w-12 h-12 rounded-full bg-[#FFB4B4] flex items-center justify-center">
                <X className="w-6 h-6 text-red-600" strokeWidth={3} />
              </div>
            </div>
            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-red-600" strokeWidth={3} />
                  </div>
                  <p className="text-base text-foreground">{challenge}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow Connection */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
            <div className="w-16 h-16 rounded-full bg-white border-4 border-primary flex items-center justify-center shadow-lg">
              <ArrowRight className="w-8 h-8 text-primary" strokeWidth={2.5} />
            </div>
          </div>

          {/* Solutions Card */}
          <div className="bg-primary rounded-3xl p-8 space-y-6 animate-slide-in animation-delay-200 relative text-white">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Our Solutions</h3>
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Check className="w-6 h-6" strokeWidth={3} />
              </div>
            </div>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4" strokeWidth={3} />
                  </div>
                  <p className="text-base">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSolutions;
