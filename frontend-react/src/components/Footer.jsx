import React from 'react';
import logo from '../assets/logo.png';
import { Linkedin, Github, Twitter } from './Icons';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
            <img src={logo} alt="Scorpy Tech Logo" className="h-20 w-auto object-contain scale-125 origin-left" />
          </div>
          <p className="text-gray-600 mb-6 max-w-sm">
            Empowering future software engineers and tech leaders with practical learning pathways, live mentor support, and verified project experience.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 shadow-sm hover:text-primary transition-colors border border-gray-100">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 shadow-sm hover:text-primary transition-colors border border-gray-100">
              <Github size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 shadow-sm hover:text-primary transition-colors border border-gray-100">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-heading font-bold text-lg mb-6 text-gray-900">Quick Links</h3>
          <ul className="flex flex-col gap-3 text-gray-600">
            <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
            <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
            <li><a href="#technologies" className="hover:text-primary transition-colors">Tech Stack</a></li>
            <li><a href="#faqs" className="hover:text-primary transition-colors">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading font-bold text-lg mb-6 text-gray-900">Subscribe to Newsletter</h3>
          <p className="text-gray-600 mb-4">
            Stay updated with our new batch openings, workshops, and placement guides.
          </p>
          <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              required 
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white"
            />
            <button type="submit" className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors font-medium whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
        <p>&copy; {new Date().getFullYear()} Scorpy Tech. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}