import React from 'react';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_INFO } from '../data/mockData';
import { Phone, Mail, MessageSquare, MapPin, Clock, ShieldCheck, Instagram, Facebook } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenBooking }) => {
  return (
    <footer className="border-t border-white/10 bg-[#08090B] text-gray-400">
      {/* Top Banner Callout */}
      <div className="border-b border-white/5 bg-[#121417] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-[#C9A35A] text-xs font-bold uppercase tracking-[0.25em] block mb-1">
              Convenient Doorstep Service
            </span>
            <h3 className="text-white text-xl sm:text-2xl font-bold font-heading uppercase tracking-wide">
              Ready for a Showroom Shine in Los Angeles?
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="px-6 py-3 border border-white/20 text-white hover:border-[#C9A35A] hover:text-[#C9A35A] transition-all text-xs uppercase tracking-widest font-bold flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#C9A35A]" />
              {BUSINESS_INFO.phoneFormatted}
            </a>
            <button
              onClick={onOpenBooking}
              className="px-8 py-3 bg-[#C9A35A] hover:bg-[#E5C77A] text-black font-bold uppercase text-xs tracking-widest transition-all shadow-[0_0_20px_rgba(201,163,90,0.35)] cursor-pointer"
            >
              Book Doorstep Detail
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand & Overview */}
        <div className="space-y-4">
          <BrandLogo size="lg" />
          <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
            {BUSINESS_INFO.tagline}. High-end mobile automotive detailing and restoration for luxury cars, SUVs, trucks, and RVs across Los Angeles, California.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a
              href={BUSINESS_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-sm border border-white/10 bg-[#121417] flex items-center justify-center text-gray-400 hover:text-[#C9A35A] hover:border-[#C9A35A] transition-all"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href={BUSINESS_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-sm border border-white/10 bg-[#121417] flex items-center justify-center text-gray-400 hover:text-[#C9A35A] hover:border-[#C9A35A] transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-sm border border-white/10 bg-[#121417] flex items-center justify-center text-[#C9A35A] hover:bg-[#C9A35A] hover:text-black transition-all"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="space-y-3">
          <h4 className="text-white text-xs font-bold uppercase tracking-[0.25em] border-l-2 border-[#C9A35A] pl-3 font-heading">
            Navigation
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button
                onClick={() => onSelectTab('home')}
                className="hover:text-[#C9A35A] transition-colors cursor-pointer"
              >
                Home Showcase
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectTab('services')}
                className="hover:text-[#C9A35A] transition-colors cursor-pointer"
              >
                Detailing Services
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectTab('gallery')}
                className="hover:text-[#C9A35A] transition-colors cursor-pointer"
              >
                Before & After Transformations
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectTab('packages')}
                className="hover:text-[#C9A35A] transition-colors cursor-pointer"
              >
                Package Pricing & Estimates
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectTab('about')}
                className="hover:text-[#C9A35A] transition-colors cursor-pointer"
              >
                About Us & Service Territory
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectTab('reviews')}
                className="hover:text-[#C9A35A] transition-colors cursor-pointer"
              >
                Verified Client Reviews
              </button>
            </li>
          </ul>
        </div>

        {/* Detailing Services */}
        <div className="space-y-3">
          <h4 className="text-white text-xs font-bold uppercase tracking-[0.25em] border-l-2 border-[#C9A35A] pl-3 font-heading">
            Core Specialties
          </h4>
          <ul className="space-y-2 text-xs">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 bg-[#C9A35A] rounded-full"></span>
              Full Mobile Doorstep Detailing
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 bg-[#C9A35A] rounded-full"></span>
              Deep Leather Steam Cleansing
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 bg-[#C9A35A] rounded-full"></span>
              Bio-Degradable Snow Foam Wash
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 bg-[#C9A35A] rounded-full"></span>
              Exterior Paint Swirl Correction
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 bg-[#C9A35A] rounded-full"></span>
              RV & Motorhome Roof Moss Stripping
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 bg-[#C9A35A] rounded-full"></span>
              Satin Hydrophobic Tire Nourish
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h4 className="text-white text-xs font-bold uppercase tracking-[0.25em] border-l-2 border-[#C9A35A] pl-3 font-heading">
            Direct Dispatch
          </h4>
          <div className="space-y-3 text-xs">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#C9A35A] shrink-0 mt-0.5" />
              <span>{BUSINESS_INFO.location} & surrounding areas</span>
            </div>
            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-[#C9A35A] shrink-0 mt-0.5" />
              <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white transition-colors">
                {BUSINESS_INFO.phoneFormatted}
              </a>
            </div>
            <div className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 text-[#C9A35A] shrink-0 mt-0.5" />
              <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors break-all">
                {BUSINESS_INFO.email}
              </a>
            </div>
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-[#C9A35A] shrink-0 mt-0.5" />
              <span>{BUSINESS_INFO.hours}</span>
            </div>
            <div className="pt-2 flex items-center gap-2 text-[11px] text-[#C9A35A]">
              <ShieldCheck className="w-4 h-4" />
              <span>100% On-Site Satisfaction Checked</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6 bg-[#08090B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <div>
            © {new Date().getFullYear()} {BUSINESS_INFO.name}. All Rights Reserved. Mobile Detailing in Los Angeles, California.
          </div>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <div className="w-1 h-1 bg-[#C9A35A] rounded-full"></div>
            <span>Terms of Service</span>
            <div className="w-1 h-1 bg-[#C9A35A] rounded-full"></div>
            <span className="text-[#C9A35A] uppercase tracking-widest font-semibold">Since 2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
