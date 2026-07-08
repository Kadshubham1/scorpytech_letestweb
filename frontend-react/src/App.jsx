import React, { useState } from 'react';
import { useToast } from './context/ToastContext';
import { mockData } from './data/mockData';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import WhyChooseUs from './components/WhyChooseUs';
import Partners from './components/Partners';
import FAQ from './components/FAQ';
import Blogs from './components/Blogs';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import InternshipModal from './components/InternshipModal';
import Industries from './components/Industries';
import ServicesPage from './components/ServicesPage';
import AboutUsPage from './components/AboutUsPage';
import CareersPage from './components/CareersPage';
import ContactPage from './components/ContactPage';
import AdminEnquiries from './components/AdminEnquiries';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-primary/20 selection:text-primary">
      <Header 
        onApplyNow={() => {
          setActivePage('contactus');
          window.scrollTo(0, 0);
        }} 
        onNavigate={(page) => {
          setActivePage(page);
          window.scrollTo(0, 0);
        }}
        activePage={activePage}
      />
      
      <main>
        {activePage === 'home' ? (
          <>
            <Hero onApplyNow={() => {
              setActivePage('contactus');
              window.scrollTo(0, 0);
            }} />
            <Partners partners={mockData.partners} />
            <Services services={mockData.services} />
            <Statistics stats={mockData.stats} />
            <Technologies technologies={mockData.technologies} />
            <Projects projects={mockData.projects} />
            <WhyChooseUs testimonials={mockData.testimonials} />
            <FAQ faqs={mockData.faqs} />
            <Blogs blogs={mockData.blogs} />
            <Newsletter />
          </>
        ) : activePage === 'industries' ? (
          <Industries />
        ) : activePage === 'services' ? (
          <ServicesPage />
        ) : activePage === 'aboutus' ? (
          <AboutUsPage />
        ) : activePage === 'careers' ? (
          <CareersPage />
        ) : activePage === 'contactus' ? (
          <ContactPage />
        ) : activePage === 'admin' ? (
          <AdminEnquiries />
        ) : null}
      </main>

      <Footer />
      
      <InternshipModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </div>
  );
}
