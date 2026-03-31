/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { WhatWeDo } from "./components/WhatWeDo";
import { Impact } from "./components/Impact";
import { DonationForm } from "./components/DonationForm";
import { InspiringStories } from "./components/InspiringStories";
import { GetHelp } from "./components/GetHelp";
import { Updates } from "./components/Updates";
import { TakeAction } from "./components/TakeAction";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans text-brand-dark selection:bg-brand-green selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <Impact />
        <DonationForm />
        <InspiringStories />
        <GetHelp />
        <Updates />
        <TakeAction />
      </main>
      <Footer />
    </div>
  );
}
