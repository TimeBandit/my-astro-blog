
import React, { useEffect } from 'react';
import ClientQuestions from '../components/ClientQuestions';
import AboutMe from '../components/AboutMe';
import MarqueeBar from '../components/MarqueeBar';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-brutalist-yellow py-6 sm:py-8 md:py-10 mb-8 sm:mb-10 md:mb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-brutalist brutalist-text-shadow uppercase text-brutalist-black">
            Pink Llama <span className="block">Digital Forge</span>
          </h1>
          <p className="text-xl sm:text-2xl mt-3 sm:mt-4 max-w-prose text-brutalist-black">
            Web development that delivers results for entrepreneurs and small businesses.
          </p>
        </div>
      </div>

      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6">
        <ClientQuestions />
        <MarqueeBar />
        <AboutMe />
        <Testimonials />
        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
