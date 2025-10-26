import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Pricing from "./Pricing";
import ExploreMembership from "./ExploreMembership";
import ContactForm from "./ContactForm";
import JoinUs from "./JoinUs";
import Footer from "./Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Hero Section - Removed extra black space */}
      <section id="hero" className="mt-16 md:mt-20 mb-32 md:mb-40">
        <Hero />
      </section>

      {/* Services Section */}
      <section id="services" className="pt-32 md:pt-40 mb-32 md:mb-40">
        <Services />
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pt-32 md:pt-40 mb-32 md:mb-40">
        <Pricing />
      </section>

      {/* Join Us Section */}
      <section id="join" className="pt-32 md:pt-40 mb-32 md:mb-40">
        <JoinUs />
      </section>

      {/* Explore Membership Section */}
      <section id="membership" className="pt-32 md:pt-40 mb-32 md:mb-40">
        <ExploreMembership />
      </section>

      {/* Contact Section */}
      <section id="contact" className="pt-32 md:pt-40 mb-32 md:mb-40">
        <ContactForm />
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
