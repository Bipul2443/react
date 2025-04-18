import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-bold mb-4 text-gradient">Bipul Store</h3>
            <p className="text-muted-foreground mb-4">
              Premium health and fitness products to help you achieve your best self. Made in the USA.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/health" className="text-muted-foreground hover:text-accent transition-colors">Health Products</Link></li>
              <li><Link to="/fitness" className="text-muted-foreground hover:text-accent transition-colors">Fitness Equipment</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-accent transition-colors">New Arrivals</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-accent transition-colors">Best Sellers</Link></li>
            </ul>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">Contact Us</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-accent transition-colors">Shipping Policy</Link></li>
              <li><Link to="/" className="text-muted-foreground hover:text-accent transition-colors">Return Policy</Link></li>
            </ul>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">Subscribe for special offers, fitness tips, and new product alerts.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex h-10 w-full rounded-l-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <button className="bg-accent hover:bg-accent/90 text-accent-foreground transition-colors rounded-r-md px-3 flex items-center justify-center">
                <Mail size={18} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Bipul Store. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/" className="text-sm text-muted-foreground hover:text-accent transition-colors">Privacy Policy</Link>
              <Link to="/" className="text-sm text-muted-foreground hover:text-accent transition-colors">Terms of Service</Link>
              <Link to="/" className="text-sm text-muted-foreground hover:text-accent transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
