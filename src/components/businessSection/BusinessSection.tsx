import React, { useEffect } from 'react';
import {motion, useMotionValue, useTransform, animate}  from 'framer-motion';   
import { useInView } from 'react-intersection-observer';


interface FeatureCardProps {
  title: string;
  description: string;
  buttonText: string;
  icons?: number[];
  rating?: number;
}

const FeatureCard:React.FC <FeatureCardProps  > = ({ title, description, buttonText, icons, rating }) => (
  <div className="bg-white h-96  p-6 rounded-lg shadow-md">
    <h3 className="text-xl text-black  font-black mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full mb-4">
      {buttonText}
    </button>
    {rating ? (
      <div className="text-center">
        <div className="text-7xl text-black font-black mb-2"><Counter from={0} to={parseFloat(rating.toFixed(1)) } duration={1}/></div>
        <div className="flex justify-center mb-2">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-6 h-6 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <div className="text-sm text-gray-500">Trustpilot</div>
      </div>
    ) : (
      <div className="flex flex-wrap gap-2">
        {icons?.map((icon, index) => (
          <div key={index} className="w-12 h-12 bg-gray-200 rounded-lg"></div>
        ))}
      </div>
    )}
  </div>
);

interface FeatureCounter {
  from: number;
  to: number;
  duration:number
  
}

const Counter: React.FC<FeatureCounter> = ({ from, to, duration }) => {
  const count = useMotionValue(from);
  
  const formatted = useTransform(count, (latest: number) => latest.toFixed(1));


  const { ref, inView } = useInView({
    triggerOnce: false, // Ensure animation only happens once
  });

  useEffect(() => {
     
    if (inView) {
      count.set(from);
      const controls = animate(count, to, { duration: duration });
      return controls.stop;
    }
  }, [inView,count, to, duration]);

  return <motion.p ref={ref} className="text-black">{formatted}</motion.p>;
};

const BusinessSection = () => (
  <section className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-5xl text-black font-black mb-2">Built for any business</h1>
    <p className="text-xl w-3/4 text-gray-600 mb-8">
      Access an ecosystem of tech solutions to level up your business
      or seamlessly connect Mollie payments to your existing infrastructure.
    </p>
   
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <FeatureCard 
        title="Prebuilt integrations"
        description="Connect to your ecommerce platform and tech stack with our ready-made plugins."
        buttonText="Explore our integrations"
        icons={[1, 2, 3, 4, 5, 6]}
      />
      <FeatureCard 
        title="Best-in-class support"
        description="Get industry-leading support whenever you need it."
        buttonText="Contact us"
        rating={4.6}
      />
      <FeatureCard 
        title="Ready-to-go libraries"
        description="Use our client and server libraries for everything from JS & PHP to .NET and Python."
        buttonText="Browse all libraries"
        icons={[1, 2, 3, 4, 5, 6]}
      />
    </div>
  </section>
);

export default BusinessSection;
