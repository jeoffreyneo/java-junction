import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-700 text-white p-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold mb-2 md:mb-0">Java Junction</h1>
          <nav className="space-x-4 text-lg">
            <a href="#services" className="hover:underline">
              Services
            </a>
            <a href="#pricing" className="hover:underline">
              Pricing
            </a>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-100 text-blue-900 p-12 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to Java Junction</h2>
        <p className="text-xl max-w-2xl mx-auto">
          Your friendly neighborhood cyber cafe — fast internet, cozy space,
          and great coffee.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="p-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>High-speed internet access</li>
          <li>Comfortable seating and private rooms</li>
          <li>Printing, scanning, and photocopying</li>
          <li>Complimentary coffee and snacks</li>
          <li>24/7 access for VIP members</li>
        </ul>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="p-6 bg-gray-100 mt-12 max-w-5xl mx-auto rounded"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Basic Plan */}
          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="text-xl font-semibold mb-4">Basic</h3>
            <p className="text-4xl font-bold mb-4">₱40 / hr</p>
            <ul className="mb-6 text-left">
              <li>Standard internet access</li>
              <li>Free coffee & snacks</li>
            </ul>
            <button className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 transition">
              Select
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="text-xl font-semibold mb-4">Premium</h3>
            <p className="text-4xl font-bold mb-4">₱75 / hr</p>
            <ul className="mb-6 text-left">
              <li>Faster internet</li>
              <li>Unlimited coffee & snacks</li>
              <li>Access to private rooms</li>
            </ul>
            <button className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 transition">
              Select
            </button>
          </div>

          {/* VIP Plan */}
          <div className="bg-white p-6 rounded shadow text-center">
            <h3 className="text-xl font-semibold mb-4">VIP</h3>
            <p className="text-4xl font-bold mb-4">₱150 / hr</p>
            <ul className="mb-6 text-left">
              <li>All Premium features</li>
              <li>24/7 access</li>
              <li>Priority support</li>
            </ul>
            <button className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-800 transition">
              Select
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="p-6 max-w-4xl mx-auto mt-12 mb-12 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p>
          For inquiries, reservations, or feedback, email us at{" "}
          <a
            href="mailto:contact@javajunction.ph"
            className="text-blue-700 underline"
          >
            contact@javajunction.ph
          </a>
          .
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white p-4 text-center">
        &copy; {new Date().getFullYear()} Java Junction. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
