/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { WhatWeDo } from "./components/WhatWeDo";
import { Impact } from "./components/Impact";
import { InspiringStories } from "./components/InspiringStories";
import { GetHelp } from "./components/GetHelp";
import { Updates } from "./components/Updates";
import { TakeAction } from "./components/TakeAction";
import { DonationForm } from "./components/DonationForm";
import { Footer } from "./components/Footer";
import { PatientDetailPage } from "./components/PatientDetailPage";
import { UpdateDetailPage } from "./components/UpdateDetailPage";
import { SideRail } from "./components/SideRail";
import { ScrollToTop } from "./components/ScrollToTop";
import { FloatingDonateButton } from "./components/FloatingDonateButton";
import { WhoWeAre } from "./pages/WhoWeAre";
import { WhatWeDoPage } from "./pages/WhatWeDoPage";
import { NewsEvents } from "./pages/NewsEvents";
import { GetInvolved } from "./pages/GetInvolved";
import { DonatePage } from "./pages/DonatePage";

function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <WhatWeDo />
        <Impact />
        <InspiringStories />
        <GetHelp />
        <Updates />
        <TakeAction />
        <DonationForm />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <FloatingDonateButton />
      <Navbar setIsOpen={setIsMenuOpen} />
      <SideRail isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <div className="min-h-screen bg-brand-bg font-sans text-brand-dark selection:bg-brand-green selection:text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/what-we-do" element={<WhatWeDoPage />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/patient/:id" element={<PatientDetailPage />} />
          <Route path="/update/:id" element={<UpdateDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}
