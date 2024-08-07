import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

interface PartnersMegaMenuProps {
  parentRef: React.RefObject<HTMLLIElement>;
}

interface MenuItem {
  title: string;
  description: string;
  link: string;
}

const PartnersMegaMenu: React.FC<PartnersMegaMenuProps> = ({ parentRef }) => {
  const mollieItems: MenuItem[] = [
    {
      title: "For SaaS and Ecommerce",
      description: "Explore our SaaS and Ecommerce Partner Program",
      link: "",
    },
    {
      title: "For Agencies",
      description: "Learn about our Agency Partner Program",
      link: "",
    },
  ];

  const [leftOffset, setLeftOffset] = useState(0);

  useEffect(() => {
    if (parentRef.current) {
      const parentRect = parentRef.current.getBoundingClientRect();
      const centerOffset = parentRect.left + parentRect.width / 2;
      setLeftOffset(centerOffset - 500); // 200 is half the width of the mega menu
    }
  }, [parentRef]);

  return (
    <div
      className="absolute bg-gray-900 p-6 w-[400px] rounded-b-lg shadow-lg"
      style={{
        top: "calc(100% + 1rem)",
        left: `${leftOffset}px`,
      }}
    >
      <ul className="space-y-4">
        {mollieItems.map((item, i) => (
          <li key={i} className="flex items-start group ">
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
  );
};

export default PartnersMegaMenu;
