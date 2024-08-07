
import React from 'react';
import { motion } from 'framer-motion';

const PaymentOptions: React.FC = () => {
  const paymentMethods = [
    { name: 'iDeal', color: 'bg-pink-500',border:'',allow_border:"",text:'' },
    { name: 'CB', color: 'bg-teal-500',border:'',allow_border:"",text:'' },
    { name: 'Apple Pay', color: 'bg-white',border:'border-greay-400',allow_border:"border",text:'text-black' },
    { name: 'Amex', color: 'bg-blue-500',border:'',allow_border:"",text:''},
    { name: 'Mastercard', color: 'bg-black',border:'',allow_border:"",text:'' },
    { name: 'Visa', color: 'bg-blue-700',border:'',allow_border:"",text:'' },
    { name: 'Klarna', color: 'bg-pink-200',border:'',allow_border:"",text:'' },
    { name: 'SEPA', color: 'bg-blue-600' ,border:'',allow_border:"",text:''},
  ];

  // mx-auto p-6

  return (
    <div className="max-w-xs   pt-8  bg-white rounded-2xl shadow-lg">
      <motion.h1 
        className="text-xl font-bold text-black mb-2 px-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Accept online payments
      </motion.h1>
      <motion.p 
        className="text-gray-600 mb-4 px-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Win sales and drive revenue with effortless online payments.
      </motion.p>
      <div className='px-2'>
      <motion.button 
        className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg mb-6"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Explore our online solution
      </motion.button>
      </div>

     
      <div className="overflow-hidden mt-28">
  <div className="grid grid-cols-4 gap-3 -mx-8">
    {paymentMethods.map((icon, index) => (
          <motion.div
          key={icon.name}
          className={`${icon.color} ${icon.border} ${icon.allow_border} ${icon.text} rounded-xl h-16 flex items-center justify-center`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {icon.name}
        </motion.div>
      
    ))}
  </div>
</div>
      {/* <div className="grid grid-cols-4 gap-4">
      {paymentMethods.map((method, index) => (
        <motion.div
          key={method.name}
          className={`${method.color} ${method.border} ${method.allow_border} ${method.clip_edge}  rounded-xl h-16 flex items-center justify-center`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {method.name}
        </motion.div>
      ))}
    </div> */}
    </div>
    
  );
};

export default PaymentOptions;