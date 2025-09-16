import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Truck, FileText, GraduationCap } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "🚦 Learner's License",
    description: "Get your learner's license with comprehensive study support",
    features: [
      "Study material (road signs, rules of the road, vehicle controls)",
      "Learner's license classes/tutorials",
      "Booking assistance at the traffic department",
      "Transport to and from testing center (optional)",
      "Mock tests to prepare for the exam"
    ],
    price: "R1,500"
  },
  {
    icon: Car,
    title: "🚗 Code 8 Driving License",
    description: "Light Motor Vehicle license with comprehensive training",
    features: [
      "Learner's license support (if needed)",
      "Driving lessons in manual/automatic car",
      "Use of driving school vehicle for test",
      "Instructor guidance on parking, hill starts, road test prep",
      "Booking assistance for driver's license test",
      "Pick-up & drop-off for lessons (within certain radius)"
    ],
    price: "R4,000"
  },
  {
    icon: Truck,
    title: "🚚 Code 10 Driving License",
    description: "Heavy Motor Vehicle license for professional drivers",
    features: [
      "Driving lessons in a Code 10 truck",
      "Use of vehicle for driver's test",
      "Instructor training on vehicle control, road safety",
      "Defensive driving techniques",
      "Booking assistance for test date",
      "Pick-up & drop-off (where possible)"
    ],
    price: "R5,000"
  },
  {
    icon: FileText,
    title: "📜 Professional Driving Permit",
    description: "PDP assistance for commercial driving careers",
    features: [
      "Assistance with forms and requirements",
      "Medical certificate & police clearance guidance",
      "Document preparation (ID, driver's license, photos)",
      "Booking support at licensing department",
      "Transport to traffic department (optional)",
      "Admin support until PDP is issued"
    ],
    price: "R1,000"
  }
];

export const ServicesSection = () => {
  const handleBookService = (serviceName: string) => {
    // Dispatch custom event to notify ContactSection
    const event = new CustomEvent('bookService', {
      detail: { service: serviceName }
    });
    window.dispatchEvent(event);

    // Scroll to contact form
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services-section" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-primary">Courses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive range of driving courses designed to meet your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-card h-full flex flex-col">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-grow flex flex-col">
                <div className="flex-grow">
                  <h4 className="font-semibold text-foreground mb-3">Services provided:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t mt-auto">
                  <div className="text-2xl font-bold text-primary mb-3">{service.price}</div>
                  <Button
                    className="w-full"
                    variant="outline"
                    onClick={() => handleBookService(service.title.replace(/[🚦🚗🚚📜]\s/, ''))}
                  >
                    Book
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};