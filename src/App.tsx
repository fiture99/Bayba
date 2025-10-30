import { useState } from 'react';
import { Send, Globe, Shield, Clock, Users, MapPin, Phone, Mail, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Management from './components/Management';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Management />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
