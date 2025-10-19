import React from 'react';

const services = [
  { name: "High-Speed Internet", icon: "🌐" },
  { name: "Gaming Stations", icon: "🎮" },
  { name: "Printing & Scanning", icon: "🖨️" },
  { name: "Premium Coffee", icon: "☕" },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow p-6 rounded hover:shadow-lg transition">
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold">{service.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;