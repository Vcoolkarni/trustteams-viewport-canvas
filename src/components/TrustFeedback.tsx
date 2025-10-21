import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TrustFeedback = () => {
  const [currentFeedback, setCurrentFeedback] = useState(0);

  const institutions = [
    "MIT", "Harvard", "Stanford", "Oxford", "Cambridge", 
    "Berkeley", "Yale", "Princeton", "Columbia", "Cornell",
  ];

  const feedbacks = [
    {
      name: "Dr. Sarah Johnson",
      role: "Dean of Student Affairs, MIT",
      avatar: "SJ",
      text: "TRUSTTEAMS has revolutionized how we connect our students with industry partners. The verification process is seamless and the matching algorithm is incredibly accurate.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Talent Acquisition Lead, Tech Corp",
      avatar: "MC",
      text: "Finding qualified student talent has never been easier. The platform saves us countless hours and connects us with exactly the candidates we need.",
      rating: 5,
    },
    {
      name: "Prof. Emily Rodriguez",
      role: "Computer Science Department, Stanford",
      avatar: "ER",
      text: "The analytics dashboard gives us real-time insights into student success rates. It's become an essential tool for our industry partnership program.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeedback((prev) => (prev + 1) % feedbacks.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextFeedback = () => {
    setCurrentFeedback((prev) => (prev + 1) % feedbacks.length);
  };

  const prevFeedback = () => {
    setCurrentFeedback((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Institutions Marquee */}
        <div className="mb-20 overflow-hidden">
          <h3 className="text-center text-2xl font-bold mb-8 text-muted-foreground">
            Trusted by Leading Institutions
          </h3>
          <div className="relative">
            <div className="flex animate-marquee space-x-16">
              {[...institutions, ...institutions].map((institution, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 text-4xl font-bold text-muted-foreground/30 hover:text-primary transition-colors duration-300 cursor-pointer"
                >
                  {institution}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feedback Carousel */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 animate-fade-up">
            What Our Users Say
          </h2>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm border border-border rounded-3xl p-8 lg:p-12 glow-hover animate-fade-in">
              {/* Rating Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(feedbacks[currentFeedback].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>

              {/* Feedback Text */}
              <blockquote className="text-xl lg:text-2xl text-center text-foreground mb-8 leading-relaxed italic">
                "{feedbacks[currentFeedback].text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                  {feedbacks[currentFeedback].avatar}
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg">{feedbacks[currentFeedback].name}</div>
                  <div className="text-muted-foreground">{feedbacks[currentFeedback].role}</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevFeedback}
                className="rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              <div className="flex space-x-2">
                {feedbacks.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFeedback(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentFeedback
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextFeedback}
                className="rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustFeedback;
