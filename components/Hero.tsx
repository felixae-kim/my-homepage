
import React from 'react';
import { ContentData } from '../types';
import { motion } from 'framer-motion';

interface HeroProps {
  content: ContentData['hero'];
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative pt-20">
      <motion.div 
        className="max-w-4xl flex flex-col items-center space-y-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Main Copy */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight text-paper whitespace-pre-line tracking-tight">
            {content.mainCopy}
          </h1>
        </div>

        {/* Sub Copy & Author */}
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-paper tracking-tight">
            {content.subCopy}
          </h2>
          <p className="text-lg md:text-xl text-paper/80 font-display font-medium">
            {content.author}
          </p>
        </div>

        {/* Introduction */}
        <div className="max-w-2xl mx-auto pt-6 border-t border-paper/20">
          <p className="text-base md:text-lg leading-loose text-paper/90 whitespace-pre-line font-normal">
            {content.intro}
          </p>
        </div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
      >
        <div className="w-[1px] h-16 bg-paper/30"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
