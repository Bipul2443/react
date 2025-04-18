
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden h-screen">
      {/* Hero image background */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="/lovable-uploads/05206f95-c4e6-48d0-b6f1-d16ac1f5a6c6.png" 
          alt="Fitness woman with medicine ball" 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-center">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <span className="inline-block text-sky-300 font-medium mb-2 text-sm uppercase tracking-wider animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Premium Health & Fitness Products
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Track Your <span className="text-sky-400">Fitness</span> Progress
            </h1>
            <div className="flex items-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-sky-400"></div>
                <span className="text-white/90">45% Improvement</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-sky-400"></div>
                <span className="text-white/90">Workout Tracking</span>
              </div>
            </div>
            <p className="text-lg text-white/90 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Discover top-quality health supplements and fitness equipment designed to help you track your progress and achieve your fitness goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white">
                Shop Health
                <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Shop Fitness
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-8 border-2 border-sky-400/50 rounded-full flex items-center justify-center">
          <ArrowRight size={16} className="text-sky-400/80 rotate-90" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
