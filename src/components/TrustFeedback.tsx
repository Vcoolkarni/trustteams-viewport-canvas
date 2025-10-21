import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const TrustFeedback = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const institutions = [
    { name: "Oxford", logo: "OX" },
    { name: "Harvard", logo: "H" },
    { name: "Cambridge", logo: "⊞" },
    { name: "Yale", logo: "Y" },
    { name: "UC Berkeley", logo: "B" },
    { name: "Princeton", logo: "P" },
    { name: "MIT", logo: "MIT" },
    { name: "Stanford", logo: "⊤" },
  ];

  const testimonials = [
    {
      text: "As a student, TRUSTTEAMS opened doors to opportunities I never knew existed. The verified partners made all the difference.",
      author: "Maria Rodriguez",
      role: "Computer Science Student",
      institution: "MIT",
      initials: "MR",
    },
    {
      text: "Finding quality talent has never been easier. The platform's matching algorithm connects us with the right students every time.",
      author: "James Chen",
      role: "VP of Talent Acquisition",
      institution: "Tech Innovations Inc.",
      initials: "JC",
    },
    {
      text: "TRUSTTEAMS has transformed how we connect our students with industry partners. The automated compliance features alone have saved us countless hours.",
      author: "Dr. Sarah Chen",
      role: "Academic Director",
      institution: "Tech University",
      initials: "SC",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Institution Logos */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Trusted by Leading Institutions <span className="text-primary">Worldwide</span>
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* Duplicate for seamless loop */}
            {[...institutions, ...institutions].map((inst, index) => (
              <div
                key={index}
                className="w-32 h-32 bg-gray-100 rounded-2xl flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl font-bold text-gray-600 mb-1">{inst.logo}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{inst.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            What Our <span className="text-primary">Community</span> Says
          </h2>

          <div className="relative">
            {/* Testimonial Card */}
            <div className="bg-gradient-to-br from-primary via-[#7c7aff] to-accent rounded-3xl p-12 text-white shadow-2xl">
              {/* Quote Icon */}
              <Quote className="w-16 h-16 text-white/30 mb-6" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-xl lg:text-2xl mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-xl font-bold">
                  {testimonials[currentTestimonial].initials}
                </div>
                <div>
                  <div className="font-bold text-lg">{testimonials[currentTestimonial].author}</div>
                  <div className="text-white/80">{testimonials[currentTestimonial].role}</div>
                  <div className="text-white/60 text-sm">{testimonials[currentTestimonial].institution}</div>
                </div>
              </div>

              {/* Large Quote Mark Decoration */}
              <Quote className="absolute bottom-8 right-8 w-32 h-32 text-white/10" />
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                onClick={prevTestimonial}
                variant="outline"
                size="icon"
                className="rounded-full w-12 h-12"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentTestimonial
                        ? "bg-primary w-8"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={nextTestimonial}
                variant="outline"
                size="icon"
                className="rounded-full w-12 h-12"
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
