import React from 'react';

const RevenueRiskComponent: React.FC = () => {
  return (
    <div className=" bg-white max-w-xs  rounded-3xl shadow-lg p-8">
      <h1 className="text-xl text-black font-black mb-2">More revenue, less risk</h1>
      <p className="text-gray-500 mb-6">
        Fight fraud, manage risk, and optimise revenue.
      </p>
      
      <button className="bg-gray-200 text-black font-semibold py-1 px-5 rounded-xl mb-8">
        Get started
      </button>

      <div className="mb-4">
        <span className="inline-flex text-black text-xs font-black mr-4">
          <span className="w-4 h-4 inline-block bg-blue-600 rounded-sm mr-2"></span>
          Accepted
        </span>
        <span className='text-black  inline-flex text-xs font-black'>
          <span className="w-4 h-4 inline-block bg-gray-200 rounded-sm mr-2"></span>
          Fraud blocked
        </span>
      </div>

      <div className="flex justify-between items-end h-52 -mb-8">
        {[85, 90, 75, 80].map((height, index) => (
          <div key={index} className="w-[15%] bg-blue-600 rounded-t-lg" style={{height: `${height}%`}}></div>
        ))}
      </div>
    </div>
  );
};

export default RevenueRiskComponent;