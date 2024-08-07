import React from 'react';
import { IconType } from 'react-icons';
import { FaCreditCard, FaStore, FaShoppingCart, FaRecycle, FaShieldAlt } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';


interface MenuItem {
  icon: IconType;
  title: string;
  description: string;
}



 

const menuItems: MenuItem[] = [
    {
      icon: FaCreditCard,
      title: 'Online payments',
      description: 'Accept and manage online payments'
    },
    {
      icon: FaStore,
      title: 'In-person payments',
      description: 'Take payments with terminals and devices'
    },
    {
      icon: FaShoppingCart,
      title: 'Checkout',
      description: 'Offer a checkout optimised for conversion'
    },
    {
      icon: FaRecycle,
      title: 'Recurring payments',
      description: 'Collect recurring and subscription payments'
    },
    {
      icon: FaShieldAlt,
      title: 'Acceptance & Risk',
      description: 'Prevent fraud and optimise conversion'
    },
  ];

  const collectRevenue: MenuItem[] = [
    {
      icon: FaCreditCard,
      title: 'Payment Links',
      description: 'create, send, andd customise payment Links',
      
    },
    {
      icon: FaStore,
      title: 'Invoicing',
      description: 'create and send invoices for your order',
       
    },
    {
      icon: FaRecycle,
      title: 'Recurring payments',
      description: 'Collect recurring and subscription payments'
    },
    {
      icon: FaShieldAlt,
      title: 'Acceptance & Risk',
      description: 'Prevent fraud and optimise conversion'
    },
     
  ];

const ProductMenu: React.FC = () => {
  return (
    <div className="absolute grid grid-cols-2 top-6 left-0 bg-gray-900 p-6 w-[1000px] rounded-b-lg shadow-lg">
   <div className="grid grid-cols-1 gap-4">
    <p className='text-[#AF67EE] font-black text-sm'> Collect Revenue</p>
      {menuItems.map((item, index) => (
        <div key={index} className="flex items-start group">
        <item.icon className="text-gray-400 group-hover:text-white mr-4 text-2xl" />
        <div className='flex flex-col'>
          <div className='flex text-gray-300 group-hover:text-white items-center'>
            <h3 className=" text-sm font-semibold">{item.title}</h3>
            <FaArrowRight className='text-xs  ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
          </div>
          <p className="text-gray-400 text-xs">{item.description}</p>
        </div>
        
      </div>
      ))}
      
    </div>
    <div className="grid grid-cols-1">
    <p className='text-[#AF67EE] font-black text-sm'> Collect Revenue</p>
      {collectRevenue.map((item, index) => (
        <div key={index} className="flex items-start group">
        <item.icon className="text-gray-400 group-hover:text-white mr-4 text-2xl" />
        <div className='flex flex-col'>
          <div className='flex text-gray-300 group-hover:text-white items-center'>
            <h3 className=" text-sm font-semibold">{item.title}</h3>
            <FaArrowRight className='text-xs  ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
          </div>
          <p className="text-gray-400 text-xs">{item.description}</p>
        </div>
      </div>
      ))}
    </div>
  </div>
  );
};

export default ProductMenu;