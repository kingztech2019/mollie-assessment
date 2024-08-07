import React from 'react';
import CurrencyCard from './CurrencyCard';

const PaymentLink: React.FC = () => {
  return (
    <div className="p-8 bg-white rounded-lg w-3/4 shadow-md">
      <h2 className="text-xl font-black text-black">Get paid faster</h2>
      <p className="mt-2 text-black">Create and share secure payment links. On any channel.</p>
      <button className="mt-4 bg-gray-200 text-black py-2 px-4 rounded">Discover Payment Links</button>
      <div className="mt-6 flex items-center justify-center">
        <CurrencyCard/>
        {/* Add the phone image or an icon representing the payment link */}
      </div>
    </div>
  );
};

export default PaymentLink;
