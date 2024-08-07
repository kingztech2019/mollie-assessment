import React from 'react';
import SalesContact from './SalesContact';

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row  p-8 mx-auto max-w-5xl gap-4">
      <div className="md:w-3/4 w-full pr-8 relative overflow-hidden">
        {/* Blue line graph */}
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1000 300" preserveAspectRatio="none">
          <path
            d="M0,100 Q250,200 500,100 T1000,100"
            fill="none"
            stroke="rgb(59, 130, 246)"
            strokeWidth="4"
          />
          <path
            d="M0,100 Q250,200 500,100 T1000,100 L1000,300 L0,300 Z"
            fill="rgba(59, 130, 246, 0.1)"
            stroke="none"
          />
        </svg>
        

        {/* Rest of the previous component */}
        <div className="relative z-10">
          <div className="flex justify-evenly items-center mt-20">
            <div className="bg-white w-36 rounded-lg p-4 shadow">
              <h3 className="font-bold text-black">Wed Oct 11</h3>
              <p className="text-gray-600">Visa</p>
              <p className="text-gray-600">Mastercard</p>
              <p className="font-bold text-black  mt-2">Total <span className="ml-4">€32</span></p>
            </div>
            <div className="bg-white rounded-lg w-36 -p-4 shadow">
              <div className=" text-gray-800 font-semibold py-2 px-4  rounded">
                Open
              </div>
              <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2 w-full">
                Refund
              </div>
              <div className=" hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4  rounded">
                Ship order
              </div>
            </div>
          </div>
          <div className="mt-28 px-3">
            <h2 className="text-2xl text-black font-black mb-2">Payments, insights, cash flow, accounting. All in one place.</h2>
            <p className="text-gray-600 mb-4">
              Use your centralised dashboard to manage payments, get insights, access funding, and streamline accounting.
            </p>
            <button className="bg-gray-400 mb-4 hover:bg-gray-300 text-black font-bold py-1 px-4 rounded">
              Discover the Mollie Dashboard
            </button>
          </div>
        </div>
      </div>
      
      {/* New sales contact section */}
      <div className="w-">
        <SalesContact />
      </div>
    </div>
  );
};

export default Dashboard;