import React, { useEffect, useState } from "react";
import {
  FaQuestionCircle,
  FaInfoCircle,
  FaNewspaper,
  FaBriefcase,
  FaFileAlt,
  FaBookOpen,
  FaCheckCircle,
  FaClipboardList,
  FaArrowRight,
} from "react-icons/fa";
import { IconType } from "react-icons";

interface ResourcesMegaMenuProps {
  parentRef: React.RefObject<HTMLLIElement>;
}

interface MenuItem {
  icon: IconType;
  title: string;
  description: string;
  link: string;
}

const ResourcesMegaMenu: React.FC<ResourcesMegaMenuProps> = ({ parentRef }) => {
  const [leftOffset, setLeftOffset] = useState(0);

  const menuItems: MenuItem[] = [
    {
      icon: FaInfoCircle,
      title: "About us",
      description: "Learn more about our story and values",
      link: "",
    },
    {
      icon: FaNewspaper,
      title: "News",
      description: "Read the latest Mollie news",
      link: "",
    },
    {
      icon: FaBriefcase,
      title: "Careers",
      description: "Come work for us - we're hiring!",
      link: "",
    },
    
  ];

  const mollieItems: MenuItem[] = [
    {
      icon: FaFileAlt,
      title: "Articles & guides",
      description: "Discover content that can help your business",
      link: "",
    },
    {
      icon: FaCheckCircle,
      title: "Success stories",
      description: "See how we support our customers",
      link: "",
    },
    {
      icon: FaBookOpen,
      title: "Papers",
      description: "Download our papers",
      link: "",
    },
    {
        icon: FaClipboardList,
        title: "Product updates",
        description: "Find out about our latest updates",
        link: "",
      },
    
  ];

  useEffect(() => {
    console.log(parentRef.current);
    
    if (parentRef.current) {
      const parentRect = parentRef.current.getBoundingClientRect();
      const centerOffset = parentRect.left + parentRect.width / 2;
      console.log(centerOffset);

      setLeftOffset(centerOffset - 1000); // 400 is half the width of the mega menu
    }
  }, [parentRef]);
  return (
    <div
      className="absolute bg-gray-900 p-6 w-[900px] rounded-b-lg shadow-lg"
      style={{
        top: "calc(100%)", // Adjust this value to control the vertical position
        left: `${leftOffset}px`,
      }}
    >
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1 bg-gray-800 p-4 rounded-lg">
          <h3 className="text-white font-semibold flex items-center">
            <FaQuestionCircle className="mr-2" />
            Help Centre
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            Have a question? Find the answer on our Help Centre.
          </p>
          <div className="mt-4 bg-gray-700 p-3 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="bg-gray-600 p-2 rounded text-sm text-gray-300">
              Ask MollieGPT a question
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <h3 className="text-gray-400 text-xs font-semibold mb-3">About Mollie</h3>
          <ul className="space-y-6">
            {menuItems.map((item, i) => (
              <li key={i} className="flex items-start group ">
                {/* <item.icon className="text-gray-400 group-hover:text-white mr-4 text-2xl" /> */}
                <div className="flex flex-col cursor-pointer">
                  <div className="flex text-gray-300 group-hover:text-white items-center">
                    <h3 className=" text-sm font-semibold">{item.title}</h3>
                    <FaArrowRight className="text-xs  ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-400 text-xs">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-gray-400 font-semibold text-xs mb-3">Mollie content</h3>
          <ul className="space-y-6">
            {mollieItems.map((item, i) => (
              <li key={i} className="flex items-start group ">
                {/* <item.icon className="text-gray-400 group-hover:text-white mr-4 text-2xl" /> */}
                <div className="flex flex-col cursor-pointer">
                  <div className="flex text-gray-300 group-hover:text-white items-center">
                    <h3 className=" text-sm font-semibold">{item.title}</h3>
                    <FaArrowRight className="text-xs  ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-gray-400 text-xs">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResourcesMegaMenu;
