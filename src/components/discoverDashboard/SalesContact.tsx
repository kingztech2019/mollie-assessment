import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import img1 from '../../assets/person1.avif';
import img2 from '../../assets/person2.avif';
 
const SalesContact: React.FC = () => {
    const images = [img1, img2];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-black text-white p-6 rounded-lg h-full flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-2">Contact our sales team</h2>
        <p className="text-gray-400 mb-4">Discover how we can help your business.</p>
        <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
          Get in touch
        </button>
      </div>
      <div className="mt-6 overflow-hidden  w-48 h-48 mx-auto relative">
        <AnimatePresence>
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt="Sales team member"
            className="absolute top-0 left-0 w-full h-full object-cover "
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SalesContact;
