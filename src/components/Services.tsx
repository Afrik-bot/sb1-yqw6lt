import React from 'react';
import { Bot, Cpu, LineChart, Shield } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Automation',
    description: 'Streamline operations with intelligent automation solutions tailored to your business needs.'
  },
  {
    icon: Cpu,
    title: 'Machine Learning',
    description: 'Leverage advanced ML models to extract insights and make data-driven decisions.'
  },
  {
    icon: LineChart,
    title: 'Predictive Analytics',
    description: 'Forecast trends and optimize business strategies with AI-powered analytics.'
  },
  {
    icon: Shield,
    title: 'AI Security',
    description: 'Protect your systems with next-generation AI security protocols and monitoring.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations
            and drive innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-to-b from-purple-900/20 to-transparent border border-purple-500/20 hover:border-purple-500/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">
                <service.icon className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}