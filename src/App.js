import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Pricing from "./Pricing";
import ExploreMembership from "./ExploreMembership";
import ContactForm from "./ContactForm";
import JoinUs from "./JoinUs";
import Footer from "./Footer";
import UserDashboard from "./UserDashboard"; // ✅ new dashboard page

function App() {
  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "smooth";
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white overflow-x-hidden">
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <section id="hero" className="scroll-mt-24 pt-40 mb-44 md:mb-56">
                  <Hero />
                </section>
                <section id="services" className="scroll-mt-24 pt-40 mb-44 md:mb-56">
                  <Services />
                </section>
                <section id="pricing" className="scroll-mt-24 pt-40 mb-44 md:mb-56">
                  <Pricing />
                </section>
                <section id="join" className="scroll-mt-24 pt-40 mb-44 md:mb-56">
                  <JoinUs />
                </section>
                <section id="membership" className="scroll-mt-24 pt-40 mb-44 md:mb-56">
                  <ExploreMembership />
                </section>
                <section id="contact" className="scroll-mt-24 pt-40 mb-44 md:mb-56">
                  <ContactForm />
                </section>
                <Footer />
              </>
            }
          />

          {/* ✅ Member Dashboard Route */}
          <Route path="/dashboard" element={<UserDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
