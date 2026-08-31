import React, { useState } from 'react';
import {
  BUSINESS_INFO,
  DETAILED_SERVICES,
  TRANSFORMATION_GALLERY,
  CLIENT_REVIEWS,
  TRUST_PILLARS,
} from '../data/mockData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import {
  Sparkles,
  ShieldCheck,
  Clock,
  MapPin,
  Calendar,
  Phone,
  MessageSquare,
  ArrowRight,
  Star,
  CheckCircle2,
  Car,
  Droplet,
  Award,
} from 'lucide-react';

interface HomeViewProps {
  onSelectTab: (tab: string) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onSelectTab, onOpenBooking }) => {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);
  const [selectedReviewImage, setSelectedReviewImage] = useState<string | null>(null);
  const activeCase = TRANSFORMATION_GALLERY[selectedCaseIdx];

  return (
    <div className="w-full bg-[#08090B] text-white">
      {/* 1. HERO SECTION (Cinema luxury automotive style) */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden border-b border-white/5">
        {/* Background Image with Dark Gradient Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/fzobzdco/image/upload/v1788215204/1.jpg"
            alt="Luxury Automobile Detailing Showroom Finish"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-40 filter contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08090B] via-[#08090B]/85 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-transparent to-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="max-w-2xl">
            {/* Top Location & Mobile Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#121417]/90 border border-[#C9A35A]/40 rounded-sm mb-5 shadow-[0_0_15px_rgba(201,163,90,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#C9A35A] animate-pulse"></span>
              <span className="text-[#C9A35A] text-[11px] uppercase tracking-[0.25em] font-bold">
                Los Angeles, California • Mobile Doorstep Service
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase font-heading leading-[1.05] tracking-tight mb-6">
              WHERE EVERY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFBA73] via-[#FFFFFF] to-[#C0C0C0]">
                DETAIL DEFINES
              </span>{' '}
              <br />
              PERFECTION.
            </h1>

            {/* Subtitle & Value Proposition */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl font-normal">
              High-end automotive restoration delivered right to your home or office. Experience showroom-grade clarity, deep steam interior decontamination, and streak-free paint gloss — completely stress-free.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenBooking('full-mobile-signature')}
                className="px-8 py-4 bg-[#C9A35A] hover:bg-[#E5C77A] text-black font-bold uppercase text-[12px] tracking-widest transition-all shadow-[0_0_25px_rgba(201,163,90,0.4)] flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Book Online Now
              </button>

              <button
                onClick={() => onSelectTab('gallery')}
                className="px-8 py-4 border border-white/25 hover:border-[#C9A35A] text-white hover:text-[#C9A35A] font-bold uppercase text-[12px] tracking-widest transition-all backdrop-blur-sm cursor-pointer"
              >
                View Transformations
              </button>
            </div>

            {/* Micro Stats / Highlights */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="text-[#C9A35A] font-bold text-xl sm:text-2xl font-heading">5.0 ★</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">
                  Verified LA Reviews
                </div>
              </div>
              <div>
                <div className="text-white font-bold text-xl sm:text-2xl font-heading">1¼ – 1½h</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">
                  Express Turnaround
                </div>
              </div>
              <div>
                <div className="text-white font-bold text-xl sm:text-2xl font-heading">100%</div>
                <div className="text-[10px] text-gray-400 uppercase tracking-wider mt-0.5">
                  Mobile Doorstep
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Vertical Accent */}
        <div className="hidden xl:flex absolute right-12 bottom-12 flex-col items-end gap-2 z-20">
          <div className="w-[2px] h-14 bg-gradient-to-b from-[#C9A35A] to-transparent"></div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 [writing-mode:vertical-rl] rotate-180">
            SCROLL TO EXPLORE
          </span>
        </div>
      </section>

      {/* 2. THREE / FOUR PILLARS SECTION (From Design Theme) */}
      <section className="px-4 sm:px-6 lg:px-8 py-14 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="group bg-[#121417] p-6 border-l-2 border-[#C9A35A]/40 hover:border-[#C9A35A] transition-all hover:bg-[#181B20] shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="text-[#C9A35A] text-xl font-bold font-heading mb-3 flex items-center justify-between">
                  <span>{pillar.number}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A35A]/50 group-hover:bg-[#C9A35A]"></span>
                </div>
                <h3 className="text-base font-bold uppercase tracking-tight text-white mb-2 font-heading">
                  {pillar.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. INTERACTIVE BEFORE & AFTER TRANSFORMATION SHOWCASE */}
      <section className="py-16 bg-[#121417] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-[#C9A35A] text-xs uppercase tracking-[0.25em] font-bold block mb-2">
                Proven Results
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase font-heading tracking-tight text-white">
                Real Showroom Transformations
              </h2>
            </div>
            <p className="text-xs text-gray-400 max-w-md">
              From heavy roof algae to swirled black paint and stained leather — inspect our precision on-site work below.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {TRANSFORMATION_GALLERY.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setSelectedCaseIdx(idx)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold border transition-all cursor-pointer ${
                  selectedCaseIdx === idx
                    ? 'border-[#C9A35A] bg-[#C9A35A] text-black shadow-[0_0_15px_rgba(201,163,90,0.3)]'
                    : 'border-white/10 bg-[#08090B] text-gray-400 hover:text-white hover:border-white/20'
                }`}
              >
                {item.vehicle}
              </button>
            ))}
          </div>

          {/* Interactive Split Comparison Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#08090B] border border-[#C9A35A]/30 p-6 sm:p-8 rounded-lg shadow-2xl">
            <div className="lg:col-span-7">
              <BeforeAfterSlider
                beforeImage={activeCase.beforeImage}
                afterImage={activeCase.afterImage}
                beforeLabel={activeCase.beforeLabel || 'Dirty Condition'}
                afterLabel={activeCase.afterLabel || 'Showroom Finish'}
              />
            </div>

            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-1.5 text-[10px] text-[#C9A35A] uppercase font-bold tracking-widest px-2.5 py-1 bg-[#121417] border border-[#C9A35A]/30">
                <Sparkles className="w-3.5 h-3.5" /> Verified Los Angeles Detail
              </div>

              <h3 className="text-xl font-bold font-heading uppercase text-white leading-snug">
                {activeCase.title}
              </h3>

              <p className="text-xs text-gray-400 leading-relaxed">
                {activeCase.summary}
              </p>

              <div className="space-y-2 border-t border-white/10 pt-4 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-500">Service:</span>
                  <span className="text-white font-medium">{activeCase.serviceCompleted}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Service Duration:</span>
                  <span className="text-[#C9A35A] font-semibold">{activeCase.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Location:</span>
                  <span className="text-white">Los Angeles, CA (Doorstep)</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking()}
                  className="w-full py-3 bg-[#C9A35A] hover:bg-[#E5C77A] text-black font-bold uppercase text-xs tracking-widest transition-all cursor-pointer"
                >
                  Book This Transformation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SIGNATURE SERVICES OVERVIEW */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#C9A35A] text-xs uppercase tracking-[0.25em] font-bold block mb-2">
            Automotive Menu
          </span>
          <h2 className="text-3xl font-extrabold uppercase font-heading tracking-tight text-white mb-4">
            Master Detailing Packages
          </h2>
          <p className="text-xs text-gray-400 leading-relaxed">
            All packages include self-contained mobile arrival at your Los Angeles doorstep with filtered spot-free water and professional bio-degradable formulas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DETAILED_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className={`relative bg-[#121417] border flex flex-col justify-between rounded-sm overflow-hidden transition-all duration-300 hover:translate-y-[-4px] ${
                srv.isPopular
                  ? 'border-[#C9A35A] shadow-[0_0_30px_rgba(201,163,90,0.15)]'
                  : 'border-white/10 hover:border-white/30'
              }`}
            >
              {srv.isPopular && (
                <div className="absolute top-0 right-0 bg-[#C9A35A] text-black font-extrabold uppercase text-[9px] tracking-widest px-3 py-1">
                  Most Popular
                </div>
              )}

              {/* Service Image Header */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={srv.image}
                  alt={srv.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121417] via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4">
                  <span className="text-[10px] text-gray-300 uppercase tracking-widest px-2 py-0.5 bg-black/70 backdrop-blur-sm border border-white/10">
                    {srv.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xl font-bold font-heading uppercase text-white mb-1">
                    {srv.title}
                  </div>
                  <p className="text-[11px] text-[#C9A35A] font-medium mb-3">
                    {srv.tagline}
                  </p>
                  <p className="text-xs text-gray-400 line-clamp-3 mb-4">
                    {srv.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-1.5 border-t border-white/5 pt-3">
                    {srv.interiorFeatures.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A35A] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                    {srv.exteriorFeatures.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-[11px] text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A35A] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase block">Starting at</span>
                    <span className="text-lg font-bold text-white font-heading">{srv.startingPrice}</span>
                  </div>
                  <button
                    onClick={() => onOpenBooking(srv.id)}
                    className="px-4 py-2 bg-[#C9A35A] hover:bg-[#E5C77A] text-black font-bold uppercase text-[10px] tracking-widest transition-all cursor-pointer"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => onSelectTab('services')}
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 hover:border-[#C9A35A] text-white hover:text-[#C9A35A] text-xs uppercase tracking-widest font-bold transition-all"
          >
            Explore Complete Service Checklist <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 5. DOORSTEP CONVENIENCE WORKFLOW */}
      <section className="py-16 bg-[#121417] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-[#C9A35A] text-xs uppercase tracking-[0.25em] font-bold block mb-2">
              Effortless Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase font-heading text-white">
              How Doorstep Detailing Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="bg-[#08090B] p-6 border border-white/10 rounded-sm relative">
              <div className="w-10 h-10 rounded-full bg-[#C9A35A]/10 border border-[#C9A35A] text-[#C9A35A] font-bold flex items-center justify-center mb-4 text-sm font-heading">
                01
              </div>
              <h3 className="text-base font-bold uppercase text-white mb-2 font-heading">
                Book Online or WhatsApp
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Choose your vehicle type, preferred package, date, and input your Los Angeles address in 60 seconds.
              </p>
            </div>

            <div className="bg-[#08090B] p-6 border border-white/10 rounded-sm relative">
              <div className="w-10 h-10 rounded-full bg-[#C9A35A]/10 border border-[#C9A35A] text-[#C9A35A] font-bold flex items-center justify-center mb-4 text-sm font-heading">
                02
              </div>
              <h3 className="text-base font-bold uppercase text-white mb-2 font-heading">
                We Arrive Fully Equipped
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Our mobile unit brings filtered water, electric generators, bio-degradable snow foam, and steam extraction tools.
              </p>
            </div>

            <div className="bg-[#08090B] p-6 border border-white/10 rounded-sm relative">
              <div className="w-10 h-10 rounded-full bg-[#C9A35A]/10 border border-[#C9A35A] text-[#C9A35A] font-bold flex items-center justify-center mb-4 text-sm font-heading">
                03
              </div>
              <h3 className="text-base font-bold uppercase text-white mb-2 font-heading">
                Inspect & Drive Showroom Ready
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                In just 1¼ to 1½ hours, perform a final walkthrough inspection to confirm 100% perfection before settling payment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VERIFIED CLIENT REVIEWS (SCREENSHOT TRANSCRIPT CARDS) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[#C9A35A] text-xs uppercase tracking-[0.25em] font-bold block mb-2">
              Authentic Feedback
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold uppercase font-heading text-white">
              What Los Angeles Drivers Say
            </h2>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-[#C9A35A]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#C9A35A]" />
            ))}
            <span className="text-white font-bold ml-1">5.0 Star Rated Experience</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLIENT_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#121417] border border-white/10 p-6 rounded-sm flex flex-col justify-between space-y-4 hover:border-[#C9A35A]/50 transition-all shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#C9A35A]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C9A35A]" />
                    ))}
                  </div>
                  {rev.isChatVerified && (
                    <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 bg-[#C9A35A]/10 border border-[#C9A35A]/40 text-[#C9A35A] font-bold">
                      Verified Chat
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-300 italic leading-relaxed">
                  "{rev.message}"
                </p>

                {rev.screenshotUrl && (
                  <div
                    onClick={() => setSelectedReviewImage(rev.screenshotUrl || null)}
                    className="relative group/shot cursor-pointer rounded overflow-hidden border border-white/10 mt-2 aspect-[4/3] bg-black"
                  >
                    <img
                      src={rev.screenshotUrl}
                      alt={`Review verification for ${rev.author}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover/shot:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/shot:opacity-100 transition-opacity flex items-center justify-center text-[10px] text-[#C9A35A] font-bold uppercase tracking-wider gap-1">
                      <Sparkles className="w-3 h-3" /> View Chat Proof
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t border-white/10 pt-3 flex items-center justify-between text-[11px]">
                <div>
                  <div className="font-bold text-white font-heading">{rev.author}</div>
                  <div className="text-gray-500">{rev.vehicle}</div>
                </div>
                <div className="text-right text-[10px] text-gray-400">
                  {rev.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Screenshot Lightbox Modal */}
        {selectedReviewImage && (
          <div
            onClick={() => setSelectedReviewImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-xl w-full bg-[#121417] border border-[#C9A35A]/50 p-4 rounded shadow-2xl"
            >
              <button
                onClick={() => setSelectedReviewImage(null)}
                className="absolute top-2 right-2 text-gray-400 hover:text-white px-3 py-1 bg-black/70 rounded text-xs font-bold"
              >
                ✕ Close
              </button>
              <div className="text-xs text-[#C9A35A] font-bold uppercase tracking-wider mb-2 font-heading">
                Verified Client Confirmation Proof
              </div>
              <img
                src={selectedReviewImage}
                alt="Client verification proof screenshot"
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[75vh] object-contain rounded bg-black"
              />
            </div>
          </div>
        )}
      </section>

      {/* 7. URGENT BOOKING CALLOUT BANNER */}
      <section className="py-14 bg-gradient-to-r from-[#08090B] via-[#121417] to-[#08090B] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-[#C9A35A] text-xs uppercase tracking-[0.3em] font-bold block">
            Immediate Availability
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase font-heading text-white max-w-2xl mx-auto leading-tight">
            Bring The Showroom Finish Directly to Your Driveway Today.
          </h2>
          <p className="text-xs text-gray-400 max-w-md mx-auto">
            Book online in 60 seconds or reach us directly via WhatsApp for same-day dispatch inquiries.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-4 bg-[#C9A35A] hover:bg-[#E5C77A] text-black font-bold uppercase text-xs tracking-widest transition-all shadow-[0_0_25px_rgba(201,163,90,0.35)]"
            >
              Book Doorstep Appointment
            </button>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-black font-bold uppercase text-xs tracking-widest transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp Dispatch (440-726-4593)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
