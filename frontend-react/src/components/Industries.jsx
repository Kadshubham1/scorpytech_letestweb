import React from 'react';
import { 
  Building2, 
  Users, 
  Briefcase, 
  Globe, 
  Landmark, 
  Activity, 
  ShoppingCart, 
  Factory, 
  RadioTower, 
  Zap, 
  GraduationCap, 
  Luggage, 
  MonitorPlay, 
  Headphones,
  ArrowRight
} from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      title: "Banking & Financial Services",
      icon: <Landmark className="w-8 h-8 text-primary" strokeWidth={1.5} />,
      description: "Transform financial services with secure, compliant, and customer-centric solutions."
    },
    {
      title: "Healthcare & Life Sciences",
      icon: <Activity className="w-8 h-8 text-primary" strokeWidth={1.5} />,
      description: "Improve patient outcomes and streamline operations with innovative digital solutions."
    },
    {
      title: "Retail & E-commerce",
      icon: <ShoppingCart className="w-8 h-8 text-primary" strokeWidth={1.5} />,
      description: "Enhance customer experiences and optimize supply chains with intelligent solutions."
    },
    {
      title: "Manufacturing",
      icon: <Factory className="w-8 h-8 text-primary" strokeWidth={1.5} />,
      description: "Drive smart manufacturing with data, automation, and predictive technologies."
    },
    {
      title: "Telecom",
      icon: <RadioTower className="w-8 h-8 text-primary" strokeWidth={1.5} />,
      description: "Improve network performance, customer experience, and operational efficiency."
    },
    {
      title: "Energy & Utilities",
      icon: <Zap className="w-8 h-8 text-primary" strokeWidth={1.5} />,
      description: "Optimize energy distribution, improve efficiency, and accelerate the transition to sustainable energy."
    },
    {
      title: "Education",
      icon: <GraduationCap className="w-8 h-8 text-primary" strokeWidth={1.5} />,
      description: "Deliver engaging learning experiences and streamline academic operations with digital solutions."
    },
    {
      title: "Travel & Hospitality",
      icon: <Luggage className="w-8 h-8 text-primary" strokeWidth={1.5} />,
      description: "Enhance guest experiences and optimize operations across the travel ecosystem."
    },
    {
      title: "Media & Entertainment",
      icon: <MonitorPlay className="w-8 h-8 text-primary" strokeWidth={1.5} />,
      description: "Engage audiences with personalized content and innovative digital platforms."
    },
    {
      title: "Public Sector",
      icon: <Landmark className="w-8 h-8 text-primary" strokeWidth={1.5} />,
      description: "Deliver citizen-centric services and improve operational efficiency with technology."
    }
  ];

  return (
    <div className="w-full bg-[#FAFBFC] min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-[#021A3B] text-white overflow-hidden py-16 md:py-24">
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#021A3B] via-[#021A3B]/90 to-transparent"></div>
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
            
            {/* Left Content */}
            <div className="max-w-xl">
              <div className="text-sm font-medium text-gray-300 mb-4 flex items-center gap-2">
                <span className="hover:text-white cursor-pointer transition-colors">Home</span>
                <span className="text-gray-500">&gt;</span>
                <span className="text-white">Industries</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
                Industries
              </h1>
              <div className="w-12 h-1 bg-primary mb-6"></div>
              <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                Industry-focused solutions that drive innovation,
                improve efficiency, and create measurable impact.
              </p>
            </div>

            {/* Right Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-10 lg:pl-10 lg:border-l border-white/10">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <Building2 className="w-8 h-8 text-white mb-3" strokeWidth={1.5} />
                <div className="text-3xl md:text-4xl font-bold font-heading mb-1">15+</div>
                <div className="text-sm text-gray-400 font-medium">Industries Served</div>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <Users className="w-8 h-8 text-white mb-3" strokeWidth={1.5} />
                <div className="text-3xl md:text-4xl font-bold font-heading mb-1">250+</div>
                <div className="text-sm text-gray-400 font-medium">Global Clients</div>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left xl:border-l xl:border-white/10 xl:pl-10">
                <Briefcase className="w-8 h-8 text-white mb-3" strokeWidth={1.5} />
                <div className="text-3xl md:text-4xl font-bold font-heading mb-1">500+</div>
                <div className="text-sm text-gray-400 font-medium">Projects Delivered</div>
              </div>
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <Globe className="w-8 h-8 text-white mb-3" strokeWidth={1.5} />
                <div className="text-3xl md:text-4xl font-bold font-heading mb-1">30+</div>
                <div className="text-sm text-gray-400 font-medium">Countries Reached</div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold text-sm tracking-wider uppercase mb-3 block">
              Industries We Serve
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading">
              Powering Progress Across Every Industry
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We combine deep domain expertise with next-generation technologies
              to help businesses solve complex challenges and stay ahead of change.
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-lg transition-all duration-300 group flex flex-col h-full hover:-translate-y-1"
              >
                <div className="mb-6 bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading leading-snug">
                  {industry.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                  {industry.description}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary font-semibold text-sm mt-auto group/link"
                >
                  Explore Solutions 
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
          <div className="bg-[#F0F4F8] rounded-xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-200">
            <div className="flex items-center gap-5 text-center md:text-left">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                <Headphones className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1 font-heading">
                  Don't see your industry?
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  We build customized solutions for unique business challenges.
                </p>
              </div>
            </div>
            <button className="whitespace-nowrap bg-[#005BAC] hover:bg-[#004280] text-white font-semibold px-8 py-3.5 rounded-md transition-colors flex items-center justify-center gap-2 w-full md:w-auto shadow-sm">
              Let's Discuss Your Needs <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Industries;
