import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900 text-white overflow-hidden pt-20"
    >
      <div className="absolute inset-0 pattern-dots-md opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 text-center z-10">
        <div className="flex flex-col items-center justify-center gap-6">
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-200">
            Serving sincere 1Ummah Nigeria with halal digital services, authentic Islamic media visibility, and enlightenment capacity building.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
            <a 
              href="#services" 
              className="bg-emerald-600 hover:bg-emerald-700 transition-colors py-3 px-8 rounded-md font-medium text-lg"
            >
              Our Services
            </a>
            <a 
              href="#about" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-emerald-800 transition-colors py-3 px-8 rounded-md font-medium text-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition-all"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6 text-white" />
      </a>
    </section>
  );
};

export default Hero;