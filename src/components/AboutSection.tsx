import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Car, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import khayaImage from "@/assets/Khaya.jpg";

export const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* About Us Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About <span className="text-primary">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Jangase Driving Academy, we are dedicated to providing comprehensive and professional
            driving education. Located in Daveyton, Benoni, we have been helping aspiring drivers
            gain the skills and confidence they need to become safe, responsible drivers. Our
            commitment to excellence, safety, and personalized instruction sets us apart as the
            premier choice for driving education in the area.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Why Choose <span className="text-primary">Jangase</span>?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With 3 years of dedicated experience, Jangase Driving Academy has been the trusted choice
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
              <div className="text-3xl font-bold text-foreground mb-2">100+</div>
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
              <div className="text-3xl font-bold text-foreground mb-2">3</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Instructors Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our <span className="text-primary">Instructor</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet our experienced and certified driving instructor who is dedicated to helping you succeed
            </p>
          </div>

          <div className="flex justify-center">
            <Card className="max-w-md border-0 shadow-card">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
                  <img
                    src={khayaImage}
                    alt="Khaya Goba - Chief Driving Instructor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-2xl text-foreground">Khaya Goba</CardTitle>
                <p className="text-primary font-semibold">Chief Driving Instructor</p>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  With extensive experience in driver education, Khaya is passionate about teaching
                  safe driving practices and helping students build confidence behind the wheel.
                  His patient and professional approach ensures that every student receives
                  personalized attention and quality instruction.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">3+</div>
                    <div className="text-sm text-muted-foreground">Years Teaching</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">100+</div>
                    <div className="text-sm text-muted-foreground">Students Trained</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};