import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingActions } from './components/FloatingActions';
import { HomeView } from './views/HomeView';
import { ServicesView } from './views/ServicesView';
import { GalleryView } from './views/GalleryView';
import { PackagesView } from './views/PackagesView';
import { AboutView } from './views/AboutView';
import { ReviewsView } from './views/ReviewsView';
import { ContactView } from './views/ContactView';

export function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingServiceId, setBookingServiceId] = useState<string | undefined>('full-mobile-signature');

  // Handle hash route changes if user clicks back/forward
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['home', 'services', 'gallery', 'packages', 'about', 'reviews', 'contact'].includes(hash)) {
        setCurrentTab(hash);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleSelectTab = (tab: string) => {
    setCurrentTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (serviceId?: string) => {
    if (serviceId) {
      setBookingServiceId(serviceId);
    }
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#08090B] text-white selection:bg-[#C9A35A] selection:text-black font-sans">
      {/* Top Fixed Header with Luxury Navigation */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main View Router Content */}
      <main className="flex-1 w-full flex flex-col">
        {currentTab === 'home' && (
          <HomeView onSelectTab={handleSelectTab} onOpenBooking={handleOpenBooking} />
        )}
        {currentTab === 'services' && (
          <ServicesView onOpenBooking={handleOpenBooking} />
        )}
        {currentTab === 'gallery' && (
          <GalleryView onOpenBooking={handleOpenBooking} />
        )}
        {currentTab === 'packages' && (
          <PackagesView onOpenBooking={handleOpenBooking} />
        )}
        {currentTab === 'about' && (
          <AboutView onOpenBooking={handleOpenBooking} />
        )}
        {currentTab === 'reviews' && (
          <ReviewsView onOpenBooking={handleOpenBooking} />
        )}
        {currentTab === 'contact' && <ContactView />}
      </main>

      {/* Universal Footer */}
      <Footer onSelectTab={handleSelectTab} onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialServiceId={bookingServiceId}
      />

      {/* Quick Access Floating Action Button */}
      <FloatingActions onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}

export default App;
