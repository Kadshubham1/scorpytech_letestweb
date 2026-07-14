import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Brand palette (extracted from ScorpyTech logo) ───────────────────────────
// Primary Blue : #1A6FE8  (badge gradient top)
// Deep Blue    : #0B3EC4  (badge gradient bottom / hover)
// Charcoal     : #2D2D2D  (logo metallic text)
// ─────────────────────────────────────────────────────────────────────────────

export default function Header({ onApplyNow, onNavigate, activePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled]             = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: 'Services',     page: 'services'            },
    { name: 'Industries',   page: 'industries'          },
    { name: 'Case Studies', page: 'final-year-projects' },
    { name: 'About Us',     page: 'aboutus'             },
    { name: 'Careers',      page: 'careers'             },
  ];

  // Pages with a dark full-bleed hero — navbar starts transparent
  const darkHeroPages  = ['home', 'services', 'industries'];
  const hasDarkHero    = darkHeroPages.includes(activePage);
  const isSolidWhite   = scrolled || !hasDarkHero;

  // ─── Logo size: larger at rest, 10 % smaller when scrolled ───────────────
  // Desktop 65px → 58px | Tablet 55px → 50px | Mobile 50px → 45px
  const logoH = {
    desktop : scrolled ? 58  : 65,
    tablet  : scrolled ? 50  : 55,
    mobile  : scrolled ? 45  : 50,
  };

  // Navbar height mirrors logo scale
  const navH = scrolled ? 68 : 80;

  return (
    <>
      {/* ─── Desktop / Tablet Navbar ──────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-[400ms] ease-in-out ${
          isSolidWhite
            ? 'bg-white/97 backdrop-blur-[22px] border-b border-gray-200/70 shadow-[0_4px_28px_rgba(0,0,0,0.07)]'
            : 'bg-transparent border-b border-transparent shadow-none'
        }`}
        style={{ height: navH, transition: 'height 350ms ease, background 400ms ease, box-shadow 400ms ease' }}
      >
        <div
          className="container mx-auto px-6 lg:px-12 flex items-center justify-between h-full"
        >
          {/* ── Logo (load animation + hover) ───────────────────────────── */}
          <motion.div
            onClick={() => onNavigate('home')}
            className="flex items-center cursor-pointer select-none"
            style={{ willChange: 'transform, opacity' }}
            /* ── Initial page-load animation ── */
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            /* ── Hover animation ── */
            whileHover={{
              scale: 1.08,
              y: -2,
              filter: 'drop-shadow(0 4px 16px rgba(26,111,232,0.35))',
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
            whileTap={{ scale: 0.97 }}
          >
            <img
              src={logo}
              alt="ScorpyTech"
              draggable={false}
              className="object-contain transition-all duration-[350ms] ease-in-out hidden xl:block"
              style={{
                height: logoH.desktop,
                maxWidth: 200,
                filter: !isSolidWhite
                  ? 'drop-shadow(0 2px 10px rgba(0,0,0,0.55)) brightness(1.05)'
                  : 'none',
              }}
            />
            {/* Tablet */}
            <img
              src={logo}
              alt="ScorpyTech"
              draggable={false}
              className="object-contain transition-all duration-[350ms] ease-in-out hidden md:block xl:hidden"
              style={{
                height: logoH.tablet,
                maxWidth: 170,
                filter: !isSolidWhite
                  ? 'drop-shadow(0 2px 10px rgba(0,0,0,0.55)) brightness(1.05)'
                  : 'none',
              }}
            />
            {/* Mobile */}
            <img
              src={logo}
              alt="ScorpyTech"
              draggable={false}
              className="object-contain transition-all duration-[350ms] ease-in-out block md:hidden"
              style={{
                height: logoH.mobile,
                maxWidth: 150,
                filter: !isSolidWhite
                  ? 'drop-shadow(0 2px 10px rgba(0,0,0,0.55)) brightness(1.05)'
                  : 'none',
              }}
            />
          </motion.div>

          {/* ── Desktop Navigation ──────────────────────────────────────── */}
          <nav className="hidden xl:flex items-center gap-8 h-full">
            {[...navLinks, { name: 'Contact', page: 'contactus' }].map((link) => {
              const isActive = activePage === link.page;
              return (
                <div key={link.name} className="relative group flex items-center h-full">
                  <button
                    onClick={() => onNavigate(link.page)}
                    className={`text-[14.5px] tracking-wide transition-all duration-300 ${
                      isActive
                        ? 'text-[#1A6FE8] font-semibold'
                        : isSolidWhite
                          ? 'text-[#3a3a3a] font-medium hover:text-[#1A6FE8]'
                          : 'text-white/85 font-medium hover:text-white'
                    }`}
                  >
                    {link.name}
                  </button>
                  {/* Animated brand-blue underline */}
                  <span
                    className={`absolute bottom-[14px] left-1/2 -translate-x-1/2 h-[2.5px] rounded-full bg-[#1A6FE8] transition-all duration-300 ease-in-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </div>
              );
            })}
          </nav>

          {/* ── Right: CTA + Mobile Toggle ──────────────────────────────── */}
          <div className="flex items-center gap-4">
            {/* "Let's Talk" button */}
            <motion.button
              onClick={() => { onNavigate('contactus'); window.scrollTo(0, 0); }}
              className="hidden xl:inline-flex items-center bg-[#1A6FE8] text-white px-7 py-[10px] font-semibold text-[14.5px] shadow-[0_4px_16px_rgba(26,111,232,0.32)] select-none"
              style={{ borderRadius: 12, willChange: 'transform, box-shadow' }}
              whileHover={{
                y: -3,
                backgroundColor: '#1260d4',
                boxShadow: '0 10px 28px rgba(26,111,232,0.42)',
                transition: { duration: 0.25, ease: 'easeOut' },
              }}
              whileTap={{ scale: 0.97, y: 0 }}
            >
              Let's Talk
            </motion.button>

            {/* Mobile hamburger */}
            <button
              className={`xl:hidden p-2 transition-colors ${
                isSolidWhite ? 'text-[#2D2D2D] hover:text-[#1A6FE8]' : 'text-white hover:text-[#1A6FE8]'
              }`}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={30} />
            </button>
          </div>
        </div>
      </header>

      {/* ─── Mobile Drawer ────────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
            />

            {/* Drawer panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
              className="fixed top-0 right-0 h-[100dvh] w-[85%] max-w-[400px] bg-white border-l border-gray-200 z-[70] flex flex-col shadow-2xl"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <motion.img
                  src={logo}
                  alt="ScorpyTech"
                  className="object-contain"
                  style={{ height: 46, maxWidth: 145 }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-red-500 transition-colors bg-gray-100 rounded-full"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Nav items */}
              <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-1">
                {[...navLinks, { name: 'Contact', page: 'contactus' }].map((link, i) => {
                  const isActive = activePage === link.page;
                  return (
                    <motion.button
                      key={link.name}
                      onClick={() => { onNavigate(link.page); setMobileMenuOpen(false); }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3, ease: 'easeOut' }}
                      className={`text-left font-medium py-3.5 px-4 text-[15px] rounded-xl transition-all ${
                        isActive
                          ? 'bg-[#1A6FE8]/10 text-[#1A6FE8] font-semibold border-l-[3px] border-[#1A6FE8] pl-[13px]'
                          : 'text-[#3a3a3a] hover:bg-gray-50 hover:text-[#1A6FE8]'
                      }`}
                    >
                      {link.name}
                    </motion.button>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="p-5 border-t border-gray-100">
                <motion.button
                  onClick={() => { onNavigate('contactus'); setMobileMenuOpen(false); window.scrollTo(0, 0); }}
                  className="w-full bg-[#1A6FE8] text-white py-3.5 font-semibold text-[15px] shadow-[0_4px_18px_rgba(26,111,232,0.3)] transition-colors duration-250"
                  style={{ borderRadius: 12 }}
                  whileHover={{ backgroundColor: '#1260d4', y: -2, boxShadow: '0 8px 24px rgba(26,111,232,0.38)', transition: { duration: 0.25 } }}
                  whileTap={{ scale: 0.97 }}
                >
                  Let's Talk
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}