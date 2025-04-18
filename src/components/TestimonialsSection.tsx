
import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: 'Emily Johnson',
    rating: 5,
    text: 'I\'ve been using the Multivitamin Complex for three months now and my energy levels have significantly improved. Highly recommended!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    product: 'Multivitamin Complex',
    date: 'March 15, 2023'
  },
  {
    name: 'Michael Rodriguez',
    rating: 5,
    text: 'The adjustable dumbbells have been a game-changer for my home workouts. The quality is outstanding and they save so much space.',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    product: 'Adjustable Dumbbells Set',
    date: 'February 3, 2023'
  },
  {
    name: 'Sarah Williams',
    rating: 4,
    text: 'The Plant Protein Powder tastes amazing and mixes well with no clumps. I\'ve tried many vegan proteins and this is definitely the best.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    product: 'Plant Protein Powder',
    date: 'April 22, 2023'
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Real reviews from people who have transformed their health and fitness journey with our products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              {...testimonial}
              delay={index + 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
