import React from 'react';
import { BUSINESS_INFO } from '../data/mockData';
import { ShieldCheck, MapPin, Award, CheckCircle, Truck, Droplets, Sparkles, Clock, Phone, MessageSquare, Mail } from 'lucide-react';

interface AboutViewProps {
  onOpenBooking: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenBooking }) => {
  const serviceZones = [
    'Downtown Los Angeles (DTLA)',
    'Beverly Hills & Century City',
    'Santa Monica & Venice Beach',
    'Hollywood & West Hollywood',
    'Pasadena & Glendale',
    'Burbank & San Fernando Valley',
    'Culver City & Marina Del Rey',
    'Long Beach & South Bay',
  ];

  return (
    <div className="w-full bg-[#08090B] text-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[#C9A35A] text-xs uppercase tracking-[0.25em] font-bold block mb-2">
            The Ultimate Detailing Standard
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase font-heading tracking-tight text-white mb-4">
            About Ultimate Auto Detailing
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-xl mx-auto">
            Bringing master automotive reconditioning directly to your doorstep in Los Angeles, California.
          </p>
        </div>

        {/* Brand Mission & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#121417] border border-white/10 p-6 sm:p-10 rounded-sm">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs text-[#C9A35A] uppercase tracking-[0.2em] font-bold">
              Where Every Detail Defines Perfection
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase font-heading text-white">
              Why We Bring The Detailing Studio To You
            </h2>
            <p className="text-xs text-gray-300 leading-relaxed">
              We founded <strong className="text-white">Ultimate Auto Detailing</strong> to eliminate the hassle of waiting in crowded auto shops or dealing with scratch-inducing automatic car washes. Your vehicle is one of your most valuable assets, and maintaining its finish requires precision, clean microfiber, and pH-balanced chemicals.
            </p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Our mobile units arrive fully self-contained with deionized spot-free water tanks, onboard whisper-quiet generators, high-pressure foam cannons, and high-temp interior steam extractors.
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4 text-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C9A35A]" />
                <span className="text-white font-medium">100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C9A35A]" />
                <span className="text-white font-medium">1¼ – 1½ Hour Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="w-4 h-4 text-[#C9A35A]" />
                <span className="text-white font-medium">Bio-Degradable Formulas</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#C9A35A]" />
                <span className="text-white font-medium">Zero Travel Fee in LA</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#C9A35A]/40 shadow-2xl">
              <img
                src="https://res.cloudinary.com/fzobzdco/image/upload/v1788215191/2.jpg"
                alt="Ultimate Auto Detailing Studio Quality"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#08090B]/90 backdrop-blur-md border border-white/10 rounded">
                <div className="text-[#C9A35A] font-bold text-xs uppercase tracking-wider font-heading">
                  Ultimate Mobile Facility
                </div>
                <div className="text-[11px] text-gray-400">
                  Fully equipped Mercedes Sprinter / Ford Transit detailing vans operating throughout Greater Los Angeles.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Los Angeles Service Coverage */}
        <div className="bg-[#121417] border border-white/10 p-6 sm:p-10 rounded-sm">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[#C9A35A] text-xs uppercase tracking-[0.25em] font-bold block mb-1">
              Convenience at Home or Work
            </span>
            <h3 className="text-2xl font-bold uppercase font-heading text-white">
              Los Angeles Service Areas
            </h3>
            <p className="text-xs text-gray-400 mt-2">
              We travel across Los Angeles County with zero travel surcharge.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceZones.map((zone, idx) => (
              <div
                key={idx}
                className="bg-[#08090B] p-4 border border-white/5 rounded flex items-center gap-3 hover:border-[#C9A35A]/40 transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#C9A35A] shrink-0" />
                <span className="text-xs text-gray-300 font-medium">{zone}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500 mb-4">
              Don't see your specific neighborhood? We cover all adjacent Los Angeles areas!
            </p>
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 bg-[#C9A35A] text-black font-bold uppercase text-xs tracking-widest hover:bg-[#E5C77A] transition-all shadow-[0_0_20px_rgba(201,163,90,0.3)] cursor-pointer"
            >
              Book Doorstep Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
