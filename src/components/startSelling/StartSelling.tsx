import React from 'react';
import StartSellingImage from "../../assets/start_selling.png"

const StartSelling: React.FC = () => {
  return (
    <div className="relative max-w-4xl mx-auto">
      <img src={StartSellingImage} alt="Payment device" className="w-" />
      <div className="absolute top-4 left-4 text-white">
        <h2 className="text-xl font-black pt-2">Start selling in person</h2>
        <p className="mt-2 w-2/3 text-gray-400">Offer seamless in-person payments with integrated data and devices.</p>
      </div>
      <button className="absolute bottom-4 left-4 bg-white text-black px-2 py-1 hover:bg-slate-200 outline-0 rounded-xl">
        Start now
      </button>
    </div>
  );
};

export default StartSelling;