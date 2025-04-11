
import React from 'react';

const CallToAction = () => {
  return (
    <section className="brutalist-section reveal bg-brutalist-pink dark:bg-brutalist-pink">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-brutalist mb-6 uppercase text-brutalist-black dark:text-brutalist-black">
          Let's Work Together
        </h2>
        <p className="text-xl mb-8 max-w-prose mx-auto text-brutalist-black dark:text-brutalist-black">
          Ready to take your business to the next level with custom software solutions? 
          Let's discuss how I can help you achieve your goals.
        </p>
        <a 
          href="mailto:imran@pinkllama.dev" 
          className="brutalist-button inline-block text-xl"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
