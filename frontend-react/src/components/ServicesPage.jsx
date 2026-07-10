import React from 'react';
import { 
  Code2, 
  Smartphone, 
  Cloud, 
  Brain, 
  ShieldCheck, 
  Settings, 
  ShoppingCart, 
  LineChart,
  Headphones,
  ArrowRight
} from 'lucide-react';

const ServicesPage = () => {
  const servicesData = [
    {
      title: "Software Development",
      icon: <Code2 className="w-6 h-6" strokeWidth={1.5} />,
      description: "Custom software solutions tailored to your business needs using modern technologies and agile methodologies."
    },
    {
      title: "Mobile App Development",
      icon: <Smartphone className="w-6 h-6" strokeWidth={1.5} />,
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences."
    },
    {
      title: "Cloud Solutions",
      icon: <Cloud className="w-6 h-6" strokeWidth={1.5} />,
      description: "Scalable, secure, and cost-effective cloud solutions to modernize your infrastructure."
    },
    {
      title: "AI & Data Solutions",
      icon: <Brain className="w-6 h-6" strokeWidth={1.5} />,
      description: "Leverage the power of data, analytics, and AI to make smarter decisions and drive business growth."
    },
    {
      title: "Cybersecurity",
      icon: <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />,
      description: "Protect your business with end-to-end security solutions, risk assessments, and compliance services."
    },
    {
      title: "DevOps Services",
      icon: <Settings className="w-6 h-6" strokeWidth={1.5} />,
      description: "Streamline your development and operations with CI/CD, automation, and enhanced collaboration."
    },
    {
      title: "Enterprise Solutions",
      icon: <ShoppingCart className="w-6 h-6" strokeWidth={1.5} />,
      description: "Robust enterprise solutions to optimize operations, improve efficiency, and accelerate digital transformation."
    },
    {
      title: "IT Consulting",
      icon: <LineChart className="w-6 h-6" strokeWidth={1.5} />,
      description: "Strategic IT consulting to help you innovate, optimize, and achieve your business objectives faster."
    }
  ];

  return (
    <div className="w-full bg-white min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-[#020A1A] text-white overflow-hidden py-16 md:py-24">
        {/* Background Graphic */}
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#020A1A] via-[#020A1A]/80 to-transparent"></div>
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <div className="text-sm font-medium text-gray-300 mb-4 flex items-center gap-2">
              <span className="hover:text-white cursor-pointer transition-colors">Home</span>
              <span className="text-gray-500">&gt;</span>
              <span className="text-white">Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
              Our Services
            </h1>
            <div className="w-12 h-1 bg-primary mb-6"></div>
            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
              End-to-end technology services designed to help businesses
              innovate, scale, and stay ahead in a digital-first world.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold text-sm tracking-wider uppercase mb-3 block">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-heading">
              Comprehensive Services to Accelerate Your Business
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We combine deep technical expertise with industry knowledge to deliver innovative,
              reliable, and future-ready solutions.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {servicesData.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)] border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full hover:-translate-y-1 p-8"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="text-primary bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-[1.1rem] font-bold text-gray-900 font-heading leading-snug">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                
                <div className="w-full h-px bg-gray-100 mb-4"></div>
                
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary font-semibold text-sm mt-auto group/link"
                >
                  Explore More 
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="pb-20 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#F0F4F8] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-6 md:gap-8">
              <div className="w-16 h-16 bg-[#005BAC] rounded-2xl flex items-center justify-center shadow-md flex-shrink-0">
                <Headphones className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-heading">
                  Need a Custom Solution?
                </h3>
                <p className="text-gray-600 text-base max-w-xl">
                  Our experts are ready to understand your challenges and build the right solution for your business.
                </p>
              </div>
            </div>
            <button className="whitespace-nowrap bg-[#005BAC] hover:bg-[#004280] text-white font-semibold px-8 py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2 w-full md:w-auto shadow-md">
              Talk to Our Experts <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
