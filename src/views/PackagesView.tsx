import React, { useState } from 'react';
import { DETAILED_SERVICES, SERVICE_ADDONS, BUSINESS_INFO } from '../data/mockData';
import { VehicleCategory } from '../types';
import { Check, Clock, Sparkles, MessageSquare, Calendar, ShieldCheck, Car } from 'lucide-react';

interface PackagesViewProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const PackagesView: React.FC<PackagesViewProps> = ({ onOpenBooking }) => {
  const [calcVehicle, setCalcVehicle] = useState<VehicleCategory>('sedan');
  const [calcServiceId, setCalcServiceId] = useState('full-mobile-signature');
  const [calcAddons, setCalcAddons] = useState<string[]>([]);

  const basePrices: Record<string, Record<VehicleCategory, number>> = {
    'full-mobile-signature': { sedan: 149, suv: 179, truck: 199, rv: 349 },
    'interior-restoration': { sedan: 99, suv: 119, truck: 139, rv: 219 },
    'exterior-showroom-gloss': { sedan: 89, suv: 109, truck: 129, rv: 229 },
    'rv-heavy-duty': { sedan: 249, suv: 269, truck: 289, rv: 389 },
  };

  const addonPrices: Record<string, number> = {
    'engine-bay': 45,
    'pet-hair': 35,
    'headlight': 50,
    'leather-ceramic': 65,
  };

  const selectedBase = basePrices[calcServiceId]?.[calcVehicle] || 149;
  const addonsTotal = calcAddons.reduce((sum, id) => sum + (addonPrices[id] || 0), 0);
  const calculatedTotal = selectedBase + addonsTotal;

  const toggleCalcAddon = (id: string) => {
    setCalcAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleInstantWhatsAppEstimate = () => {
    const srv = DETAILED_SERVICES.find((s) => s.id === calcServiceId);
    const addonNames = calcAddons
      .map((id) => SERVICE_ADDONS.find((a) => a.id === id)?.name)
      .join(', ');

    const msg = `*INSTANT QUOTE INQUIRY - ULTIMATE AUTO DETAILING*
• *Vehicle Type:* ${calcVehicle.toUpperCase()}
• *Selected Package:* ${srv?.title}
• *Add-ons:* ${addonNames || 'None'}
• *Estimated Total:* ~$${calculatedTotal} (Los Angeles Mobile Service)

Hi, I would like to schedule an appointment based on this estimate!`;

    window.open(`https://wa.me/14407264593?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="w-full bg-[#08090B] text-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#C9A35A] text-xs uppercase tracking-[0.25em] font-bold block mb-2">
            Transparent Pricing
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase font-heading tracking-tight text-white mb-4">
            Packages & Instant Quote
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            All prices include self-contained mobile dispatch across Los Angeles with bio-degradable snow foam and zero hidden travel fees.
          </p>
        </div>

        {/* Pricing Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {DETAILED_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className={`bg-[#121417] border rounded-sm p-6 flex flex-col justify-between space-y-6 ${
                srv.isPopular
                  ? 'border-[#C9A35A] shadow-[0_0_30px_rgba(201,163,90,0.15)] relative'
                  : 'border-white/10'
              }`}
            >
              {srv.isPopular && (
                <div className="absolute top-0 right-0 bg-[#C9A35A] text-black text-[9px] font-extrabold uppercase tracking-widest px-3 py-1">
                  Popular Choice
                </div>
              )}

              <div>
                <div className="text-base font-bold font-heading uppercase text-white mb-1">
                  {srv.title}
                </div>
                <div className="text-[11px] text-[#C9A35A] font-medium mb-4">
                  {srv.tagline}
                </div>

                <div className="my-4 pb-4 border-b border-white/10">
                  <div className="text-3xl font-extrabold font-heading text-white">
                    {srv.startingPrice}
                    <span className="text-xs font-normal text-gray-400"> / starting</span>
                  </div>
                  <div className="text-[11px] text-gray-400 flex items-center gap-1.5 mt-1">
                    <Clock className="w-3.5 h-3.5 text-[#C9A35A]" />
                    <span>Duration: {srv.duration}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 text-xs text-gray-300">
                  {srv.interiorFeatures.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px]">
                      <Check className="w-3.5 h-3.5 text-[#C9A35A] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                  {srv.exteriorFeatures.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px]">
                      <Check className="w-3.5 h-3.5 text-[#C9A35A] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => onOpenBooking(srv.id)}
                  className="w-full py-3 bg-[#C9A35A] hover:bg-[#E5C77A] text-black font-bold uppercase text-xs tracking-widest transition-all shadow-[0_0_15px_rgba(201,163,90,0.3)] cursor-pointer"
                >
                  Book Package
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Instant Estimate Calculator */}
        <div className="bg-[#121417] border border-[#C9A35A]/40 p-6 sm:p-10 rounded-sm shadow-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded bg-[#C9A35A]/20 border border-[#C9A35A] flex items-center justify-center text-[#C9A35A]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold font-heading uppercase text-white">
                Interactive Detailing Cost Calculator
              </h2>
              <p className="text-xs text-gray-400">
                Configure your vehicle size and custom options to calculate your exact doorstep estimate.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Options Left */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  1. Select Vehicle Size
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'sedan', label: 'Coupe / Sedan' },
                    { id: 'suv', label: 'SUV / Crossover' },
                    { id: 'truck', label: 'Truck / Van' },
                    { id: 'rv', label: 'RV / Motorhome' },
                  ].map((v) => (
                    <button
                      key={v.id}
                      onClick={() => setCalcVehicle(v.id as VehicleCategory)}
                      className={`p-3 text-center border rounded transition-all cursor-pointer ${
                        calcVehicle === v.id
                          ? 'border-[#C9A35A] bg-[#C9A35A]/15 text-white font-bold'
                          : 'border-white/10 bg-[#08090B] text-gray-400'
                      }`}
                    >
                      <div className="text-xs">{v.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  2. Select Detailing Package
                </label>
                <div className="space-y-2">
                  {DETAILED_SERVICES.map((srv) => (
                    <div
                      key={srv.id}
                      onClick={() => setCalcServiceId(srv.id)}
                      className={`p-3.5 border rounded flex items-center justify-between cursor-pointer transition-all ${
                        calcServiceId === srv.id
                          ? 'border-[#C9A35A] bg-[#08090B] text-white shadow-[0_0_15px_rgba(201,163,90,0.15)]'
                          : 'border-white/10 bg-[#08090B]/60 text-gray-400'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white">{srv.title}</span>
                        <span className="text-[10px] text-gray-500">({srv.duration})</span>
                      </div>
                      <span className="text-[#C9A35A] font-bold text-xs">
                        ${basePrices[srv.id]?.[calcVehicle] || 149}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  3. Precision Add-on Options
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SERVICE_ADDONS.map((addon) => {
                    const isSelected = calcAddons.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleCalcAddon(addon.id)}
                        className={`p-3 border rounded flex items-center justify-between cursor-pointer text-xs ${
                          isSelected
                            ? 'border-[#C9A35A] bg-[#C9A35A]/10 text-white'
                            : 'border-white/10 bg-[#08090B] text-gray-400'
                        }`}
                      >
                        <span>{addon.name}</span>
                        <span className="text-[#C9A35A] font-bold">{addon.price}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Quote Summary Box */}
            <div className="lg:col-span-4 bg-[#08090B] border border-[#C9A35A]/30 p-6 rounded-sm flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[10px] text-[#C9A35A] uppercase tracking-[0.2em] font-bold block mb-1">
                  Estimated Pricing
                </span>
                <h3 className="text-xl font-bold font-heading uppercase text-white mb-4">
                  Quote Summary
                </h3>

                <div className="space-y-3 text-xs border-b border-white/10 pb-4 text-gray-400">
                  <div className="flex justify-between">
                    <span>Vehicle Class:</span>
                    <span className="text-white capitalize">{calcVehicle}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Package Base:</span>
                    <span className="text-white">${selectedBase}</span>
                  </div>
                  {calcAddons.length > 0 && (
                    <div className="flex justify-between">
                      <span>Add-ons ({calcAddons.length}):</span>
                      <span className="text-white">+${addonsTotal}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Doorstep Travel (LA):</span>
                    <span className="text-[#C9A35A] font-bold">FREE ($0.00)</span>
                  </div>
                </div>

                <div className="pt-4 flex items-baseline justify-between">
                  <span className="text-xs text-gray-400">Estimated Total:</span>
                  <div className="text-right">
                    <span className="text-3xl font-extrabold font-heading text-[#C9A35A]">
                      ${calculatedTotal}
                    </span>
                    <span className="text-[10px] text-gray-500 block">No pre-payment required</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5">
                <button
                  onClick={() => onOpenBooking(calcServiceId)}
                  className="w-full py-3.5 bg-[#C9A35A] hover:bg-[#E5C77A] text-black font-bold uppercase text-xs tracking-widest transition-all shadow-[0_0_20px_rgba(201,163,90,0.35)] cursor-pointer"
                >
                  Book With This Quote
                </button>
                <button
                  onClick={handleInstantWhatsAppEstimate}
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold uppercase text-xs tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" /> WhatsApp This Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
