
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import FeaturedSection from '../components/FeaturedSection';
import CategoryBanner from '../components/CategoryBanner';
import TestimonialsSection from '../components/TestimonialsSection';
import Newsletter from '../components/Newsletter';
import { products } from '../data/products';

const Index = () => {
  const featuredProducts = products.filter(product => product.featured);
  const bestSellers = products.filter(product => product.bestSeller);
  const newArrivals = products.filter(product => product.new);
  
  return (
    <Layout>
      <Hero />
      
      <div className="bg-gradient-to-b from-sky-50 to-white pt-16">
        <FeaturedSection 
          title="Featured Products"
          subtitle="Handpicked by our experts for maximum results"
          products={featuredProducts}
          link="/"
          linkText="View All Featured"
        />
      </div>
      
      <CategoryBanner 
        title="Health & Wellness"
        description="Discover premium supplements and wellness products designed to support your health goals. From essential vitamins to specialized formulas, we have everything you need to feel your best every day."
        image="/lovable-uploads/073860d7-0d44-41f1-a516-6f0dc25ff2bd.png"
        link="/health"
        darkOverlay={true}
      />
      
      <FeaturedSection 
        title="Best Sellers"
        subtitle="Our most popular products loved by customers"
        products={bestSellers}
        link="/"
        linkText="View All Best Sellers"
      />
      
      <CategoryBanner 
        title="Fitness Equipment"
        description="Take your workouts to the next level with our professional-grade fitness equipment. Whether you're building a home gym or adding to your collection, our durable and effective tools will help you reach your fitness goals."
        image="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
        link="/fitness"
        align="right"
      />
      
      <FeaturedSection 
        title="New Arrivals"
        subtitle="Just added to our collection"
        products={newArrivals}
        link="/"
        linkText="View All New Arrivals"
      />
      
      <TestimonialsSection />
      <Newsletter />
    </Layout>
  );
};

export default Index;
