import React from "react";

export default function Services() {
  const services = [
    {
      title: "Gaming Lounge Area",
      img: process.env.PUBLIC_URL + "/images/services/pic1.jpg",
      desc: "Neon Gaming Lounge",
    },
    {
      title: "Cafe Area",
      img: process.env.PUBLIC_URL + "/images/services/lounge2.jpg",
      desc: "Cozy Café Corner",
    },
    {
      title: "Esports Area",
      img: process.env.PUBLIC_URL + "/images/services/lounge3.jpg",
      desc: "Esports & Tournaments",
    },
  ];

  return (
    <section className="text-center px-6">
      <h2 className="text-4xl font-bold mb-4 text-cyan-400 drop-shadow-[0_0_10px_#00ffff]">
        Experience the Java Junction Café Lounge ☕🎮
      </h2>
      <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
        Welcome to <span className="text-cyan-400 font-semibold">Java Junction</span> — 
        a place where technology, gaming, and comfort collide. Immerse yourself in our 
        dark neon ambiance, custom-built rigs, and relaxing café environment designed 
        for gamers and dreamers alike.
      </p>

      <div className="grid md:grid-cols-3 gap-10 justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#0d101b] rounded-2xl overflow-hidden shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 transition-all duration-300"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
