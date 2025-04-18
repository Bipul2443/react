
import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../data/products';
import SearchBar from './SearchBar';

interface ProductGridProps {
  products: Product[];
  title?: string;
  showSearch?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, title, showSearch = false }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  
  const filteredProducts = React.useMemo(() => {
    if (!searchQuery) return products;
    
    const query = searchQuery.toLowerCase();
    return products.filter(product => 
      product.name.toLowerCase().includes(query) || 
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.subCategory.toLowerCase().includes(query)
    );
  }, [products, searchQuery]);

  return (
    <section className="py-16 bg-background">
      {title && (
        <h2 className="text-3xl font-bold mb-10 text-center">{title}</h2>
      )}
      
      {showSearch && (
        <div className="max-w-md mx-auto mb-10">
          <SearchBar 
            value={searchQuery} 
            onChange={setSearchQuery} 
            placeholder="Search products by name, description or category..."
          />
        </div>
      )}
      
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product}
              delay={index}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-muted-foreground">No products found matching "{searchQuery}"</p>
        </div>
      )}
    </section>
  );
};

export default ProductGrid;
