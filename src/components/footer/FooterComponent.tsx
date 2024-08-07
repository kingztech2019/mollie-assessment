import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
       
      <div className="max-w-4xl mx-auto">
      <div className="mb-8 lg:mb-0">
          <h2 className="text-4xl w-3/4 font-black mb-2">Simplify payments and money management</h2>
          <p className="mb-4">Drive revenue, reduce costs, and manage funds with Mollie.</p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">Start now</button>
            <button className="border border-gray-500 text-white py-2 px-4 rounded">Contact sales</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-32 ">
          <div>
            <h3 className="font-bold mb-4">Mollie</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Agency partners</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">SaaS and ecommerce partners</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Paid with Mollie?</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Online payments</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">In-person payments</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Recurring payments</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Checkout</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Acceptance & Risk</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Payment Links</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Invoicing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Capital</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Connect for Platforms</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Developers</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Libraries</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Integrations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Status</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">News</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Success stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Growth</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Papers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Mollie Resources</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Product updates</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Location and language</h3>
            <select className="bg-gray-800 text-white p-2 rounded w-full">
              <option>🌐 English</option>
              {/* Add more language options as needed */}
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;