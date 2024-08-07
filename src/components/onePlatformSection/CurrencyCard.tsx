import React from 'react';
import { motion } from 'framer-motion';


const CurrencyCard: React.FC = () => {

    // Define the blinking cursor component
const BlinkingCursor: React.FC = () => {
    const cursorVariants = {
      visible: { opacity: 1 },
      hidden: { opacity: 0 },
    };
  
    return (
      <motion.span
        className="inline-block text-blue-700 h-full"
        initial="visible"
        animate="hidden"
        variants={cursorVariants}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 0.5,
        }}
      >
        |
      </motion.span>
    );
  };
  
  return (
    <div className="flex justify-center items-center -mb-8">
      <div className="relative bg-white rounded-t-3xl shadow-lg w-72 h-72 p-4">
      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3/4 h-3 bg-black rounded-b-xl"></div>

        {/* Header */}
        <div className="flex items-center justify-between px-4 pb-4 border-b border-gray-300">
          <button className="text-xl">✕</button>
          <div className="flex items-center space-x-1 text-gray-800 font-semibold">
            <span>Acme Inc</span>
            <span className="text-xs">▼</span>
          </div>
          <button className="text-xl">✈️</button>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center justify-center h-full text-center">
        <div className="text-5xl  text-black">
            €<span className="text-black font-bold">8</span>
            <BlinkingCursor />
          </div>
          <div className="mt-4">
            <button className="px-6 py-2 bg-white border rounded-full shadow-sm text-black font-medium">
              EUR <span className="text-xs">▼</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyCard;
