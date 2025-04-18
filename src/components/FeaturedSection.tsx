
import React from 'react';
import { Product } from '../data/products';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

interface FeaturedSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
  link: string;
  linkText: string;
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({
  title,
  subtitle,
  products,
  link,
  linkText,
}) => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2 animate-fade-in">{title}</h2>
            {subtitle && <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>{subtitle}</p>}
          </div>
          <Button variant="link" asChild className="hidden md:flex items-center text-primary animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Link to={link}>
              {linkText} <ArrowRight size={16} className="ml-1" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product}
              delay={index + 3}
            />
          ))}
        </div>
        
        <div className="mt-8 flex justify-center md:hidden">
          <Button variant="outline" asChild className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link to={link}>
              {linkText} <ArrowRight size={16} className="ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
