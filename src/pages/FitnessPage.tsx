
import React, { useState } from 'react';
import Layout from '../components/Layout';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const FitnessPage = () => {
  const fitnessProducts = products.filter(product => product.category === 'fitness');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Get unique subcategories
  const subcategories = [...new Set(fitnessProducts.map(product => product.subCategory))];
  
  // Filter products by subcategory if one is selected
  const filteredProducts = activeCategory
    ? fitnessProducts.filter(product => product.subCategory === activeCategory)
    : fitnessProducts;

  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gradient-to-b from-accent/10 to-transparent">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 animate-fade-in">Fitness Equipment</h1>
          <p className="text-muted-foreground max-w-3xl mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Explore our collection of high-quality fitness equipment, workout gear, and accessories to help you achieve your fitness goals.
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

export default FitnessPage;
