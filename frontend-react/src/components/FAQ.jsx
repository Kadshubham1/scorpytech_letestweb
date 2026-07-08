import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = ({ faqs }) => {
  const [activeFaq, setActiveFaq] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-20 bg-white" id="faqs">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-gray-9000">Quick answers to clear all your queries regarding certificates, tools, and schedules.</p>
        </div>

        <div className="space-y-4">
          {faqs.map(faq => {
            const isOpen = activeFaq === faq.id;
            return (
              <div key={faq.id} className="border border-slate-100 rounded-md overflow-hidden shadow-sm">
                <button 
                  onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between text-left p-6 font-bold text-gray-900 hover:bg-white transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className="faq-drawer overflow-hidden bg-white/50"
                  style={{ maxHeight: isOpen ? '200px' : '0' }}
                >
                  <p className="p-6 text-sm text-gray-9000 leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
