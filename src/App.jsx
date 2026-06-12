import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import About from './components/About';
import Experiences from './components/Experiences';
import Gallery from './components/Gallery';
import Dining from './components/Dining';
import Footer from './components/Footer';
import PreLaunchModal from './components/PreLaunchModal';

function App() {
  const [notifyOpen, setNotifyOpen] = useState(false);
  const [prefLocation, setPrefLocation] = useState('kodaikanal');

  const handleOpenNotify = (locationId = 'kodaikanal') => {
    setPrefLocation(locationId);
    setNotifyOpen(true);
  };

  const handleCloseNotify = () => {
    setNotifyOpen(false);
  };

  return (
    <>
      {/* Sticky header */}
      <Navbar onOpenBooking={() => handleOpenNotify('kodaikanal')} />

      {/* Hero landing header */}
      <Hero onOpenBooking={() => handleOpenNotify('kodaikanal')} />

      {/* Circular destinations list (Kodai, Ooty, Wayanad, etc.) */}
      <Destinations onNotifyLocation={handleOpenNotify} />

      {/* Narrative slow living philosophy */}
      <About />

      {/* Curated slow travel activities */}
      <Experiences />

      {/* Gallery & Testimonials */}
      <Gallery />

      {/* Gastronomy section */}
      <Dining />

      {/* Footer contacts & details */}
      <Footer />

      {/* Pre-launch signup modal */}
      <PreLaunchModal
        open={notifyOpen}
        onClose={handleCloseNotify}
        initialLocation={prefLocation}
      />
    </>
  );
}

export default App;
