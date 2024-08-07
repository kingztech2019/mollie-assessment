import React from 'react';
import fundingImage from "../../assets/funding.jpg"

const CheckoutComponent: React.FC = () => {
  return (
    <div className="relative mx-auto max-w-4xl -h-[600px] bg-tan-100 rounded-xl overflow-hidden ">
      {/* Background image would go here */}
      <img src={fundingImage} className='w-full'/>
      
      {/* Text content */}
      <div className="absolute top-8 left-8 max-w-md">
        <h1 className="text-xl text-black font-black  mb-2">Win more sales</h1>
        <p className="text-lg text-gray-800">Increase conversion with a personalized checkout experience.</p>
      </div>
      
      {/* Button */}
      <button className="absolute bottom-8 left-8 bg-white font-black text-black px-6 py-2 rounded-full">
        Discover Checkout
      </button>
      
      {/* Payment methods card */}
      <div className="absolute top-1/2 w-[30%] right-8 transform -translate-y-1/2 bg-white p-4 rounded-xl shadow-lg">
      <div className='flex justify-center items-center'>
      <div className="bg-black text-white p-2 w-3/4 flex justify-center rounded mb-2">Apple Pay</div>
      </div>
        {['Mastercard', 'Visa', 'Klarna', 'iDEAL'].map((method, index) => (
          <div key={index} className="flex text-black items-center justify-between py-2">
            <span>{method}</span>
            <span className='font-black'>›</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckoutComponent;