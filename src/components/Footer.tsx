import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    let section: Element | null = null;

    if (sectionId === 'about-us') {
      // Find the About Us section by looking for the heading
      const headings = document.querySelectorAll('h2, h3');
      for (const heading of headings) {
        if (heading.textContent?.includes('About')) {
          section = heading.closest('section');
          break;
        }
      }
    } else if (sectionId === 'instructors') {
      // Find the Instructors section by looking for the heading
      const headings = document.querySelectorAll('h2, h3');
      for (const heading of headings) {
        if (heading.textContent?.includes('Instructor')) {
          section = heading.closest('div');
          break;
        }
      }
    } else {
      section = document.querySelector(sectionId);
    }

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
              With 3 years of experience, we've helped over 100 students
              achieve their driving goals in Daveyton and surrounding areas.
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
              <li>
                <button
                  onClick={() => scrollToSection('#services-section')}
                  className="text-background/80 hover:text-primary-maroon-light transition-colors text-left"
                >
                  Our Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about-us')}
                  className="text-background/80 hover:text-primary-maroon-light transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('instructors')}
                  className="text-background/80 hover:text-primary-maroon-light transition-colors text-left"
                >
                  Instructors
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#services-section')}
                  className="text-background/80 hover:text-primary-maroon-light transition-colors text-left"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#contact-form')}
                  className="text-background/80 hover:text-primary-maroon-light transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-background">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start text-background/80">
                <MapPin className="w-4 h-4 mr-3 text-primary-maroon-light mt-0.5" />
                <div className="text-sm">
                  <div>7496 Jumba Street</div>
                  <div>Daveyton 1520</div>
                  <div>Benoni, Gauteng</div>
                </div>
              </div>
              <div className="flex items-center text-background/80">
                <Phone className="w-4 h-4 mr-3 text-primary-maroon-light" />
                <div className="text-sm">
                  <div>+27 (71) 570-9231</div>
                  <div>+27 (61) 792-1377</div>
                </div>
              </div>
              <div className="flex items-center text-background/80">
                <Mail className="w-4 h-4 mr-3 text-primary-maroon-light" />
                <span className="text-sm">gobamusawenkosi0801@gmail.com</span>
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