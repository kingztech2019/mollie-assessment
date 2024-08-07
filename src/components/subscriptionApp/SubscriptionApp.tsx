import React, { useState } from 'react';

const PaymentMethod: React.FC<{ icon: string; amount: string }> = ({ icon, amount }) => (
  <div className="flex justify-between items-center py-2">
    <div className="w-8 h-8 bg-gray-200 rounded-md flex items-center justify-center">
      {icon}
    </div>
    <span className="font-medium">{amount}</span>
  </div>
);

const SubscriptionApp: React.FC = () => {
  const [selectedInterval, setSelectedInterval] = useState('Every week');

  const intervals = ['Every week', 'Every 2 weeks', 'Every month', 'Every year'];

  return (
    <div className="flex gap-8 p-8 bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-1/2">
        <h2 className="text-2xl font-bold mb-2">Simplify subscription payments and billing</h2>
        <p className="text-gray-600 mb-4">Create flexible, scalable subscription plans and streamline billing.</p>
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md mb-6">
          Explore recurring payments
        </button>
        <div className="space-y-2">
          <PaymentMethod icon="💳" amount="€36.00" />
          <PaymentMethod icon="💳" amount="€48.00" />
          <PaymentMethod icon="🎟️" amount="€32.00" />
          <PaymentMethod icon="💳" amount="€8.00" />
        </div>
        <div className="relative mt-4">
          <select
            className="w-full p-2 bg-white border rounded-md appearance-none"
            value={selectedInterval}
            onChange={(e) => setSelectedInterval(e.target.value)}
          >
            {intervals.map((interval) => (
              <option key={interval} value={interval}>
                {interval}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md w-1/2">
        <h2 className="text-2xl font-bold mb-2">More revenue, less risk</h2>
        <p className="text-gray-600 mb-4">Fight fraud, manage risk, and optimise revenue.</p>
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md mb-6">
          Get started
        </button>
        <div className="flex items-end h-48 space-x-4">
          <div className="bg-blue-500 w-1/4 h-full rounded-t-md"></div>
          <div className="bg-blue-500 w-1/4 h-3/4 rounded-t-md"></div>
          <div className="bg-blue-500 w-1/4 h-5/6 rounded-t-md"></div>
          <div className="bg-blue-500 w-1/4 h-4/5 rounded-t-md"></div>
        </div>
        <div className="flex mt-2">
          <div className="w-1/2">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm">Accepted</span>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
              <span className="text-sm">Fraud blocked</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionApp;