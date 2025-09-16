import { Button } from "@/components/ui/button";
import { Car, Clock, Shield, Award } from "lucide-react";
import heroImage from "@/assets/bmw_m4.avif";

export const HeroSection = () => {
  const scrollToServices = () => {
    const servicesSection = document.querySelector('#services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }} />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-slate-950">
            <span className="text-white" style={{ WebkitTextStroke: '2px #dc2626' } as React.CSSProperties}>Jangase</span> <span className="text-primary-maroon-light">Driving</span> Academy
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Learn to drive with confidence. Professional instruction,
            modern vehicles, and a commitment to safety.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6" onClick={scrollToServices}>
              Start Your Journey
            </Button>

          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 mb-4">
                <Car className="w-8 h-8 text-primary-maroon-light" />
              </div>
              <div className="text-3xl font-bold">100+</div>
              <div className="text-white/80">Students Passed</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 mb-4">
                <Clock className="w-8 h-8 text-primary-maroon-light" />
              </div>
              <div className="text-3xl font-bold">3</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 mb-4">
                <Shield className="w-8 h-8 text-primary-maroon-light" />
              </div>
              <div className="text-3xl font-bold">98%</div>
              <div className="text-white/80">Pass Rate</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 mb-4">
                <Award className="w-8 h-8 text-primary-maroon-light" />
              </div>
              <div className="text-3xl font-bold">5★</div>
              <div className="text-white/80">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};