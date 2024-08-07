import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import image1 from "../../assets/ani-bg.avif";
import rightImage from "../../assets/bg2.png";

interface PaymentOption {
  name: string;
  icon: string;
}

const PaymentButton: React.FC<{ option: PaymentOption }> = ({ option }) => (
  <button className="flex items-center justify-between w-full p-3 mt-2 text-left bg-white rounded-lg shadow">
    <div className="flex items-center">
      <img src={option.icon} alt={option.name} className="w-6 h-6 mr-3" />
      <span className="text-black">{option.name}</span>
    </div>
    <svg
      className="w-4 h-4 text-black"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>
);

const ScrollableImages: React.FC = () => {
  const paymentOptions: PaymentOption[] = [
    { name: "Cards", icon: "/path-to-cards-icon.png" },
    { name: "PayPal", icon: "/path-to-paypal-icon.png" },
    { name: "Bank Transfer", icon: "/path-to-bank-icon.png" },
    { name: "iDEAL", icon: "/path-to-ideal-icon.png" },
  ];

  const [containerHeight, setContainerHeight] = useState(window.innerHeight);
  const { scrollY } = useViewportScroll();

  // Recalculate the scroll-based transforms
  const transformRange = [containerHeight, containerHeight * 1.5];
  const leftImageX = useTransform(scrollY, transformRange, [0, -100]);
  const rightImageX = useTransform(scrollY, transformRange, [0, 100]);
  const singleImageOpacity = useTransform(
    scrollY,
    [containerHeight - 1, containerHeight],
    [1, 0]
  );
  const splitImagesOpacity = useTransform(
    scrollY,
    [containerHeight, containerHeight + 1],
    [0, 1]
  );

  // Update the container height on resize
  useEffect(() => {
    const handleResize = () => setContainerHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative h-[200vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0 flex justify-center items-center"
          style={{ opacity: singleImageOpacity }}
        >
          <img
            src={image1}
            alt="Single"
            className="w-4/5 h-[90%]  border-4 border-[#1C1C1C] rounded-xl "
          />

          <div className="absolute inset-0 flex justify-center items-center">
            <div className="">
              <h1 className="mb-4 text-2xl font-bold text-white text-center">
                GYMSHARK
              </h1>

              <div className="bg-white p-6 w-80  h-1/2 rounded-lg shadow-lg">
                <div className="mb-6 text-center">
                  <p className="text-sm text-gray-600">Order #3526</p>
                  <h2 className="text-xl text-black font-semibold">Sport T-Shirt</h2>
                  <p className="text-lg text-black font-bold">€24.95</p>
                </div>
                <button className="w-full py-3 mb-4 font-bold text-white bg-black rounded-lg">
                  Pay
                </button>
                {paymentOptions.map((option, index) => (
                  <PaymentButton key={index} option={option} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-0 flex"
          style={{ opacity: splitImagesOpacity }}
        >
          <motion.div className="w-1/2" style={{ x: leftImageX }}>
            <img
              src={image1}
              alt="Left"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div className="w-full" style={{ x: rightImageX }}>
            <img
              src={rightImage}
              alt="Right"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollableImages;
