
import React from 'react';
import Layout from '../components/Layout';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 animate-fade-in">Contact Us</h1>
            <p className="text-muted-foreground mb-12 max-w-3xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
              We're here to help! Fill out the form below, and our team will get back to you as soon as possible.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 text-primary p-3 rounded-full">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <a href="mailto:support@activeapex.com" className="text-muted-foreground hover:text-primary transition-colors">
                      support@activeapex.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 text-primary p-3 rounded-full">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <a href="tel:+18005551234" className="text-muted-foreground hover:text-primary transition-colors">
                      +1 (800) 555-1234
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 text-primary p-3 rounded-full">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Address</h3>
                    <address className="text-muted-foreground not-italic">
                      123 Fitness Lane<br />
                      Los Angeles, CA 90001<br />
                      United States
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 bg-primary/10 text-primary p-3 rounded-full">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9AM - 5PM<br />
                      Saturday: 10AM - 4PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <form onSubmit={handleSubmit} className="space-y-4 bg-card p-6 rounded-lg shadow-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                      <Input id="name" required placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" type="email" required placeholder="john@example.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input id="subject" required placeholder="How can we help?" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea 
                      id="message" 
                      required 
                      placeholder="Please provide details about your inquiry..."
                      className="min-h-[150px]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full sm:w-auto">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
