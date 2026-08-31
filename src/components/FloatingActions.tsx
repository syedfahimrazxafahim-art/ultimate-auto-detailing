import React, { useState } from 'react';
import { Phone, MessageSquare, Calendar, ChevronUp, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Expanded Quick Options */}
      {expanded && (
        <div className="flex flex-col gap-2 animate-in slide-in-from-bottom-5 duration-200">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center gap-2.5 px-4 py-2.5 bg-[#121417] border border-white/20 text-white rounded-full shadow-2xl text-xs font-semibold hover:border-[#C9A35A] hover:text-[#C9A35A] transition-all"
          >
            <Phone className="w-4 h-4 text-[#C9A35A]" />
            <span>Call {BUSINESS_INFO.phoneFormatted}</span>
          </a>

          <a
            href={BUSINESS_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-4 py-2.5 bg-[#121417] border border-[#25D366]/60 text-white rounded-full shadow-2xl text-xs font-semibold hover:bg-[#25D366] hover:text-black transition-all"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </a>

          <button
            onClick={() => {
              setExpanded(false);
              onOpenBooking();
            }}
            className="flex items-center gap-2.5 px-4 py-2.5 bg-gradient-to-r from-[#DFBA73] to-[#C9A35A] text-black rounded-full shadow-2xl text-xs font-bold uppercase tracking-wider hover:opacity-95 transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Detailing</span>
          </button>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="group relative flex items-center gap-2.5 px-5 py-3.5 bg-[#08090B] border-2 border-[#C9A35A] text-white rounded-full shadow-[0_0_25px_rgba(201,163,90,0.4)] hover:bg-[#C9A35A] hover:text-black transition-all duration-300 cursor-pointer"
        aria-label="Instant Booking Actions"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A35A] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C9A35A] group-hover:bg-black"></span>
        </span>
        <span className="text-xs font-bold uppercase tracking-widest">
          {expanded ? 'Close' : 'Fast Booking'}
        </span>
        <Sparkles className="w-4 h-4 text-[#C9A35A] group-hover:text-black" />
      </button>
    </div>
  );
};
