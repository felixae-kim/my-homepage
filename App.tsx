import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Lectures from './components/Lectures';
import Footer from './components/Footer';
import { CONTENT } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ko');
  const content = CONTENT[lang];

  return (
    <div className="bg-charcoal min-h-screen text-paper selection:bg-paper selection:text-charcoal transition-colors duration-300">
      <Header 
        lang={lang} 
        setLang={setLang} 
        navItems={content.nav}
      />
      <main>
        <Hero content={content.hero} />
        <About content={content.about} />
        <Work content={content.work} />
        <Lectures content={content.lectures} />
      </main>
      <Footer content={content.footer} />
    </div>
  );
};

export default App;