import React, { useState } from 'react';
import { DETAILED_SERVICES, SERVICE_ADDONS, BUSINESS_INFO } from '../data/mockData';
import { VehicleCategory } from '../types';
import { X, CheckCircle, Calendar, Clock, MapPin, Car, Shield, MessageSquare, Phone, ArrowRight, Sparkles } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId = 'full-mobile-signature',
}) => {
  const [step, setStep] = useState(1);
  const [vehicleCategory, setVehicleCategory] = useState<VehicleCategory>('sedan');
  const [vehicleDetails, setVehicleDetails] = useState('');
  const [selectedServiceId, setSelectedServiceId] = useState(initialServiceId);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [serviceDate, setServiceDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('09:00 AM');
  const [serviceAddress, setServiceAddress] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const currentService =
    DETAILED_SERVICES.find((s) => s.id === selectedServiceId) || DETAILED_SERVICES[0];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleWhatsAppBooking = () => {
    const addonNames = selectedAddons
      .map((id) => SERVICE_ADDONS.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(', ');

    const message = `*NEW BOOKING REQUEST - ULTIMATE AUTO DETAILING*
━━━━━━━━━━━━━━━━━━━━━━━━━
• *Client Name:* ${customerName || 'Valued Client'}
• *Phone:* ${customerPhone || 'Not provided'}
• *Email:* ${customerEmail || 'Not provided'}
• *Location:* ${serviceAddress || 'Los Angeles, CA'}
• *Vehicle:* ${vehicleCategory.toUpperCase()} - ${vehicleDetails || 'Standard'}
• *Service Package:* ${currentService.title} (${currentService.duration})
• *Add-ons:* ${addonNames || 'None'}
• *Preferred Date & Time:* ${serviceDate || 'Earliest available'} at ${preferredTime}
• *Special Notes:* ${notes || 'Standard mobile detailing'}
━━━━━━━━━━━━━━━━━━━━━━━━━
Please confirm my appointment slot!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/14407264593?text=${encoded}`, '_blank');
    setIsSubmitted(true);
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#08090B] border border-[#C9A35A]/40 rounded-lg shadow-[0_0_50px_rgba(201,163,90,0.15)] overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 bg-[#121417] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-sm bg-[#C9A35A]/20 border border-[#C9A35A] flex items-center justify-center text-[#C9A35A]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-white text-base font-bold uppercase tracking-wider font-heading">
                Book Mobile Detailing
              </h3>
              <p className="text-[11px] text-gray-400">
                Doorstep Service in Los Angeles • Duration: {currentService.duration}
              </p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="text-gray-400 hover:text-white p-1 rounded-sm hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-xs">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-[#C9A35A]/20 border-2 border-[#C9A35A] text-[#C9A35A] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(201,163,90,0.4)]">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-white text-xl font-bold font-heading uppercase tracking-wide">
                Booking Request Sent!
              </h3>
              <p className="text-gray-300 max-w-md mx-auto text-xs leading-relaxed">
                Thank you, <span className="text-[#C9A35A] font-semibold">{customerName || 'Valued Client'}</span>. Our mobile technician team in Los Angeles has received your detailing request for your <span className="text-white font-medium">{vehicleDetails || vehicleCategory}</span>.
              </p>
              <div className="p-4 bg-[#121417] border border-white/10 rounded max-w-md mx-auto text-left space-y-2 text-gray-400">
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span>Selected Package:</span>
                  <span className="text-white font-medium">{currentService.title}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span>Estimated Time:</span>
                  <span className="text-[#C9A35A] font-medium">{currentService.duration}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span>Service Date & Time:</span>
                  <span className="text-white">{serviceDate || 'Scheduled'} at {preferredTime}</span>
                </div>
                <div className="flex justify-between">
                  <span>Location:</span>
                  <span className="text-white truncate max-w-[200px]">{serviceAddress || 'Los Angeles, CA'}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleWhatsAppBooking}
                  className="w-full sm:w-auto px-6 py-3 bg-[#C9A35A] text-black font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:bg-[#E5C77A] transition-all"
                >
                  <MessageSquare className="w-4 h-4" /> Open in WhatsApp
                </button>
                <button
                  onClick={resetAndClose}
                  className="w-full sm:w-auto px-6 py-3 border border-white/20 text-white font-bold uppercase text-xs tracking-widest hover:bg-white/5 transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmitBooking} className="space-y-6">
              {/* Step indicator */}
              <div className="grid grid-cols-3 gap-2 border-b border-white/10 pb-4">
                <div
                  className={`text-center py-1.5 border-b-2 font-bold tracking-wider uppercase text-[10px] ${
                    step >= 1 ? 'border-[#C9A35A] text-[#C9A35A]' : 'border-transparent text-gray-500'
                  }`}
                >
                  1. Vehicle & Service
                </div>
                <div
                  className={`text-center py-1.5 border-b-2 font-bold tracking-wider uppercase text-[10px] ${
                    step >= 2 ? 'border-[#C9A35A] text-[#C9A35A]' : 'border-transparent text-gray-500'
                  }`}
                >
                  2. Schedule & Place
                </div>
                <div
                  className={`text-center py-1.5 border-b-2 font-bold tracking-wider uppercase text-[10px] ${
                    step >= 3 ? 'border-[#C9A35A] text-[#C9A35A]' : 'border-transparent text-gray-500'
                  }`}
                >
                  3. Contact Details
                </div>
              </div>

              {/* Step 1: Vehicle & Service */}
              {step === 1 && (
                <div className="space-y-5 animate-in fade-in">
                  <div>
                    <label className="block text-gray-300 font-bold uppercase tracking-wider mb-2 text-[11px]">
                      Select Vehicle Type
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'sedan', label: 'Coupe / Sedan', desc: 'Standard Size' },
                        { id: 'suv', label: 'SUV / Crossover', desc: 'Mid to Full Size' },
                        { id: 'truck', label: 'Truck / Van', desc: 'Pickup / Work Van' },
                        { id: 'rv', label: 'RV / Motorhome', desc: 'Class A/C & Campers' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setVehicleCategory(item.id as VehicleCategory)}
                          className={`p-3 text-left border rounded transition-all cursor-pointer ${
                            vehicleCategory === item.id
                              ? 'border-[#C9A35A] bg-[#C9A35A]/10 text-white shadow-[0_0_12px_rgba(201,163,90,0.2)]'
                              : 'border-white/10 bg-[#121417] text-gray-400 hover:border-white/20'
                          }`}
                        >
                          <div className="font-bold text-xs">{item.label}</div>
                          <div className="text-[10px] text-gray-500">{item.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 font-bold uppercase tracking-wider mb-1 text-[11px]">
                      Vehicle Make, Model & Year
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., 2023 Tesla Model Y / Mercedes S580 / RAM 1500"
                      value={vehicleDetails}
                      onChange={(e) => setVehicleDetails(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#121417] border border-white/15 rounded text-white text-xs placeholder:text-gray-600 focus:outline-none focus:border-[#C9A35A]"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-bold uppercase tracking-wider mb-2 text-[11px]">
                      Select Detailing Package
                    </label>
                    <div className="space-y-2">
                      {DETAILED_SERVICES.map((srv) => (
                        <div
                          key={srv.id}
                          onClick={() => setSelectedServiceId(srv.id)}
                          className={`p-3.5 border rounded flex items-center justify-between cursor-pointer transition-all ${
                            selectedServiceId === srv.id
                              ? 'border-[#C9A35A] bg-[#121417] text-white shadow-[0_0_15px_rgba(201,163,90,0.15)]'
                              : 'border-white/10 bg-[#08090B] text-gray-400 hover:border-white/20'
                          }`}
                        >
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-xs text-white">{srv.title}</span>
                              {srv.isPopular && (
                                <span className="bg-[#C9A35A] text-black text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-xs">
                                  Popular
                                </span>
                              )}
                            </div>
                            <p className="text-[10px] text-gray-500 mt-0.5">{srv.tagline}</p>
                          </div>
                          <div className="text-right shrink-0">
                            <div className="text-[#C9A35A] font-bold text-xs">{srv.startingPrice}+</div>
                            <div className="text-[9px] text-gray-500">{srv.duration}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 font-bold uppercase tracking-wider mb-2 text-[11px]">
                      Optional Precision Add-ons
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {SERVICE_ADDONS.map((addon) => {
                        const isSelected = selectedAddons.includes(addon.id);
                        return (
                          <div
                            key={addon.id}
                            onClick={() => toggleAddon(addon.id)}
                            className={`p-2.5 border rounded flex items-center justify-between cursor-pointer text-[11px] ${
                              isSelected
                                ? 'border-[#C9A35A] bg-[#C9A35A]/10 text-white'
                                : 'border-white/10 bg-[#121417] text-gray-400'
                            }`}
                          >
                            <span className="truncate">{addon.name}</span>
                            <span className="text-[#C9A35A] font-semibold">{addon.price}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Schedule & Place */}
              {step === 2 && (
                <div className="space-y-4 animate-in fade-in">
                  <div>
                    <label className="block text-gray-300 font-bold uppercase tracking-wider mb-1 text-[11px]">
                      Doorstep Service Address in Los Angeles
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-[#C9A35A] absolute left-3 top-3" />
                      <input
                        type="text"
                        placeholder="Street Address, City (e.g. 1234 Wilshire Blvd, Los Angeles, CA 90017)"
                        value={serviceAddress}
                        onChange={(e) => setServiceAddress(e.target.value)}
                        className="w-full pl-9 pr-3 py-2.5 bg-[#121417] border border-white/15 rounded text-white text-xs placeholder:text-gray-600 focus:outline-none focus:border-[#C9A35A]"
                        required
                      />
                    </div>
                    <p className="text-[10px] text-gray-500 mt-1">
                      Our fully equipped mobile detailing van brings power and deionized spot-free water right to your driveway or parking space.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-gray-300 font-bold uppercase tracking-wider mb-1 text-[11px]">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={serviceDate}
                        onChange={(e) => setServiceDate(e.target.value)}
                        className="w-full px-3 py-2.5 bg-[#121417] border border-white/15 rounded text-white text-xs focus:outline-none focus:border-[#C9A35A]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 font-bold uppercase tracking-wider mb-1 text-[11px]">
                        Preferred Arrival Window
                      </label>
                      <select
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full px-3 py-2.5 bg-[#121417] border border-white/15 rounded text-white text-xs focus:outline-none focus:border-[#C9A35A]"
                      >
                        <option value="08:00 AM - 10:00 AM">Morning: 8:00 AM – 10:00 AM</option>
                        <option value="10:00 AM - 12:00 PM">Late Morning: 10:00 AM – 12:00 PM</option>
                        <option value="01:00 PM - 03:00 PM">Afternoon: 1:00 PM – 3:00 PM</option>
                        <option value="03:00 PM - 05:00 PM">Late Afternoon: 3:00 PM – 5:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-3.5 bg-[#121417] border border-[#C9A35A]/30 rounded flex items-center gap-3 text-gray-300">
                    <Shield className="w-5 h-5 text-[#C9A35A] shrink-0" />
                    <p className="text-[11px] leading-relaxed">
                      Zero travel surcharge across Los Angeles. Standard appointments run <strong className="text-white">1¼ to 1½ hours</strong> on site.
                    </p>
                  </div>
                </div>
              )}

              {/* Step 3: Contact & Submit */}
              {step === 3 && (
                <div className="space-y-4 animate-in fade-in">
                  <div>
                    <label className="block text-gray-300 font-bold uppercase tracking-wider mb-1 text-[11px]">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Michael Vance"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full px-3 py-2.5 bg-[#121417] border border-white/15 rounded text-white text-xs placeholder:text-gray-600 focus:outline-none focus:border-[#C9A35A]"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-gray-300 font-bold uppercase tracking-wider mb-1 text-[11px]">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. (440) 726-4593"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        className="w-full px-3 py-2.5 bg-[#121417] border border-white/15 rounded text-white text-xs placeholder:text-gray-600 focus:outline-none focus:border-[#C9A35A]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 font-bold uppercase tracking-wider mb-1 text-[11px]">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. client@example.com"
                        value={customerEmail}
                        onChange={(e) => setCustomerEmail(e.target.value)}
                        className="w-full px-3 py-2.5 bg-[#121417] border border-white/15 rounded text-white text-xs placeholder:text-gray-600 focus:outline-none focus:border-[#C9A35A]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 font-bold uppercase tracking-wider mb-1 text-[11px]">
                      Special Vehicle Notes or Access Instructions
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Gate code, pet hair in back seat, water hookup available in driveway..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-3 py-2 bg-[#121417] border border-white/15 rounded text-white text-xs placeholder:text-gray-600 focus:outline-none focus:border-[#C9A35A]"
                    ></textarea>
                  </div>

                  {/* Summary recap */}
                  <div className="p-3 bg-[#121417] border border-white/10 rounded space-y-1.5 text-gray-400">
                    <div className="flex justify-between">
                      <span>Package:</span>
                      <span className="text-white font-medium">{currentService.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Service Duration:</span>
                      <span className="text-[#C9A35A] font-medium">{currentService.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Payment:</span>
                      <span className="text-gray-300">Pay on-site after your satisfaction inspection</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="pt-2 flex items-center justify-between gap-3 border-t border-white/10">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-5 py-2.5 border border-white/20 text-white font-semibold uppercase text-[11px] tracking-wider hover:bg-white/5"
                  >
                    Back
                  </button>
                ) : (
                  <div></div>
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="px-6 py-2.5 bg-[#C9A35A] hover:bg-[#E5C77A] text-black font-bold uppercase text-[11px] tracking-widest flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(201,163,90,0.3)]"
                  >
                    Next Step <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleWhatsAppBooking}
                      className="px-4 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold uppercase text-[11px] tracking-wider flex items-center gap-1.5 transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5" /> Fast WhatsApp
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-[#C9A35A] hover:bg-[#E5C77A] text-black font-bold uppercase text-[11px] tracking-widest shadow-[0_0_20px_rgba(201,163,90,0.4)]"
                    >
                      Confirm Booking
                    </button>
                  </div>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
