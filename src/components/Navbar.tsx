import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_INFO } from '../data/mockData';
import { Phone, MessageSquare, Menu, X, Calendar, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenBooking,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Transformations' },
    { id: 'packages', label: 'Packages' },
    { id: 'about', label: 'About & Area' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onSelectTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#08090B]/90 backdrop-blur-md transition-all duration-300">
      {/* Top micro-banner */}
      <div className="hidden lg:flex items-center justify-between px-8 py-1.5 bg-[#121417] text-[11px] tracking-wider text-gray-400 border-b border-white/5">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-gray-300">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A35A] animate-pulse"></span>
            LOS ANGELES, CA — MOBILE DOORSTEP DETAILING
          </span>
          <span className="text-gray-500">|</span>
          <span className="text-gray-300">Standard Service Duration: {BUSINESS_INFO.standardDuration}</span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center gap-1.5 hover:text-[#C9A35A] transition-colors text-white font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-[#C9A35A]" />
            {BUSINESS_INFO.phoneFormatted}
          </a>
          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#C9A35A] hover:text-white transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            WhatsApp Dispatch
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#C9A35A]/50 p-1"
        >
          <BrandLogo size="md" />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-[11px] uppercase tracking-[0.18em] font-semibold text-gray-400">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative py-2 transition-all cursor-pointer hover:text-white ${
                  isActive ? 'text-[#C9A35A] font-bold' : ''
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C9A35A] shadow-[0_0_8px_rgba(201,163,90,0.8)]"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="hidden xl:flex items-center gap-2 px-4 py-2.5 border border-white/15 text-xs uppercase tracking-widest text-gray-300 hover:border-[#C9A35A] hover:text-[#C9A35A] transition-all font-semibold"
          >
            <Phone className="w-3.5 h-3.5 text-[#C9A35A]" />
            Call Now
          </a>
          <button
            onClick={() => onOpenBooking()}
            className="flex items-center gap-2 px-6 py-2.5 bg-[#C9A35A] hover:bg-[#E5C77A] text-black font-bold uppercase text-[11px] tracking-widest transition-all shadow-[0_0_18px_rgba(201,163,90,0.3)] cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            Book Online
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white border border-white/10"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#C9A35A]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#08090B] border-b border-[#C9A35A]/30 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-1 gap-2">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left py-2.5 px-3 text-xs uppercase tracking-widest font-semibold border-l-2 ${
                    isActive
                      ? 'border-[#C9A35A] bg-[#121417] text-[#C9A35A]'
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-[#C9A35A] text-black font-bold uppercase text-xs tracking-widest text-center"
            >
              Book Mobile Detailing
            </button>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="py-2.5 border border-white/20 text-center text-xs uppercase font-medium text-white flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#C9A35A]" /> Call
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 border border-[#C9A35A]/50 text-center text-xs uppercase font-medium text-[#C9A35A] flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
