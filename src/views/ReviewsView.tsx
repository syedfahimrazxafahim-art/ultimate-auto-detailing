import React, { useState } from 'react';
import { CLIENT_REVIEWS, BUSINESS_INFO } from '../data/mockData';
import { Star, CheckCircle, MessageSquare, Plus, X, ThumbsUp, Sparkles } from 'lucide-react';

interface ReviewsViewProps {
  onOpenBooking: () => void;
}

export const ReviewsView: React.FC<ReviewsViewProps> = ({ onOpenBooking }) => {
  const [reviewsList, setReviewsList] = useState(CLIENT_REVIEWS);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedReviewImage, setSelectedReviewImage] = useState<string | null>(null);
  const [newAuthor, setNewAuthor] = useState('');
  const [newVehicle, setNewVehicle] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newMessage, setNewMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor || !newMessage) return;

    const newRev = {
      id: `rev-${Date.now()}`,
      author: newAuthor,
      location: 'Los Angeles, CA',
      vehicle: newVehicle || 'Personal Vehicle',
      rating: newRating,
      message: newMessage,
      service: 'Ultimate Mobile Doorstep Package',
      date: 'Just now',
      verified: true,
      isChatVerified: false,
    };

    setReviewsList([newRev, ...reviewsList]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setModalOpen(false);
      setNewAuthor('');
      setNewVehicle('');
      setNewMessage('');
    }, 1500);
  };

  return (
    <div className="w-full bg-[#08090B] text-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[#C9A35A] text-xs uppercase tracking-[0.25em] font-bold block mb-2">
            Client Testimonials
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase font-heading tracking-tight text-white mb-4">
            Verified Client Reviews
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            Read direct follow-up text messages and feedback from actual car owners across Los Angeles.
          </p>
        </div>

        {/* Rating Breakdown Banner */}
        <div className="bg-[#121417] border border-white/10 p-6 sm:p-8 rounded-sm grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="text-center md:text-left">
            <div className="text-4xl font-extrabold font-heading text-[#C9A35A]">5.0 / 5.0</div>
            <div className="flex items-center justify-center md:justify-start gap-1 text-[#C9A35A] my-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C9A35A]" />
              ))}
            </div>
            <p className="text-xs text-gray-400">100% Satisfaction Rate in Los Angeles</p>
          </div>

          <div className="space-y-1 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <span className="w-16">Punctuality:</span>
              <div className="flex-1 bg-black h-2 rounded-full overflow-hidden">
                <div className="bg-[#C9A35A] h-full w-[100%]"></div>
              </div>
              <span className="text-white font-semibold">100%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-16">Attention:</span>
              <div className="flex-1 bg-black h-2 rounded-full overflow-hidden">
                <div className="bg-[#C9A35A] h-full w-[100%]"></div>
              </div>
              <span className="text-white font-semibold">100%</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-16">Shine Finish:</span>
              <div className="flex-1 bg-black h-2 rounded-full overflow-hidden">
                <div className="bg-[#C9A35A] h-full w-[100%]"></div>
              </div>
              <span className="text-white font-semibold">100%</span>
            </div>
          </div>

          <div className="text-center md:text-right">
            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-3 border border-[#C9A35A] text-[#C9A35A] hover:bg-[#C9A35A] hover:text-black font-bold uppercase text-xs tracking-widest transition-all inline-flex items-center gap-2"
            >
              <Plus className="w-4 h-4" /> Leave a Review
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviewsList.map((rev) => (
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
                    <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 bg-[#25D366]/10 border border-[#25D366]/40 text-[#25D366] font-bold flex items-center gap-1">
                      <MessageSquare className="w-2.5 h-2.5" /> SMS Verified
                    </span>
                  )}
                </div>

                <p className="text-xs text-gray-300 italic leading-relaxed">
                  "{rev.message}"
                </p>

                {rev.screenshotUrl && (
                  <div
                    onClick={() => setSelectedReviewImage(rev.screenshotUrl || null)}
                    className="relative group/shot cursor-pointer rounded overflow-hidden border border-white/10 mt-3 aspect-[4/3] bg-black"
                  >
                    <img
                      src={rev.screenshotUrl}
                      alt={`Review verification for ${rev.author}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover/shot:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/shot:opacity-100 transition-opacity flex items-center justify-center text-[10px] text-[#C9A35A] font-bold uppercase tracking-wider gap-1">
                      <Sparkles className="w-3 h-3" /> View Chat Confirmation Proof
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t border-white/10 pt-3 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-white font-heading">{rev.author}</div>
                  <div className="text-[10px] text-gray-500">{rev.vehicle}</div>
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

        {/* Modal to leave a review */}
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
            <div className="bg-[#08090B] border border-[#C9A35A]/40 p-6 rounded max-w-md w-full relative">
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-lg font-bold uppercase font-heading text-white mb-1">
                Share Your Detailing Experience
              </h3>
              <p className="text-xs text-gray-400 mb-4">
                Let fellow car owners in Los Angeles know about your service.
              </p>

              {submitted ? (
                <div className="py-8 text-center text-[#C9A35A] space-y-2">
                  <CheckCircle className="w-10 h-10 mx-auto" />
                  <div className="font-bold text-sm text-white">Thank You for Your Feedback!</div>
                </div>
              ) : (
                <form onSubmit={handleAddReview} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-gray-300 font-bold mb-1">Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g. David S."
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      className="w-full px-3 py-2 bg-[#121417] border border-white/15 rounded text-white focus:outline-none focus:border-[#C9A35A]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-bold mb-1">Vehicle (Make/Model)</label>
                    <input
                      type="text"
                      placeholder="e.g. Porsche 911 / BMW X5"
                      value={newVehicle}
                      onChange={(e) => setNewVehicle(e.target.value)}
                      className="w-full px-3 py-2 bg-[#121417] border border-white/15 rounded text-white focus:outline-none focus:border-[#C9A35A]"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-bold mb-1">Rating</label>
                    <div className="flex gap-2">
                      {[5, 4, 3, 2, 1].map((r) => (
                        <button
                          key={r}
                          type="button"
                          onClick={() => setNewRating(r)}
                          className={`px-3 py-1.5 border rounded text-xs font-bold ${
                            newRating === r
                              ? 'border-[#C9A35A] bg-[#C9A35A] text-black'
                              : 'border-white/15 text-gray-400'
                          }`}
                        >
                          {r} ★
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 font-bold mb-1">Review Comments</label>
                    <textarea
                      rows={3}
                      placeholder="How was the shine, cleanliness, and mobile technician?"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="w-full px-3 py-2 bg-[#121417] border border-white/15 rounded text-white focus:outline-none focus:border-[#C9A35A]"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#C9A35A] text-black font-bold uppercase text-xs tracking-widest hover:bg-[#E5C77A] transition-all"
                  >
                    Post Review
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
