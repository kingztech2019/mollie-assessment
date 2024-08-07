"use client";
import acmeLogo from "../../assets/logo1.png";
import quantamLogo from "../../assets/logo2.png";
import amazonLogo from "../../assets/logo3.png";
import facebookLogo from "../../assets/logo4.png";
import gitLabLogo from "../../assets/logo5.png";
import musicLogo from "../../assets/logo6.png";
import { motion } from "framer-motion";
 

export const AnimatedLogo = () => {
  return (
    <div className="py-8 md:py-12 bg-black">
      <div className="container">
         <div
          className="flex overflow-hidden"
          style={{ maskImage: "linear-gradient(to right, transparent, white, transparent)" }}
        >
          <motion.div
            className="flex gap-14 flex-none pr-14"
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
            <img src={acmeLogo} alt="Acme logo" className="logo-ticker-image" />
            <img src={quantamLogo} alt="quantam logo" className="logo-ticker-image" />
            <img src={amazonLogo} alt="Amazon logo" className="logo-ticker-image" />
            <img src={facebookLogo} alt="facebook logo" className="logo-ticker-image" />
            <img src={gitLabLogo} alt="GitLab logo" className="logo-ticker-image" />
            <img src={musicLogo} alt="Music logo" className="logo-ticker-image" />

            <img src={acmeLogo} alt="Acme logo" className="logo-ticker-image" />
            <img src={quantamLogo} alt="quantam logo" className="logo-ticker-image" />
            <img src={amazonLogo} alt="Echo logo" className="logo-ticker-image" />
            <img src={facebookLogo} alt="Facebook logo" className="logo-ticker-image" />
            <img src={gitLabLogo} alt="GitLab logo" className="logo-ticker-image" />
            <img src={musicLogo} alt="Music logo" className="logo-ticker-image" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
