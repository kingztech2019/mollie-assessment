import React from 'react';
import TopHeader from './TopSection';
import PaymentOptions from './PaymentOption';
import PaymentLink from './PaymentLink';
 

const MainPlatformSection: React.FC = () => {
  return (
    <div className=" my-11 max-w-4xl mx-auto">
      <TopHeader />
      <div className="mt-8 flex flex-col md:flex-row gap-3">
        <PaymentOptions />
        <PaymentLink />
      </div>
    </div>
  );
};

export default MainPlatformSection;
