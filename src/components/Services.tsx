import React from 'react';
import { services } from '../constants';
import { ServiceProps } from '../types';
import { Database, Globe, Video, GraduationCap } from 'lucide-react';

const getServiceIcon = (id: string) => {
  switch (id) {
    case 'data-cleaning':
      return <Database className="h-6 w-6 text-emerald-600" />;
    case 'web-seo':
      return <Globe className="h-6 w-6 text-emerald-600" />;
    case 'media-visibility':
      return <Video className="h-6 w-6 text-emerald-600" />;
    case 'capacity-building':
      return <GraduationCap className="h-6 w-6 text-emerald-600" />;
    default:
      return <Database className="h-6 w-6 text-emerald-600" />;
  }
};

const ServiceCard: React.FC<ServiceProps> = ({ id, title, description, imageSrc, imageAlt }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 group">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          {getServiceIcon(id)}
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We provide a range of halal digital services focused on Islamic authentic solutions for the righteous Ummah and good humanity.
          </p>
          <div className="h-1 w-16 bg-emerald-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;