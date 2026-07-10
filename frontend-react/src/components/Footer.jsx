import React from 'react';
import logo from '../assets/logo.png';
import { Linkedin, Github, Twitter } from './Icons';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] border-t border-slate-800 pt-16 pb-8 text-slate-300">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
        <div className="lg:col-span-2 flex flex-col items-start">
          <div className="flex items-center mb-4">
            <img src={logo} alt="Scorpy Tech Logo" className="h-20 w-auto object-contain scale-125 origin-left filter brightness-0 invert" />
          </div>
          <p className="text-slate-400 mb-6 text-sm max-w-sm leading-relaxed">
            Empowering students with innovative projects and expert guidance to build a better tomorrow.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 shadow-sm hover:text-white hover:bg-blue-600 transition-all border border-slate-700">
              <Linkedin size={16} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 shadow-sm hover:text-white hover:bg-blue-600 transition-all border border-slate-700">
              <Github size={16} />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 shadow-sm hover:text-white hover:bg-blue-600 transition-all border border-slate-700">
              <Twitter size={16} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-base mb-6 text-white">Quick Links</h3>
          <ul className="flex flex-col gap-3 text-sm text-slate-400">
            <li><button onClick={() => window.scrollTo(0,0)} className="hover:text-blue-400 transition-colors">Home</button></li>
            <li><button className="hover:text-blue-400 transition-colors">Projects</button></li>
            <li><button className="hover:text-blue-400 transition-colors">Technologies</button></li>
            <li><button className="hover:text-blue-400 transition-colors">Services</button></li>
            <li><button className="hover:text-blue-400 transition-colors">Contact</button></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-base mb-6 text-white">Categories</h3>
          <ul className="flex flex-col gap-3 text-sm text-slate-400">
            <li><button className="hover:text-blue-400 transition-colors">AI & ML</button></li>
            <li><button className="hover:text-blue-400 transition-colors">IoT</button></li>
            <li><button className="hover:text-blue-400 transition-colors">Web Development</button></li>
            <li><button className="hover:text-blue-400 transition-colors">Mobile Apps</button></li>
            <li><button className="hover:text-blue-400 transition-colors">Data Science</button></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-base mb-6 text-white">Support</h3>
          <ul className="flex flex-col gap-3 text-sm text-slate-400">
            <li><button className="hover:text-blue-400 transition-colors">FAQ</button></li>
            <li><button className="hover:text-blue-400 transition-colors">Documentation</button></li>
            <li><button className="hover:text-blue-400 transition-colors">Terms & Conditions</button></li>
            <li><button className="hover:text-blue-400 transition-colors">Privacy Policy</button></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-base mb-6 text-white">Contact Info</h3>
          <ul className="flex flex-col gap-4 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <span>+91 87654 32109</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <span>info@scorpytech.com</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <span>Pune, Maharashtra, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs gap-4">
        <p>&copy; {new Date().getFullYear()} Scorpy Tech. All rights reserved.</p>
      </div>
    </footer>
  );
}