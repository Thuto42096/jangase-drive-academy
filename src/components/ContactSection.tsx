import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your driving journey? Contact us today for more information or to book your first lesson
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <MapPin className="w-5 h-5 text-primary mr-3" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  123 Main Street, Downtown<br />
                  City, State 12345<br />
                  Near Central Shopping Mall
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Phone className="w-5 h-5 text-primary mr-3" />
                  Phone Number
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">+1 (555) 123-4567</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Mail className="w-5 h-5 text-primary mr-3" />
                  Email Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg">info@jangasedriving.com</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Clock className="w-5 h-5 text-primary mr-3" />
                  Operating Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                  <Input placeholder="Enter your first name" className="bg-background" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                  <Input placeholder="Enter your last name" className="bg-background" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                <Input type="email" placeholder="Enter your email" className="bg-background" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Phone Number</label>
                <Input type="tel" placeholder="Enter your phone number" className="bg-background" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell us about your driving goals and any questions you have..." 
                  className="min-h-32 bg-background"
                />
              </div>
              
              <Button className="w-full" size="lg">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};