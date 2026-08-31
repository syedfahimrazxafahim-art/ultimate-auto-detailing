import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/mockData';
import { Phone, Mail, MessageSquare, MapPin, Clock, Send, CheckCircle, ShieldCheck } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(
      `*DIRECT INQUIRY - ULTIMATE AUTO DETAILING*\n• Name: ${name}\n• Contact: ${contact}\n• Vehicle: ${vehicle}\n• Inquiry: ${message}`
    );
    window.open(`https://wa.me/14407264593?text=${encoded}`, '_blank');
    setSent(true);
  };

  return (
    <div className="w-full bg-[#08090B] text-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[#C9A35A] text-xs uppercase tracking-[0.25em] font-bold block mb-2">
            Direct Dispatch
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase font-heading tracking-tight text-white mb-4">
            Contact & Service Booking
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            Get in touch directly with our detailing technicians for quick estimates, fleet quotes, or custom service scheduling across Los Angeles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Direct Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#121417] border border-white/10 p-6 sm:p-8 rounded-sm space-y-6">
              <h2 className="text-lg font-bold uppercase font-heading text-white border-l-2 border-[#C9A35A] pl-3">
                Business Information
              </h2>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#C9A35A] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-gray-400">Direct Phone:</div>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="text-white font-bold hover:text-[#C9A35A]">
                      {BUSINESS_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-gray-400">WhatsApp Instant Dispatch:</div>
                    <a
                      href={BUSINESS_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] font-bold hover:underline"
                    >
                      Click to chat (440-726-4593)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#C9A35A] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-gray-400">Official Email:</div>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-white font-medium hover:text-[#C9A35A] break-all"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C9A35A] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-gray-400">Headquarters / Territory:</div>
                    <div className="text-white font-medium">{BUSINESS_INFO.location}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#C9A35A] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-gray-400">Hours of Operation:</div>
                    <div className="text-white font-medium">{BUSINESS_INFO.hours}</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#C9A35A]">
                <ShieldCheck className="w-4 h-4" />
                <span>Fully Licensed & Mobile Insured</span>
              </div>
            </div>
          </div>

          {/* Contact / Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#121417] border border-white/10 p-6 sm:p-8 rounded-sm">
              <h2 className="text-lg font-bold uppercase font-heading text-white mb-2">
                Send an Inquiry or Quote Request
              </h2>
              <p className="text-xs text-gray-400 mb-6">
                Fill out the form below for immediate mobile dispatch response.
              </p>

              {sent ? (
                <div className="py-12 text-center space-y-3 animate-in zoom-in-95">
                  <CheckCircle className="w-12 h-12 text-[#C9A35A] mx-auto" />
                  <h3 className="text-xl font-bold uppercase font-heading text-white">
                    Message Dispatched!
                  </h3>
                  <p className="text-xs text-gray-400 max-w-sm mx-auto">
                    We have received your message and opened WhatsApp for rapid coordination.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="px-6 py-2.5 bg-[#C9A35A] text-black font-bold uppercase text-xs tracking-wider mt-4"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 font-bold uppercase mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#08090B] border border-white/15 rounded text-white focus:outline-none focus:border-[#C9A35A]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 font-bold uppercase mb-1">
                        Phone or Email
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. (440) 726-4593 / user@email.com"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#08090B] border border-white/15 rounded text-white focus:outline-none focus:border-[#C9A35A]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 font-bold uppercase mb-1">
                      Vehicle Make / Model / Year
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 2022 BMW M4 / Lincoln Navigator / Fleetwood RV"
                      value={vehicle}
                      onChange={(e) => setVehicle(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#08090B] border border-white/15 rounded text-white focus:outline-none focus:border-[#C9A35A]"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-bold uppercase mb-1">
                      Detailing Needs / Questions
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe what services you are looking for (e.g. leather stain removal, swirl scratch buffing, RV roof moss wash, etc.)"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-[#08090B] border border-white/15 rounded text-white focus:outline-none focus:border-[#C9A35A]"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#C9A35A] hover:bg-[#E5C77A] text-black font-bold uppercase text-xs tracking-widest transition-all shadow-[0_0_20px_rgba(201,163,90,0.3)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" /> Send Request Now
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
