import React from 'react';

// Types & Interfaces

export interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
}

export interface SectionTitleProps {
  title: string;
}

// Components

export const Section: React.FC<SectionProps> = ({ id, className = "", children }) => (
  <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 ${className}`}>
    <div className="max-w-6xl mx-auto">{children}</div>
  </section>
);

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center relative after:content-[''] after:block after:w-16 after:h-1 after:bg-indigo-600 after:mx-auto after:mt-4 after:rounded-full">
    {title}
  </h2>
);