import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Car, Award } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Why Choose <span className="text-primary">Jangase</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over a decade of experience, Jangase Driving Academy has been the trusted choice 
              for aspiring drivers. Our commitment to safety, professionalism, and excellence 
              sets us apart in the industry.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Certified Instructors</h3>
                  <p className="text-muted-foreground">All our instructors are licensed professionals with extensive teaching experience.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Modern Fleet</h3>
                  <p className="text-muted-foreground">Learn with our well-maintained, modern vehicles equipped with safety features.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Flexible Schedule</h3>
                  <p className="text-muted-foreground">Choose from morning, afternoon, or evening slots that fit your schedule.</p>
                </div>
              </div>
            </div>
            
            <Button variant="default" size="lg" className="text-lg px-8 py-6">
              Get Started Today
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">500+</div>
              <div className="text-muted-foreground">Happy Students</div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl text-center">
              <Car className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">15</div>
              <div className="text-muted-foreground">Modern Vehicles</div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">98%</div>
              <div className="text-muted-foreground">Pass Rate</div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl text-center">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">10+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};