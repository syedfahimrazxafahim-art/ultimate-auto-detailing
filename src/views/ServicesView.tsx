import React, { useState } from 'react';
import { DETAILED_SERVICES, SERVICE_ADDONS, BUSINESS_INFO } from '../data/mockData';
import { VehicleCategory } from '../types';
import {
  Check,
  Clock,
  Car,
  Shield,
  Sparkles,
  ChevronRight,
  Droplet,
  Layers,
  Zap,
} from 'lucide-react';

interface ServicesViewProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedVehicleType, setSelectedVehicleType] = useState<VehicleCategory>('sedan');

  const filteredServices =
    selectedCategory === 'all'
      ? DETAILED_SERVICES
      : DETAILED_SERVICES.filter((s) => s.category === selectedCategory);

  const vehicleMultiplier = {
    sedan: { label: 'Coupe / Sedan', factor: 1, text: 'Standard Compact / Mid-size' },
    suv: { label: 'SUV / Crossover', factor: 1.15, text: 'Mid-size to 3-Row SUVs' },
    truck: { label: 'Truck / Van', factor: 1.25, text: 'Full-Size Pickups & Commercial Vans' },
    rv: { label: 'RV / Motorhome', factor: 1.8, text: 'Class A/C RVs & Campers' },
  };

  return (
    <div className="w-full bg-[#08090B] text-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#C9A35A] text-xs uppercase tracking-[0.25em] font-bold block mb-2">
            Showroom Precision In Los Angeles
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase font-heading tracking-tight text-white mb-4">
            Automotive Detailing Services
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-xl mx-auto">
            Doorstep mobile detailing performed with deionized spot-free water, pH-neutral snow foam, and high-temp steam sanitation.
          </p>
        </div>

        {/* Vehicle Size Sizer */}
        <div className="bg-[#121417] border border-white/10 p-6 rounded-sm mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white font-heading">
                Step 1: Select Your Vehicle Profile
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">
                Pricing scales proportionally based on vehicle square footage and cabin volume.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full md:w-auto">
              {(Object.keys(vehicleMultiplier) as VehicleCategory[]).map((vKey) => (
                <button
                  key={vKey}
                  onClick={() => setSelectedVehicleType(vKey)}
                  className={`px-4 py-2.5 text-left border rounded transition-all cursor-pointer ${
                    selectedVehicleType === vKey
                      ? 'border-[#C9A35A] bg-[#C9A35A]/15 text-white shadow-[0_0_15px_rgba(201,163,90,0.2)]'
                      : 'border-white/10 bg-[#08090B] text-gray-400 hover:border-white/20'
                  }`}
                >
                  <div className="font-bold text-xs">{vehicleMultiplier[vKey].label}</div>
                  <div className="text-[10px] text-gray-500">{vehicleMultiplier[vKey].text}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {[
            { id: 'all', label: 'All Detailing Packages' },
            { id: 'full', label: 'Complete Mobile Doorstep' },
            { id: 'interior', label: 'Interior Restorations' },
            { id: 'exterior', label: 'Exterior Foam & Polish' },
            { id: 'specialty', label: 'RV & Oversized Rigs' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 text-xs uppercase tracking-wider font-semibold border transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'border-[#C9A35A] bg-[#C9A35A] text-black shadow-[0_0_15px_rgba(201,163,90,0.3)]'
                  : 'border-white/10 bg-[#121417] text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services List with Detailed Checklists */}
        <div className="space-y-12">
          {filteredServices.map((srv) => (
            <div
              key={srv.id}
              className={`bg-[#121417] border rounded-sm overflow-hidden p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 shadow-xl ${
                srv.isPopular ? 'border-[#C9A35A]/60 shadow-[0_0_30px_rgba(201,163,90,0.1)]' : 'border-white/10'
              }`}
            >
              {/* Left Column: Image & Overview */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="relative aspect-video rounded overflow-hidden border border-white/10">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-[#08090B]/85 backdrop-blur-md px-2.5 py-1 text-[10px] uppercase tracking-widest text-[#C9A35A] font-bold border border-[#C9A35A]/40">
                      Duration: {srv.duration}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold font-heading uppercase text-white">
                      {srv.title}
                    </h2>
                    <p className="text-xs text-[#C9A35A] font-medium mt-1">
                      {srv.tagline}
                    </p>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between mt-6">
                  <div>
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider block">
                      Estimated For {vehicleMultiplier[selectedVehicleType].label}
                    </span>
                    <span className="text-2xl font-extrabold text-white font-heading">
                      {srv.startingPrice}
                    </span>
                  </div>
                  <button
                    onClick={() => onOpenBooking(srv.id)}
                    className="px-6 py-3 bg-[#C9A35A] hover:bg-[#E5C77A] text-black font-bold uppercase text-xs tracking-widest transition-all shadow-[0_0_15px_rgba(201,163,90,0.3)] cursor-pointer"
                  >
                    Book This Service
                  </button>
                </div>
              </div>

              {/* Right Column: Full Two-Column Checklist */}
              <div className="lg:col-span-7 bg-[#08090B] p-6 border border-white/5 rounded-sm flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A35A] mb-4 font-heading border-b border-white/5 pb-2">
                    Included Detailing Protocol
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Interior specs */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-[#C9A35A] rounded-full"></span> Interior Precision
                      </h4>
                      <ul className="space-y-2 text-[11px] text-gray-300">
                        {srv.interiorFeatures.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#C9A35A] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Exterior specs */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-[#C9A35A] rounded-full"></span> Exterior Showroom Care
                      </h4>
                      <ul className="space-y-2 text-[11px] text-gray-300">
                        {srv.exteriorFeatures.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#C9A35A] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-[#121417] border border-white/10 rounded flex items-center justify-between text-xs text-gray-400">
                  <span className="text-[11px]">
                    <strong className="text-white">Recommended For:</strong> {srv.recommendedFor}
                  </span>
                  <span className="text-[#C9A35A] text-[11px] font-semibold flex items-center gap-1 shrink-0 ml-2">
                    <Shield className="w-3.5 h-3.5" /> 100% Guaranteed
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Precision Add-ons Section */}
        <div className="mt-20 border-t border-white/10 pt-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[#C9A35A] text-xs uppercase tracking-[0.25em] font-bold block mb-1">
              Custom Enhancements
            </span>
            <h3 className="text-2xl font-bold uppercase font-heading text-white">
              Precision Add-on Treatments
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICE_ADDONS.map((addon) => (
              <div
                key={addon.id}
                className="bg-[#121417] border border-white/10 p-5 rounded-sm flex flex-col justify-between hover:border-[#C9A35A]/50 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-white font-heading">{addon.name}</span>
                    <span className="text-[#C9A35A] font-bold text-xs">{addon.price}</span>
                  </div>
                  <p className="text-[10px] text-gray-500">Service addition ({addon.time})</p>
                </div>
                <button
                  onClick={() => onOpenBooking()}
                  className="mt-4 w-full py-1.5 border border-white/15 hover:border-[#C9A35A] hover:text-[#C9A35A] text-[10px] uppercase font-bold tracking-wider text-gray-300 transition-all"
                >
                  Add To Booking
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
