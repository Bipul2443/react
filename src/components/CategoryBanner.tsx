
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

interface CategoryBannerProps {
  title: string;
  description: string;
  image: string;
  link: string;
  align?: 'left' | 'right';
  darkOverlay?: boolean;
}

const CategoryBanner: React.FC<CategoryBannerProps> = ({
  title,
  description,
  image,
  link,
  align = 'left',
  darkOverlay = false
}) => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}>
          <div className="w-full lg:w-1/2 animate-fade-in">
            <div className="rounded-xl overflow-hidden shadow-lg relative">
              <div className={`${darkOverlay ? 'absolute inset-0 bg-black/40 z-10' : ''}`}></div>
              <img src={image} alt={title} className="w-full h-96 object-cover" />
            </div>
          </div>
          <div className="w-full lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-muted-foreground mb-6">{description}</p>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to={link}>Shop Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryBanner;
