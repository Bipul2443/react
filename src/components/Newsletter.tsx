
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

const Newsletter: React.FC = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Subscription successful!",
      description: "Thank you for subscribing to our newsletter.",
    });
    (e.target as HTMLFormElement).reset();
  };
  
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with ActiveApex</h2>
          <p className="text-primary-foreground/80 mb-8">
            Subscribe to our newsletter for expert health tips, exclusive deals, and new product announcements.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button type="submit" className="bg-white text-primary hover:bg-white/90">
              Subscribe <ArrowRight size={16} className="ml-2" />
            </Button>
          </form>
          
          <p className="text-sm text-primary-foreground/70 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
