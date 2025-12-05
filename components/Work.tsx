import React from 'react';
import Section from './Section';
import { ContentData } from '../types';

interface WorkProps {
  content: ContentData['work'];
}

const Work: React.FC<WorkProps> = ({ content }) => {
  return (
    <Section id="work" className="bg-white/5 rounded-lg">
      <h3 className="text-3xl md:text-4xl font-display font-bold mb-20 text-center text-paper tracking-tight">{content.title}</h3>
      
      <div className="space-y-24">
        {content.items.map((study) => (
          <article key={study.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-16 border-b border-paper/20 last:border-0">
            {/* Title Section */}
            <div className="lg:col-span-4 space-y-2">
              <h4 className="text-2xl md:text-3xl font-display font-bold text-paper leading-tight tracking-tight">{study.title}</h4>
              <p className="text-base font-display font-medium text-paper/60 pt-2">{study.subtitle}</p>
            </div>

            {/* Content Section */}
            <div className="lg:col-span-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-[110px_1fr] gap-4">
                <span className="text-sm font-display font-bold uppercase tracking-wider text-paper/60 pt-1.5">{content.labels.problem}</span>
                <p className="text-paper leading-relaxed text-base md:text-lg font-normal">
                  {study.problem}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[110px_1fr] gap-4">
                <span className="text-sm font-display font-bold uppercase tracking-wider text-paper/60 pt-1.5">{content.labels.approach}</span>
                <p className="text-paper leading-relaxed text-base md:text-lg font-normal">
                  {study.approach}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[110px_1fr] gap-4 bg-paper/10 p-6 rounded-md">
                <span className="text-sm font-display font-bold uppercase tracking-wider text-paper pt-1">{content.labels.result}</span>
                <p className="text-white font-medium leading-relaxed text-base md:text-lg">
                  {study.result}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Work;