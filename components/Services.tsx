import React from 'react';
import { PenTool, Monitor, BookOpen, Layers } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    id: '1',
    title: 'Journal Cover Art',
    price: 'From $800',
    features: ['High-impact visual metaphor', '3D Rendering / Digital Painting', 'Multiple sketches & revisions', 'Formatted for specific journal'],
    icon: 'cover'
  },
  {
    id: '2',
    title: 'Figure Polish',
    price: 'From $150',
    features: ['Vector redesign of charts', 'Consistent color palette', 'Typography cleanup', 'Publication-ready export'],
    icon: 'polish'
  },
  {
    id: '3',
    title: 'Graphical Abstracts',
    price: 'From $400',
    features: ['Visual summary of paper', 'Icon design', 'Clear narrative flow', 'Optimized for social media'],
    icon: 'abstract'
  },
  {
    id: '4',
    title: '3D Animation',
    price: 'Custom Quote',
    features: ['Mechanism of action videos', 'Conference presentations', 'Educational breakdown', 'High-res rendering'],
    icon: 'animation'
  }
];

const Services: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'cover': return <BookOpen className="w-8 h-8" />;
      case 'polish': return <PenTool className="w-8 h-8" />;
      case 'abstract': return <Layers className="w-8 h-8" />;
      case 'animation': return <Monitor className="w-8 h-8" />;
      default: return <PenTool className="w-8 h-8" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-science-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-science-600 tracking-wide uppercase">Services</h2>
          <p className="mt-2 text-3xl font-serif font-bold leading-8 tracking-tight text-slate-900 sm:text-4xl">
            Tailored Solutions for Academics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="inline-flex items-center justify-center p-3 bg-science-100 text-science-600 rounded-xl mb-6">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-2xl font-semibold text-science-600 mb-6">{service.price}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-600">
                    <span className="mr-2 text-science-500">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <a href="#contact" className="block w-full text-center py-2 px-4 border border-science-200 rounded-lg text-science-700 font-medium hover:bg-science-50 transition-colors">
                  Inquire
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
