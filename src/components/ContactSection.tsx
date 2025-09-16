import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState, useEffect } from "react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  // Listen for custom events to pre-fill the form
  useEffect(() => {
    const handleBookService = (event: CustomEvent) => {
      const serviceName = event.detail.service;
      setFormData(prev => ({
        ...prev,
        service: serviceName,
        message: `Hi, I would like to book the ${serviceName} service. Please provide me with more information about the next available dates and requirements.`
      }));
    };

    window.addEventListener('bookService', handleBookService as EventListener);
    return () => {
      window.removeEventListener('bookService', handleBookService as EventListener);
    };
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSendEmail = () => {
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.phone) {
      alert('Please fill in your name and phone number before sending the message.');
      return;
    }

    // Format the email content
    const emailSubject = `New Inquiry from ${formData.firstName} ${formData.lastName} - Jangase Driving Academy`;
    const emailBody = `
New Inquiry from Jangase Driving Academy Website

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email || 'Not provided'}
Phone: ${formData.phone}
Service Interested In: ${formData.service || 'Not specified'}

Message:
${formData.message || 'No additional message provided'}

---
This message was sent from the Jangase Driving Academy website contact form.
    `.trim();

    // Create mailto URL
    const mailtoUrl = `mailto:gobamusawenkosi0801@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    // Open email client
    window.location.href = mailtoUrl;
  };

  const handleSendWhatsApp = () => {
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.phone) {
      alert('Please fill in your name and phone number before sending the message.');
      return;
    }

    // Format the message for WhatsApp
    const whatsappMessage = `
*New Inquiry from Jangase Driving Academy Website*

*Name:* ${formData.firstName} ${formData.lastName}
*Email:* ${formData.email || 'Not provided'}
*Phone:* ${formData.phone}
*Service Interested In:* ${formData.service || 'Not specified'}

*Message:*
${formData.message || 'No additional message provided'}
    `.trim();

    // WhatsApp number (remove + and spaces)
    const whatsappNumber = "27715709231";

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };
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
                  7496 Jumba Street<br />
                  Daveyton 1520<br />
                  Benoni, Gauteng<br />
                  Near DaMore's Tavern
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
                <p className="text-muted-foreground text-lg">+27 (71) 570-9231</p>
                
                <p className="text-muted-foreground text-lg">+27 (61) 792-1377</p>

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
                <p className="text-muted-foreground text-lg">gobamusawenkosi0801@gmail.com</p>
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
          
          <Card id="contact-form" className="border-0 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                  <Input
                    placeholder="Enter your first name"
                    className="bg-background"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                  <Input
                    placeholder="Enter your last name"
                    className="bg-background"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Phone Number</label>
                <Input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="bg-background"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Service Interested In</label>
                <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Learner's License">🚦 Learner's License (R1,500)</SelectItem>
                    <SelectItem value="Code 8 Driving License">🚗 Code 8 Driving License (R4,000)</SelectItem>
                    <SelectItem value="Code 10 Driving License">🚚 Code 10 Driving License (R5,000)</SelectItem>
                    <SelectItem value="Professional Driving Permit">📜 Professional Driving Permit (R1,000)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <Textarea
                  placeholder="Tell us about your driving goals and any questions you have..."
                  className="min-h-32 bg-background"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                />
              </div>

              <div className="space-y-3">
                <Button className="w-full" size="lg" onClick={handleSendEmail}>
                  Send Message
                </Button>
                <Button className="w-full" size="lg" variant="outline" onClick={handleSendWhatsApp}>
                  Send via WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};