import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Pricing from "./Pricing";
import ExploreMembership from "./ExploreMembership";
import ContactForm from "./ContactForm";
import JoinUs from "./JoinUs";
import Footer from "./Footer"; // ✅ Import Footer

function App() {
  // ✅ Enable smooth scrolling globally
  useEffect(() => {
    const html = document.querySelector("html");
    html.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="scroll-mt-24 pt-40 mb-44 md:mb-56"
      >
        <Hero />
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="scroll-mt-24 pt-40 mb-44 md:mb-56"
      >
        <Services />
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="scroll-mt-24 pt-40 mb-44 md:mb-56"
      >
        <Pricing />
      </section>

      {/* Join Us Section */}
      <section
        id="join"
        className="scroll-mt-24 pt-40 mb-44 md:mb-56"
      >
        <JoinUs />
      </section>

      {/* Explore Membership Section */}
      <section
        id="membership"
        className="scroll-mt-24 pt-40 mb-44 md:mb-56"
      >
        <ExploreMembership />
      </section>

      {/* Contact Form Section */}
      <section
        id="contact"
        className="scroll-mt-24 pt-40 mb-44 md:mb-56"
      >
        <ContactForm />
      </section>

      {/* ✅ Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
