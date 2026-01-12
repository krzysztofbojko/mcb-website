import React from 'react';
import projectsData from '@/lib/projekty.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projekty Badawcze | MCB UKSW',
  description: 'Przegląd realizowanych projektów badawczych i grantów w Multidyscyplinarnym Centrum Badawczym UKSW.',
};

// Interface for type safety
interface Project {
  tytul: string;
  opis: string;
  finansowanie: string;
  czas_realizacji: string;
}

export default function ProjektyPage() {
  const projects: Project[] = projectsData;

  return (
    <div className="min-h-screen pt-24 pb-16">
        {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl drop-shadow-sm mb-4">
          Realizowane Projekty
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium bg-white/40 backdrop-blur-sm p-4 rounded-lg">
          Poznaj innowacyjne przedsięwzięcia, które rozwijamy we współpracy z partnerami naukowymi i biznesowymi.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
            >
              {/* Decorative side accent */}
              <div className="absolute left-0 top-8 bottom-8 w-1 bg-uksw-blue rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-uksw-blue transition-colors">
                {project.tytul}
              </h2>
              
              <p className="text-gray-600 flex-grow mb-8 leading-relaxed">
                {project.opis}
              </p>

              {/* Metadata Footer */}
              <div className="mt-auto border-t border-gray-100 pt-6 space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-uksw-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Finansowanie
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      {project.finansowanie}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="h-5 w-5 text-uksw-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Czas Realizacji
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      {project.czas_realizacji}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}