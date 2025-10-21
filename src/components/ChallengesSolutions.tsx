import { AlertCircle, CheckCircle, ArrowRight } from "lucide-react";
import challengesIllustration from "@/assets/challenges-illustration.png";

const ChallengesSolutions = () => {
  const challenges = [
    "Fragmented communication channels",
    "Manual verification processes",
    "Limited visibility into opportunities",
    "Disconnected systems and data",
  ];

  const solutions = [
    "Unified collaboration platform",
    "Automated identity verification",
    "Smart matching algorithms",
    "Seamless integration capabilities",
  ];

  return (
    <section className="min-h-screen flex items-center py-20 bg-background" id="features">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Transforming University–Industry Collaboration
          </h2>
          <p className="text-xl text-muted-foreground">
            Breaking down barriers and building bridges for student success
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Challenges Card */}
          <div className="bg-challenge-bg border-2 border-challenge-border rounded-2xl p-8 space-y-6 animate-slide-in glow-hover">
            <div className="flex items-center space-x-3 mb-6">
              <AlertCircle className="w-8 h-8 text-destructive" />
              <h3 className="text-2xl font-bold">Challenges</h3>
            </div>
            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  <p className="text-lg text-foreground">{challenge}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions Card */}
          <div className="bg-mint border-2 border-mint-foreground/20 rounded-2xl p-8 space-y-6 animate-slide-in animation-delay-200 glow-hover">
            <div className="flex items-center space-x-3 mb-6">
              <CheckCircle className="w-8 h-8 text-mint-foreground" />
              <h3 className="text-2xl font-bold">Solutions</h3>
            </div>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-mint-foreground mt-1 flex-shrink-0" />
                  <p className="text-lg text-foreground font-medium">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex justify-center animate-fade-in animation-delay-400">
          <div className="relative max-w-md">
            <img
              src={challengesIllustration}
              alt="Collaboration and Problem Solving"
              className="w-full h-auto rounded-2xl"
            />
            {/* Connecting Arrow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
              <ArrowRight className="w-16 h-16 text-primary animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSolutions;
