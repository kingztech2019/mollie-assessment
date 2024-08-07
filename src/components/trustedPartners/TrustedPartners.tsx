"use client";
 
import { motion } from "framer-motion";
import CardGrid from "./CardGrid";
 

export const TrustedPartners = () => {
  return (
    <div className="py-8 md:py-12  ">
      <div className="container">
      <div className=" max-w-4xl mx-auto font-[Inter-Bold] p- w-3/4">
      <h1 className="text-5xl  text-left text-black w-1/2 font-black">A trusted partner for businesses in Europe</h1>
      <p className="mt-4 text-gray-500 text-lg">
      Meet the companies that use our solution to power growth.      </p>
    </div>
         <div
          className="flex overflow-hidden"
          style={{ maskImage: "linear-gradient(to right, transparent, white, transparent)" }}
        >
          <motion.div
            className="flex gap-14 flex-none pr-10"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            
          >
            <CardGrid/>
            

            <CardGrid/>
            
          </motion.div>
        </div>
      </div>
    </div>
  );
};
