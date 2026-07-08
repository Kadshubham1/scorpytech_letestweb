import React from 'react';
import { 
  Users, 
  TrendingUp, 
  Lightbulb, 
  Heart, 
  MapPin, 
  Briefcase, 
  ArrowRight,
  Banknote,
  HeartPulse,
  Laptop,
  GraduationCap,
  PartyPopper,
  Award
} from 'lucide-react';

const CareersPage = () => {
  const jobs = [
    {
      title: "Full Stack Developer",
      location: "Pune, India",
      type: "Full-time",
      description: "3+ years of experience in React, Node.js, Python/Django and database technologies.",
      experience: "3 - 5 Years"
    },
    {
      title: "Backend Developer (Python)",
      location: "Pune, India",
      type: "Full-time",
      description: "2+ years of experience in Python, Django/FastAPI, REST APIs and databases.",
      experience: "2 - 4 Years"
    },
    {
      title: "UI/UX Designer",
      location: "Pune, India",
      type: "Full-time",
      description: "2+ years of experience in UI/UX design, Figma, prototyping and user research.",
      experience: "2 - 4 Years"
    },
    {
      title: "DevOps Engineer",
      location: "Pune, India",
      type: "Full-time",
      description: "2+ years of experience in AWS, Docker, CI/CD pipelines and automation.",
      experience: "2 - 4 Years"
    }
  ];

  return (
    <div className="w-full bg-[#FAFBFC] min-h-screen pt-20">
      
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          
          {/* Left Content */}
          <div className="flex-1 px-6 py-16 md:py-24 lg:pl-16 xl:pl-32 lg:pr-10 relative z-10 bg-gradient-to-r from-white via-white to-transparent">
            <div className="max-w-xl">
              <div className="text-sm font-medium mb-6 flex items-center gap-2">
                <span className="text-[#005BAC] hover:underline cursor-pointer">Home</span>
                <span className="text-gray-400">/</span>
                <span className="text-gray-600">Careers</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-heading tracking-tight leading-tight">
                Build Your Career.<br />
                <span className="text-[#005BAC]">Shape the Future.</span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At Scorpy Tech, we believe our people are our greatest strength. 
                Join us and work on meaningful projects that create real-world impact.
              </p>
              
              <button className="bg-[#005BAC] hover:bg-[#004280] text-white font-semibold px-8 py-3.5 rounded-sm transition-colors shadow-md">
                View Open Positions
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            {/* The gradient overlay ensures text is readable if it overlaps, and blends the image on large screens */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent hidden lg:block z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              alt="People working in modern office" 
              className="w-full h-[400px] lg:h-full object-cover"
            />
          </div>
          
        </div>
      </section>

      {/* Why Scorpy Tech Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#005BAC] font-bold text-sm tracking-wider uppercase mb-3 block">
              Why Scorpy Tech?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading">
              A Place to Learn, Grow & Succeed
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full border-2 border-blue-100 flex items-center justify-center mb-5 group-hover:border-[#005BAC] group-hover:bg-blue-50 transition-all duration-300">
                <Users className="w-8 h-8 text-[#005BAC]" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">Great People</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-[240px]">
                Work with talented and passionate people who inspire you every day.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full border-2 border-blue-100 flex items-center justify-center mb-5 group-hover:border-[#005BAC] group-hover:bg-blue-50 transition-all duration-300">
                <TrendingUp className="w-8 h-8 text-[#005BAC]" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">Growth Opportunities</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-[240px]">
                Continuous learning and development to help you achieve your goals.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full border-2 border-blue-100 flex items-center justify-center mb-5 group-hover:border-[#005BAC] group-hover:bg-blue-50 transition-all duration-300">
                <Lightbulb className="w-8 h-8 text-[#005BAC]" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">Meaningful Impact</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-[240px]">
                Build innovative solutions that solve real business challenges.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full border-2 border-blue-100 flex items-center justify-center mb-5 group-hover:border-[#005BAC] group-hover:bg-blue-50 transition-all duration-300">
                <Heart className="w-8 h-8 text-[#005BAC]" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">Inclusive Culture</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-[240px]">
                A supportive and inclusive environment where everyone belongs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          
          <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
                Open Positions
              </h2>
              <div className="w-12 h-1 bg-[#005BAC]"></div>
            </div>
            <a href="#" className="inline-flex items-center text-[#005BAC] font-semibold hover:text-[#004280] transition-colors">
              View All Openings <ArrowRight className="w-4 h-4 ml-1.5" />
            </a>
          </div>

          <div className="flex flex-col gap-4">
            {jobs.map((job, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 lg:p-8 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                
                {/* Job Info */}
                <div className="flex-1 lg:max-w-[30%]">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{job.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4" /> {job.type}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="flex-1 lg:max-w-[40%]">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {job.description}
                  </p>
                </div>

                {/* Experience & Action */}
                <div className="flex items-center justify-between lg:justify-end gap-8 lg:min-w-[250px]">
                  <div>
                    <div className="text-xs text-gray-500 font-medium mb-1 uppercase tracking-wider">Experience</div>
                    <div className="font-bold text-gray-900">{job.experience}</div>
                  </div>
                  <button className="bg-[#005BAC] hover:bg-[#004280] text-white font-semibold px-6 py-2.5 rounded-sm transition-colors">
                    Apply Now
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Benefits & Perks Section */}
      <section className="py-10 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="bg-[#F8FAFC] rounded-2xl p-8 md:p-12 border border-gray-100">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 font-heading">
                Benefits & Perks
              </h2>
              <div className="w-12 h-1 bg-[#005BAC]"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
              <div className="flex flex-col items-center group">
                <div className="w-12 h-12 mb-4 text-[#005BAC] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Banknote className="w-10 h-10" strokeWidth={1.2} />
                </div>
                <h4 className="font-bold text-gray-900 text-sm">Competitive Salary</h4>
              </div>
              
              <div className="flex flex-col items-center group">
                <div className="w-12 h-12 mb-4 text-[#005BAC] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <HeartPulse className="w-10 h-10" strokeWidth={1.2} />
                </div>
                <h4 className="font-bold text-gray-900 text-sm">Health Insurance</h4>
              </div>

              <div className="flex flex-col items-center group">
                <div className="w-12 h-12 mb-4 text-[#005BAC] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Laptop className="w-10 h-10" strokeWidth={1.2} />
                </div>
                <h4 className="font-bold text-gray-900 text-sm">Flexible Work</h4>
              </div>

              <div className="flex flex-col items-center group">
                <div className="w-12 h-12 mb-4 text-[#005BAC] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-10 h-10" strokeWidth={1.2} />
                </div>
                <h4 className="font-bold text-gray-900 text-sm">Learning Budget</h4>
              </div>

              <div className="flex flex-col items-center group">
                <div className="w-12 h-12 mb-4 text-[#005BAC] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <PartyPopper className="w-10 h-10" strokeWidth={1.2} />
                </div>
                <h4 className="font-bold text-gray-900 text-sm">Team Outings</h4>
              </div>

              <div className="flex flex-col items-center group">
                <div className="w-12 h-12 mb-4 text-[#005BAC] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="w-10 h-10" strokeWidth={1.2} />
                </div>
                <h4 className="font-bold text-gray-900 text-sm">Performance Bonus</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#020A1A] rounded-xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
            
            {/* Abstract Background pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(circle at center, #005BAC 0%, transparent 70%)' }}>
            </div>
            
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 font-heading">
                Ready to take the next step?
              </h2>
              <p className="text-gray-300 text-lg">
                Explore opportunities and become a part of our journey.
              </p>
            </div>
            
            <button className="relative z-10 whitespace-nowrap bg-white hover:bg-gray-50 text-[#020A1A] font-bold px-8 py-3.5 rounded-sm transition-colors flex items-center justify-center gap-2 shadow-lg w-full md:w-auto">
              Explore Openings <ArrowRight className="w-5 h-5" />
            </button>
            
          </div>
        </div>
      </section>

    </div>
  );
};

export default CareersPage;
