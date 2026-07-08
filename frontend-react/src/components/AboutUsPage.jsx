import React from 'react';
import { Users, Lightbulb, ShieldCheck, Handshake } from 'lucide-react';

const AboutUsPage = () => {
  return (
    <div className="w-full bg-white min-h-screen pt-20">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-16 md:py-24">
            
            {/* Left Content */}
            <div className="flex-1 max-w-xl">
              <div className="text-sm font-medium mb-6 flex items-center gap-2">
                <span className="text-[#005BAC] hover:underline cursor-pointer">Home</span>
                <span className="text-gray-400">/</span>
                <span className="text-gray-600">About Us</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-heading tracking-tight">
                About <span className="text-[#005BAC]">Scorpy Tech</span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Scorpy Tech is a next-generation technology company dedicated to bridging the gap between academia and industry. We empower future tech leaders through hands-on internships and training, while partnering with organizations to build innovative, future-ready digital solutions.
              </p>
              
              <div className="w-12 h-1 bg-[#005BAC]"></div>
            </div>

            {/* Right Image */}
            <div className="flex-1 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                  alt="Modern Glass Building" 
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay to make it look like a corporate building */}
                <div className="absolute inset-0 bg-blue-900/10"></div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-16">
            
            {/* Left Content */}
            <div className="flex-1">
              <h3 className="text-[#005BAC] font-bold text-xs tracking-widest uppercase mb-4">
                Our Story
              </h3>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-heading leading-tight">
                Turning Ideas into Intelligent Solutions
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Scorpy Tech was founded with a singular, driving vision: to bridge the critical gap between academic learning and the fast-paced, ever-evolving demands of the tech industry. We recognized that while traditional education provides a strong theoretical foundation, emerging professionals often need practical, hands-on experience to truly thrive in the workforce. Born out of a passion for innovation and a commitment to education, our journey began with the goal of creating an ecosystem where aspiring technologists could gain the real-world skills necessary to launch and sustain successful careers.
                </p>
                <p>
                  Today, we are proud to offer next-generation technical internships and comprehensive training programs that are meticulously designed to accelerate career growth. At Scorpy Tech, we go beyond conventional teaching methods by immersing our participants in industry-focused, real-world projects. From intensive Artificial Intelligence and Machine Learning workshops to modern software engineering, our curriculum reflects the latest industry standards. Guided by expert mentorship, our trainees are empowered to tackle complex problems, build robust portfolios, and develop the confidence needed to excel in highly competitive environments.
                </p>
                <p>
                  As we look to the future, our mission remains steadfast: empowering transformation, together. We are more than just a training platform; we are a dedicated partner in your professional journey. By continuously collaborating with industry leaders to accelerate innovation and build future-ready solutions, we ensure our community always stays ahead of the curve. At Scorpy Tech, we are deeply committed to nurturing the next generation of tech leaders—individuals who are not only equipped to navigate the challenges of tomorrow but are also inspired to shape the future of technology.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 w-full lg:sticky lg:top-32">
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-[350px] lg:h-[600px]">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                  alt="Office Interior" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What Drives Us Section */}
      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              What Drives Us
            </h2>
            <div className="w-12 h-1 bg-[#005BAC]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {/* Value 1 */}
            <div className="flex flex-col items-center text-center pt-8 md:pt-0 md:px-6 first:pt-0 first:px-0 lg:first:pr-6">
              <Users className="w-10 h-10 text-[#005BAC] mb-5" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-gray-900 mb-3 font-heading">Customer First</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We put our clients at the center of everything we do.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="flex flex-col items-center text-center pt-8 md:pt-0 md:px-6">
              <Lightbulb className="w-10 h-10 text-[#005BAC] mb-5" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-gray-900 mb-3 font-heading">Innovation Driven</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We embrace new technologies to build future-ready solutions.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="flex flex-col items-center text-center pt-8 md:pt-0 md:px-6">
              <ShieldCheck className="w-10 h-10 text-[#005BAC] mb-5" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-gray-900 mb-3 font-heading">Quality Focused</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Best practices and high standards in every project.
              </p>
            </div>
            
            {/* Value 4 */}
            <div className="flex flex-col items-center text-center pt-8 md:pt-0 md:px-6 last:border-r-0 lg:last:pl-6">
              <Handshake className="w-10 h-10 text-[#005BAC] mb-5" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-gray-900 mb-3 font-heading">Integrity & Trust</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Transparency, ethics and long-term relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Our Journey
            </h2>
            <div className="w-12 h-1 bg-[#005BAC]"></div>
          </div>

          <div className="relative">
            {/* Continuous Line connecting timelines */}
            <div className="hidden lg:block absolute top-[11px] left-[10%] right-[10%] h-0.5 bg-blue-100 -z-10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
              
              {/* 2018 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-6 h-6 rounded-full bg-[#005BAC] border-4 border-blue-100 mb-6 shadow-sm"></div>
                <div className="text-[#005BAC] font-bold text-lg mb-2">2018</div>
                <h4 className="font-bold text-gray-900 mb-3">Company Founded</h4>
                <p className="text-gray-600 text-sm leading-relaxed max-w-[200px]">
                  ScorpyTech was established with a vision to deliver innovative, future-ready digital solutions.
                </p>
              </div>

              {/* 2020 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-6 h-6 rounded-full bg-[#005BAC] border-4 border-blue-100 mb-6 shadow-sm"></div>
                <div className="text-[#005BAC] font-bold text-lg mb-2">2020</div>
                <h4 className="font-bold text-gray-900 mb-3">Innovation Focus</h4>
                <p className="text-gray-600 text-sm leading-relaxed max-w-[200px]">
                  Specialized in AI, IoT, robotics, and custom software solutions across various industries.
                </p>
              </div>

              {/* 2022 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-6 h-6 rounded-full bg-[#005BAC] border-4 border-blue-100 mb-6 shadow-sm"></div>
                <div className="text-[#005BAC] font-bold text-lg mb-2">2022</div>
                <h4 className="font-bold text-gray-900 mb-3">Empowering Students</h4>
                <p className="text-gray-600 text-sm leading-relaxed max-w-[200px]">
                  Bridged the academic gap by introducing internships, training, and research guidance.
                </p>
              </div>

              {/* 2024 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-6 h-6 rounded-full bg-[#005BAC] border-4 border-blue-100 mb-6 shadow-sm"></div>
                <div className="text-[#005BAC] font-bold text-lg mb-2">2024</div>
                <h4 className="font-bold text-gray-900 mb-3">Scaling New Heights</h4>
                <p className="text-gray-600 text-sm leading-relaxed max-w-[200px]">
                  Grown as a trusted partner, delivering complex solutions across healthcare, manufacturing, and retail.
                </p>
              </div>

              {/* Future */}
              <div className="flex flex-col items-center text-center">
                <div className="w-6 h-6 rounded-full bg-[#005BAC] border-4 border-blue-100 mb-6 shadow-sm"></div>
                <div className="text-[#005BAC] font-bold text-lg mb-2">Future</div>
                <h4 className="font-bold text-gray-900 mb-3">Future Ready</h4>
                <p className="text-gray-600 text-sm leading-relaxed max-w-[200px]">
                  Focused on shaping the future through continuous research and emerging technologies.
                </p>
              </div>

            </div>
            
            {/* Mobile/Tablet Vertical Line */}
            <div className="lg:hidden absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-blue-100 -z-10"></div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-24 bg-[#0A192F] text-white overflow-hidden">
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-luminosity"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-[#0A192F]"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-heading">
            Let's Build the Future Together
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Partner with us to accelerate your digital transformation journey.
          </p>
          <button className="bg-transparent hover:bg-white hover:text-[#0A192F] text-white border-2 border-white font-semibold px-8 py-3.5 rounded-sm transition-all duration-300">
            Get in Touch
          </button>
        </div>
      </section>

    </div>
  );
};

export default AboutUsPage;
