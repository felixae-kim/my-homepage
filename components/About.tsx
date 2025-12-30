import React from 'react';
import Section from './Section';
import { ContentData } from '../types';

interface AboutProps {
  content: ContentData['about'];
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Left Column: Philosophy */}
        <div>
          <h3 className="text-3xl font-display font-bold mb-10 pb-4 border-b border-paper/30 text-paper tracking-tight">{content.philosophyTitle}</h3>
          <div className="space-y-12">
            {content.philosophyItems.map((item, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-xl md:text-2xl font-display font-bold text-paper tracking-tight">{item.title}</h4>
                <p className="text-paper/90 leading-relaxed text-base md:text-lg text-justify font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Journey */}
        <div className="md:pt-0">
          <h3 className="text-3xl font-display font-bold mb-10 pb-4 border-b border-paper/30 text-paper tracking-tight">{content.journeyTitle}</h3>
          <div className="relative border-l border-paper/30 ml-3 space-y-12 py-2">
            {content.journeyItems.map((item, index) => (
              <div key={index} className="pl-8 relative group">
                <span className="absolute -left-[5px] top-2 w-[9px] h-[9px] bg-paper/60 rounded-full group-hover:scale-125 group-hover:bg-paper transition-all duration-300"></span>
                <div className="flex flex-col space-y-1">
                  <span className="text-xl font-display font-bold text-paper group-hover:text-white transition-colors tracking-tight">
                    {item.company}
                  </span>
                  <span className="text-sm font-display font-medium text-paper/60">
                    {item.period}
                  </span>
                  <span className="text-base md:text-lg text-paper/90 font-medium pt-1">
                    {item.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;