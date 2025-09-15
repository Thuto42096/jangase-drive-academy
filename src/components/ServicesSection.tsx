import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Truck, Bike, Users } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Class B License",
    description: "Standard passenger vehicle license for cars and light trucks",
    features: ["Manual & Automatic", "Highway Training", "Parking Skills", "Traffic Rules"],
    price: "From $350"
  },
  {
    icon: Truck,
    title: "Commercial License",
    description: "Professional driving license for commercial vehicles",
    features: ["CDL Training", "Heavy Vehicles", "Safety Protocols", "Career Support"],
    price: "From $800"
  },
  {
    icon: Bike,
    title: "Motorcycle License",
    description: "Two-wheeler license for motorcycles and scooters",
    features: ["Basic to Advanced", "Safety Gear", "Road Skills", "Defensive Riding"],
    price: "From $250"
  },
  {
    icon: Users,
    title: "Refresher Course",
    description: "Brush up your driving skills with experienced instructors",
    features: ["Skill Assessment", "Confidence Building", "Latest Rules", "Flexible Schedule"],
    price: "From $150"
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-primary">Courses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive range of driving courses designed to meet your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-card">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t">
                  <div className="text-2xl font-bold text-primary mb-3">{service.price}</div>
                  <Button className="w-full" variant="outline">
                    Learn More
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