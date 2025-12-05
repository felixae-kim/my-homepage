import React from 'react';
import { CONTACT_INFO } from '../constants';
import { ContentData } from '../types';
import { Mail, Linkedin } from 'lucide-react';

interface FooterProps {
  content: ContentData['footer'];
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer id="contact" className="bg-black/40 text-paper py-24 px-6 border-t border-paper/10">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-10">
        <h3 className="text-3xl font-display font-bold tracking-tight">{content.title}</h3>
        <p className="text-paper/90 font-normal text-lg md:text-xl max-w-2xl leading-relaxed whitespace-pre-line">
          {content.description}
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 mt-4">
          <a 
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center gap-3 px-8 py-3 rounded-full border border-paper/20 hover:bg-paper hover:text-charcoal transition-all duration-300 group"
          >
            <Mail size={22} className="text-paper/80 group-hover:text-charcoal transition-colors duration-300" />
            <span className="font-display font-medium tracking-tight text-lg">{CONTACT_INFO.email}</span>
          </a>
          
          <a 
            href={`https://${CONTACT_INFO.linkedin}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-3 rounded-full border border-paper/20 hover:bg-paper hover:text-charcoal transition-all duration-300 group"
          >
            <Linkedin size={22} className="text-paper/80 group-hover:text-charcoal transition-colors duration-300" />
            <span className="font-display font-medium tracking-tight text-lg">LinkedIn Profile</span>
          </a>
        </div>
        
        <div className="pt-24 text-sm text-paper/40 font-display">
          {content.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;