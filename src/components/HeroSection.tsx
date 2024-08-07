import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-10 lg:px-20 text-center">
      <p className="text-gray-400 text-lg mb-2">Powering growth for over <span className="font-bold">200,000 businesses</span> – from startups to enterprises.</p>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Effortless payments and money management for every business</h1>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center">
          Get started <span className="ml-2">→</span>
        </button>
        <button className="bg-gray-800 text-white px-8 py-3 rounded-full font-semibold">
          Contact sales
        </button>
      </div>
    </section>
  );
};

export default Hero;
