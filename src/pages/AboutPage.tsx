
import React from 'react';
import Layout from '../components/Layout';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const values = [
    {
      title: 'Quality',
      description: 'We source only the highest quality products that meet our strict standards for effectiveness and safety.'
    },
    {
      title: 'Innovation',
      description: 'We continuously seek out new and improved products to help our customers achieve their health and fitness goals.'
    },
    {
      title: 'Education',
      description: 'We believe in empowering our customers with knowledge about health, fitness, and the products they use.'
    },
    {
      title: 'Community',
      description: 'We foster a supportive community of like-minded individuals committed to health and wellness.'
    }
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      bio: 'Former professional athlete with a passion for making quality health and fitness products accessible to everyone.'
    },
    {
      name: 'Sarah Chen',
      role: 'Chief Product Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      bio: 'Nutritionist and fitness expert with over 10 years of experience in product development and formulation.'
    },
    {
      name: 'Marcus Williams',
      role: 'Head of Customer Experience',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      bio: 'Dedicated to ensuring every customer has an exceptional experience with our products and services.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6 animate-fade-in">Our Mission</h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              At ActiveApex, we're committed to helping people achieve their health and fitness goals by providing premium quality products and evidence-based education.
            </p>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Button asChild size="lg">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                ActiveApex was founded in 2015 by Alex Johnson, a former professional athlete who struggled to find high-quality supplements and fitness equipment that met his standards.
              </p>
              <p className="text-muted-foreground mb-4">
                Frustrated by products that didn't deliver on their promises, Alex set out to create a company that would prioritize quality, transparency, and results above all else.
              </p>
              <p className="text-muted-foreground">
                Today, ActiveApex is a leading provider of health supplements and fitness equipment, trusted by professional athletes, fitness enthusiasts, and health-conscious individuals across the United States.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="ActiveApex Headquarters" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 animate-fade-in">Our Values</h2>
            <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
              These core principles guide everything we do, from product selection to customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-card p-6 rounded-lg shadow-sm flex items-start animate-fade-in"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <CheckCircle className="text-accent mr-4 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 animate-fade-in">Meet Our Team</h2>
            <p className="text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
              The passionate individuals behind ActiveApex who work tirelessly to bring you the best health and fitness products.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-card rounded-lg overflow-hidden shadow-sm animate-fade-in"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-accent font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Join the ActiveApex Community</h2>
            <p className="text-primary-foreground/90 mb-8">
              Start your health and fitness journey with us today and experience the difference quality products can make.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/">Shop Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
