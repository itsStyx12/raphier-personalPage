"use client";

import { useState } from 'react';
import Hero from './src/components/Hero/page';
import About from './src/components/About/page';
import Schedule from './src/components/Schedule/page';
import Gallery from './src/components/Gallery/page';
import Contact from './src/components/Contact/page';
import Navigation from './src/components/Navigation/page';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Pattern - Inspired by Valorant */}
      <div className="fixed inset-0 z-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Schedule />
        <Gallery />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm">© 2025 VTuber Name. All rights reserved.</p>
          <p className="text-xs mt-2 opacity-80">Powered by dreams and virtual reality ✨</p>
        </div>
      </footer>
    </div>
  );
}
