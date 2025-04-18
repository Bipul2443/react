
import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  delay?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, delay = 0 }) => {
  const { name, price, discountPrice, rating, image, description, new: isNew, bestSeller } = product;
  
  const animationDelay = `${delay * 0.1}s`;

  return (
    <div 
      className="bg-card rounded-lg overflow-hidden card-hover animate-fade-in"
      style={{ animationDelay }}
    >
      <div className="relative h-60 overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        {discountPrice && (
          <div className="absolute top-2 left-2 bg-coral text-white text-xs px-2 py-1 rounded">
            {Math.round((1 - discountPrice / price) * 100)}% OFF
          </div>
        )}
        {isNew && (
          <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded">
            NEW
          </div>
        )}
        {bestSeller && (
          <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs px-2 py-1 rounded">
            BEST SELLER
          </div>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 bg-background/80 hover:bg-background/90 text-foreground rounded-full"
        >
          <Heart size={18} />
        </Button>
      </div>
      <div className="p-4">
        <div className="flex items-center mb-1">
          <div className="flex">
            {Array(5).fill(0).map((_, i) => (
              <Star 
                key={i} 
                size={14}
                className={`${i < Math.floor(rating) ? 'text-amber-400' : 'text-gray-300'} fill-current`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground ml-1">({rating})</span>
        </div>
        <h3 className="font-semibold text-lg mb-1 line-clamp-1">{name}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {discountPrice ? (
              <>
                <span className="font-bold text-lg">${discountPrice.toFixed(2)}</span>
                <span className="text-muted-foreground text-sm line-through ml-2">${price.toFixed(2)}</span>
              </>
            ) : (
              <span className="font-bold text-lg">${price.toFixed(2)}</span>
            )}
          </div>
          <Button size="sm" className="text-xs">
            <ShoppingCart size={15} className="mr-1" /> Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
