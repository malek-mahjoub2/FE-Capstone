import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Supprimé BrowserRouter alias Router
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ActivitiesSection from './components/Activities';
import Footer from './components/Footer';
import AboutSection from './components/About';
import ItineraryPlanner from './components/ItineraryPlanner';
import KeyHighlightsSection from './components/KeyHighlightsSection';
import ContactSection from './components/Contact';

import TunisiaPlan from './components/TunisiaPlan';
import SpainPlan from './components/SpainPlan';
import ItalyPlan from './components/ItalyPlan';
import GreecePlan from './components/GreecePlan';

import TunisiaPage from './pages/TunisiaPage';
import GreecePage from './pages/GreecePage';
import ItalyPage from './pages/ItalyPage';
import SpainPage from './pages/SpainPage';

function App() {
  return (
    <div>
      {/* Navbar is always visible */}
      <Navbar />

      {/* Routes */}
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <>
              <section id="home">
                <HeroSection />
              </section>
              <section id="destinations">
                <KeyHighlightsSection />
              </section>
              <section id="activities">
                <ActivitiesSection />
              </section>
              <section id="itinerary-planner">
                <ItineraryPlanner />
              </section>
              <section id="about">
                <AboutSection />
              </section>
              <section id="contact">
                <ContactSection />
              </section>
            </>
          }
        />

        {/* Destination Pages */}
        <Route path="/tunisia" element={<TunisiaPage />} />
        <Route path="/greece" element={<GreecePage />} />
        <Route path="/italy" element={<ItalyPage />} />
        <Route path="/spain" element={<SpainPage />} />

        {/* Plan Pages */}
        <Route path="/tunisia-plan" element={<TunisiaPlan />} />
        <Route path="/spain-plan" element={<SpainPlan />} />
        <Route path="/italy-plan" element={<ItalyPlan />} />
        <Route path="/greece-plan" element={<GreecePlan />} />
      </Routes>

      {/* Footer is always visible */}
      <Footer />
    </div>
  );
}

export default App;
