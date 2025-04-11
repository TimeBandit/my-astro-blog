
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brutalist-black text-brutalist-white py-8 md:py-12 px-4 md:px-6 mt-12 md:mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <div>
            <Link to="/" className="text-2xl md:text-3xl font-brutalist">
              PINK LLAMA
            </Link>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8 text-lg md:text-xl">
            <Link to="/" className="hover:text-brutalist-pink transition-colors">Home</Link>
            <Link to="/projects" className="hover:text-brutalist-pink transition-colors">Projects</Link>
            <Link to="/blog" className="hover:text-brutalist-pink transition-colors">Blog</Link>
          </nav>
          
          <div className="flex gap-6">
            <a href="https://github.com" className="text-white hover:text-brutalist-pink" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-white hover:text-brutalist-pink" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href="mailto:imran@pinkllama.dev" className="text-white hover:text-brutalist-pink" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 md:mt-12 text-center text-brutalist-white/70 text-sm md:text-base">
          <p>© {new Date().getFullYear()} Pink Llama Software. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
