import React, { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Pricing from "./Pricing";
import JoinUs from "./JoinUs";
import ExploreMembership from "./ExploreMembership";
import ContactForm from "./ContactForm";

// ✅ Section animation wrapper
const AnimatedSection = ({ children, id }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-10 scale-95"
      }`}
    >
      {children}
    </section>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#3E2723] via-[#4E342E] to-[#3E2723] text-[#EFEBE9] font-sans">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Hero Section */}
      <AnimatedSection id="hero">
        <div className="pt-32 pb-56">
          <Hero />
        </div>
      </AnimatedSection>

      {/* About Us Section */}
      <AnimatedSection id="about">
        <div className="py-56">
          <AboutUs />
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection id="services">
        <div className="py-56">
          <Services />
        </div>
      </AnimatedSection>

      {/* Pricing Section */}
      <AnimatedSection id="pricing">
        <div className="py-56">
          <Pricing />
        </div>
      </AnimatedSection>

      {/* Join Us Section */}
      <AnimatedSection id="joinus">
        <div className="py-56">
          <JoinUs />
        </div>
      </AnimatedSection>

      {/* Explore Membership Section */}
      <AnimatedSection id="membership">
        <div className="py-56">
          <ExploreMembership />
        </div>
      </AnimatedSection>

      {/* Contact Us Section */}
      <AnimatedSection id="contact">
        <div className="py-56">
          <ContactForm />
        </div>
      </AnimatedSection>
    </div>
  );
}

export default App;
