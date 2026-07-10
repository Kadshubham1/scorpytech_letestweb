import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    image: "/hero-building.png",
    title1: "BUILDING",
    title2: "INNOVATION",
    title3: "SHAPING TOMORROW",
    subtitle: "Where technology meets innovation for a smarter tomorrow.",
    buttonText: "Explore Our Services",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80",
    title1: "Next-Gen Tech Internships.",
    title2: "Learn by Doing.",
    subtitle: "Gain hands-on experience with real-world projects in AI, ML, and Web Development. Launch your career with Scorpy Tech.",
    buttonText: "Apply for Internship",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80",
    title1: "Innovative Solutions.",
    title2: "For the Future.",
    subtitle: "We deliver cutting-edge AI, IoT, and custom software solutions to solve complex business challenges and drive scalable growth.",
    buttonText: "View Our Projects",
  }
];

const Hero = ({ onApplyNow }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[600px] lg:h-[700px] xl:h-[800px] flex items-center overflow-hidden" id="hero">
      
      {/* Background Images with AnimatePresence */}
      <AnimatePresence initial={false}>
        <motion.div 
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={slides[currentSlide].image} 
            alt={`Banner ${currentSlide + 1}`} 
            className="w-full h-full object-cover"
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-[#001D4A]/70 sm:bg-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#001D4A] via-[#002B5B]/90 to-transparent hidden sm:block"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#001D4A]/50 to-transparent"></div>
          
          {/* Dot Pattern Overlay on the right */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:24px_24px] opacity-20 hidden lg:block mask-image-linear-left"></div>
        </motion.div>
      </AnimatePresence>

      <div className="max-w-[1400px] mx-auto px-6 w-full relative z-10">
        
        {/* Left Column - Text Content */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: {
                opacity: 1, x: 0,
                transition: { staggerChildren: 0.15, duration: 0.5 }
              },
              exit: { opacity: 0, x: 20, transition: { duration: 0.3 } }
            }}
            className="max-w-2xl flex flex-col items-start text-left"
          >
            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold tracking-tight text-white leading-[1.1] mb-6"
            >
              {slides[currentSlide].title1} <br />
              <span className="text-[#3B82F6]">{slides[currentSlide].title2}</span>
              {slides[currentSlide].title3 && (
                <>
                  <br />
                  <span>{slides[currentSlide].title3}</span>
                </>
              )}
            </motion.h1>
            
            <motion.p 
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
              className="text-[1.05rem] lg:text-lg text-gray-200 max-w-lg leading-relaxed mb-10 font-medium"
            >
              {slides[currentSlide].subtitle}
            </motion.p>
            
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
              className="flex w-full sm:w-auto"
            >
              <button 
                onClick={onApplyNow}
                className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-3.5 rounded-sm shadow-sm transition-colors flex items-center justify-center gap-3 w-full sm:w-auto"
              >
                <span className="text-[0.95rem]">{slides[currentSlide].buttonText}</span>
                <ArrowRight className="w-4 h-4 text-gray-600" />
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
        
      </div>
      
      {/* Slider controls */}
      <div className="absolute right-6 bottom-6 hidden lg:flex gap-2 z-20">
        <button 
          onClick={prevSlide}
          className="w-10 h-10 bg-[#001D4A] hover:bg-blue-600 transition-colors flex items-center justify-center text-white cursor-pointer rounded-sm"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={nextSlide}
          className="w-10 h-10 bg-[#001D4A] hover:bg-blue-600 transition-colors flex items-center justify-center text-white cursor-pointer rounded-sm"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? 'bg-[#3B82F6]' : 'bg-white/40 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
