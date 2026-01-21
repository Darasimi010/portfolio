import React from 'react';

// Types & Interfaces

export interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

// Components

export const Section: React.FC<SectionProps> = ({ id, className = "", children }) => (
  <section id={id} className={`py-24 px-6 md:px-12 lg:px-24 relative ${className}`}>
    <div className="max-w-6xl mx-auto relative z-10">{children}</div>
  </section>
);

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 relative inline-block">
      {title}
      <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"></span>
    </h2>
    {subtitle && (
      <p className="text-purple-200 mt-6 text-lg max-w-2xl mx-auto">{subtitle}</p>
    )}
  </div>
);