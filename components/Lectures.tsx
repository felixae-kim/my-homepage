
import React from 'react';
import Section from './Section';
import { ContentData } from '../types';

interface LecturesProps {
  content: ContentData['lectures'];
}

const Lectures: React.FC<LecturesProps> = ({ content }) => {
  return (
    <Section id="lectures">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Header (Sticky on Desktop) */}
        <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
          <div>
            <h3 className="text-3xl font-display font-bold mb-4 text-paper tracking-tight">{content.title}</h3>
            <p className="text-paper/60 font-display font-medium text-lg leading-relaxed">{content.subtitle}</p>
          </div>
        </div>

        {/* Right Column: Lecture List */}
        <div className="lg:col-span-7 space-y-12 lg:pt-2">
          {content.categories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h4 className="text-xl font-display font-bold border-b border-paper/30 pb-4 text-paper tracking-tight flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-paper rounded-full"></span>
                {category.title}
              </h4>
              <ul className="space-y-6">
                {category.items.map((item, idx) => (
                  <li key={idx} className="group flex flex-col space-y-1 pl-4 border-l border-paper/10 hover:border-paper/40 transition-colors duration-300">
                    <span className="font-bold block text-paper text-lg group-hover:text-white transition-colors">{item.host}</span>
                    <span className="text-paper/70 font-normal text-base md:text-lg">{item.topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Lectures;
