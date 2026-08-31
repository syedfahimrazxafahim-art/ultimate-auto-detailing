import React, { useState } from 'react';
import { TRANSFORMATION_GALLERY } from '../data/mockData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { Sparkles, CheckCircle2, Clock, Car, Calendar } from 'lucide-react';

interface GalleryViewProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredItems =
    activeCategory === 'all'
      ? TRANSFORMATION_GALLERY
      : TRANSFORMATION_GALLERY.filter((item) => item.category === activeCategory);

  return (
    <div className="w-full bg-[#08090B] text-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gallery Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#C9A35A] text-xs uppercase tracking-[0.25em] font-bold block mb-2">
            The Proof of Quality
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase font-heading tracking-tight text-white mb-4">
            Before & After Gallery
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            Drag each interactive slider to see the dramatic difference our mobile detailing team delivers on real client vehicles across Los Angeles.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {[
            { id: 'all', label: 'All Transformations' },
            { id: 'exterior', label: 'Exterior Paint & Trucks' },
            { id: 'suv', label: 'Luxury SUVs & Foam' },
            { id: 'interior', label: 'Leather & Cabin Restore' },
            { id: 'rv', label: 'RVs & Motorhome Roofs' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-5 py-2 text-xs uppercase tracking-wider font-semibold border transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? 'border-[#C9A35A] bg-[#C9A35A] text-black shadow-[0_0_15px_rgba(201,163,90,0.3)]'
                  : 'border-white/10 bg-[#121417] text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid of Interactive Before/After Sliders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#121417] border border-white/10 p-6 rounded-sm shadow-xl flex flex-col justify-between space-y-5 hover:border-[#C9A35A]/50 transition-all"
            >
              <div>
                <BeforeAfterSlider
                  beforeImage={item.beforeImage}
                  afterImage={item.afterImage}
                  beforeLabel={item.beforeLabel || 'Before'}
                  afterLabel={item.afterLabel || 'Showroom Finish'}
                  title={item.title}
                  subtitle={`Vehicle: ${item.vehicle}`}
                />

                <p className="text-xs text-gray-400 mt-4 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-gray-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A35A]" />
                    <span className="font-semibold">{item.serviceCompleted}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500 text-[11px]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Time to Complete: {item.duration}</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking()}
                  className="px-5 py-2.5 bg-[#C9A35A] hover:bg-[#E5C77A] text-black font-bold uppercase text-[11px] tracking-wider transition-all cursor-pointer self-start sm:self-auto"
                >
                  Book This Detail
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-[#121417] border border-[#C9A35A]/30 p-8 rounded-sm text-center max-w-3xl mx-auto space-y-4">
          <div className="w-10 h-10 rounded-full bg-[#C9A35A]/10 border border-[#C9A35A] text-[#C9A35A] flex items-center justify-center mx-auto">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold uppercase font-heading text-white">
            Have a Vehicle Needing a Complete Revival?
          </h3>
          <p className="text-xs text-gray-400 max-w-md mx-auto">
            Whether dealing with severe oxidation, pet hair, spilled coffee, or weather damage, our mobile team brings complete restoration directly to you.
          </p>
          <button
            onClick={() => onOpenBooking()}
            className="px-8 py-3.5 bg-[#C9A35A] text-black font-bold uppercase text-xs tracking-widest hover:bg-[#E5C77A] transition-all shadow-[0_0_20px_rgba(201,163,90,0.3)] cursor-pointer"
          >
            Schedule Doorstep Detailing
          </button>
        </div>
      </div>
    </div>
  );
};
