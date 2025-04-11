
import React from 'react';

const AboutMe = () => {
  return (
    <section className="brutalist-section reveal">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-brutalist mb-4 uppercase">
            About Me
          </h2>
          <div className="space-y-3 sm:space-y-4 text-base sm:text-lg">
            <p className="max-w-prose">
              <span className="brutalist-marker">Hi 👋,</span> I'm Imran and I run Pink Llama Software. I help individuals, entrepreneurs and small businesses increase their revenue and profitability.
            </p>
            <p className="max-w-prose">
              I have worked with major retailers like Selfridges and Dunelm to successfully migrate their eCommerce platforms to the cloud, and I hold an AWS Developer Certification.
            </p>
            <p className="max-w-prose">
              In the next 90 days, I am focused on developing innovative tools that will help small businesses expand their client base and grow their revenue.
            </p>
            <p className="max-w-prose">
              My vision for the next 3-5 years is to build and manage a comprehensive suite of business tools that empower entrepreneurs to succeed.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-6 md:mt-0">
          <div className="relative">
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-brutalist-blue absolute -top-4 -left-4 transform rotate-3"></div>
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 border-4 border-black relative z-10 overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Imran" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
