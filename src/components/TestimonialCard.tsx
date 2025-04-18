
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  rating: number;
  text: string;
  image: string;
  product: string;
  date: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  rating,
  text,
  image,
  product,
  date,
  delay = 0,
}) => {
  return (
    <div 
      className="bg-card p-6 rounded-lg shadow-sm animate-fade-in"
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-muted-foreground">{date}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {Array(5).fill(0).map((_, i) => (
          <Star 
            key={i} 
            size={16}
            className={`${i < rating ? 'text-amber-400' : 'text-gray-300'} fill-current`}
          />
        ))}
      </div>
      
      <p className="text-muted-foreground mb-3">{text}</p>
      <p className="text-sm font-medium">Product: {product}</p>
    </div>
  );
};

export default TestimonialCard;
