import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[url('https://images.unsplash.com/photo-1559028012-481c04fa7023')] bg-cover bg-center h-[450px] text-white flex items-center justify-center">
      <div className="bg-black bg-opacity-60 p-10 rounded-lg text-center max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Java Junction</h1>
        <p className="mb-6 text-lg">Fast internet. Gaming. Printing. Great coffee.</p>
        <button className="bg-yellow-400 text-black px-6 py-2 rounded hover:bg-yellow-300">Book a Session</button>
      </div>
    </section>
  );
};

export default Hero;
