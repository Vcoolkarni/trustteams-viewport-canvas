import { Button } from "@/components/ui/button";
import { ArrowUp, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    Solutions: ["For Universities", "For Industry", "For Students", "Pricing"],
    Features: ["Smart Matching", "Analytics", "Verification", "Integrations"],
    Company: ["About Us", "Careers", "Blog", "Press"],
    Support: ["Help Center", "Contact", "Privacy Policy", "Terms of Service"],
  };

  return (
    <footer className="bg-background border-t border-border" id="contact">
      {/* CTA Section */}
      <div className="bg-gradient-to-br from-primary via-[#7c7aff] to-accent py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Transform Your Partnerships?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of universities and industry partners building the future workforce together.
          </p>
          <p className="text-sm text-white/70 mb-8">
            No credit card required • Free 14-day trial • Cancel anytime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Start Free Trial
              <ArrowUp className="ml-2 rotate-45" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white/10">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Logo & Tagline */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex flex-col leading-none">
                <span className="text-3xl font-bold text-background/70">TRUST</span>
                <span className="text-3xl font-bold text-primary-light">TEAMS</span>
              </div>
              <p className="text-background/70 max-w-xs">
                Connecting universities with industry partners for meaningful student success.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary-light transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-primary-light transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-primary-light transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-bold text-lg mb-4">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-background/70 hover:text-primary-light transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/70 text-sm">
              © 2024 TRUSTTEAMS. All rights reserved.
            </p>
            
            {/* Scroll to Top */}
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="icon"
              className="rounded-full border-primary-light text-primary-light hover:bg-primary-light hover:text-foreground"
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
