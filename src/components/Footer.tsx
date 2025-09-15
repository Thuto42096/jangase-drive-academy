import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-primary-maroon-light">
              Jangase Driving Academy
            </h3>
            <p className="text-background/80 mb-6 leading-relaxed">
              Your trusted partner in learning to drive safely and confidently. 
              With over 10 years of experience, we've helped hundreds of students 
              achieve their driving goals.
            </p>
            <div className="flex space-x-4">
              <div className="bg-primary-maroon p-2 rounded-full hover:bg-primary-maroon-light transition-colors cursor-pointer">
                <Facebook className="w-5 h-5 text-white" />
              </div>
              <div className="bg-primary-maroon p-2 rounded-full hover:bg-primary-maroon-light transition-colors cursor-pointer">
                <Twitter className="w-5 h-5 text-white" />
              </div>
              <div className="bg-primary-maroon p-2 rounded-full hover:bg-primary-maroon-light transition-colors cursor-pointer">
                <Instagram className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-background">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-primary-maroon-light transition-colors">Our Courses</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary-maroon-light transition-colors">About Us</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary-maroon-light transition-colors">Instructors</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary-maroon-light transition-colors">Pricing</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary-maroon-light transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-background">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center text-background/80">
                <MapPin className="w-4 h-4 mr-3 text-primary-maroon-light" />
                <span className="text-sm">123 Main Street, Downtown</span>
              </div>
              <div className="flex items-center text-background/80">
                <Phone className="w-4 h-4 mr-3 text-primary-maroon-light" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-background/80">
                <Mail className="w-4 h-4 mr-3 text-primary-maroon-light" />
                <span className="text-sm">info@jangasedriving.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60">
            © 2024 Jangase Driving Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};