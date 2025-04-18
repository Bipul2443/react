
import React, { useState } from 'react';
import Layout from '../components/Layout';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const HealthPage = () => {
  const healthProducts = products.filter(product => product.category === 'health');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Get unique subcategories
  const subcategories = [...new Set(healthProducts.map(product => product.subCategory))];
  
  // Filter products by subcategory if one is selected
  const filteredProducts = activeCategory
    ? healthProducts.filter(product => product.subCategory === activeCategory)
    : healthProducts;

  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 animate-fade-in">Health & Wellness Products</h1>
          <p className="text-muted-foreground max-w-3xl mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Discover our premium range of supplements, vitamins, and wellness products designed to enhance your health and wellbeing.
          </p>
          
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Tabs defaultValue="all" onValueChange={(value) => setActiveCategory(value === 'all' ? null : value)}>
              <TabsList className="bg-card">
                <TabsTrigger value="all">All Products</TabsTrigger>
                {subcategories.map((category) => (
                  <TabsTrigger key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          
          <ProductGrid products={filteredProducts} showSearch={true} />
        </div>
      </div>
    </Layout>
  );
};

export default HealthPage;
