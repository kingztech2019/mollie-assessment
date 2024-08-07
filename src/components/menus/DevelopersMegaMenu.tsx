import React, { useEffect, useMemo, useState } from "react";
import { IconType } from "react-icons";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

interface DevelopersMegaMenuProps {
  parentRef: React.RefObject<HTMLLIElement>;
}

interface MenuItem {
  title: string;
  description: string;
  link: string;
  showIcon: boolean;
}

interface MollieItem {
  icon: IconType;
  title: string;
  description: string;
  link: string;
}

const DevelopersMegaMenu: React.FC<DevelopersMegaMenuProps> = ({ parentRef }) => {
  const [leftOffset, setLeftOffset] = useState(0);

  const menuItems: MenuItem[] = useMemo(() => [
    {
      title: "Developers portal",
      description: "Discover developer resources and updates",
      link: "",
      showIcon: true,
    },
    {
      title: "Libraries",
      description: "Integrate Mollie with ready-to-go libraries",
      link: "",
      showIcon: true,
    },
    {
      title: "Discord community",
      description: "Join our developer community",
      link: "",
      showIcon: false,
    },
  ], []);

  const mollieItems: MollieItem[] = useMemo(() => [
    {
      icon: FaExternalLinkAlt,
      title: "Docs",
      description: "Explore our API documentation and guides",
      link: "",
    },
    {
      icon: FaExternalLinkAlt,
      title: "Status",
      description: "Check our current system status",
      link: "",
    },
    {
      icon: FaExternalLinkAlt,
      title: "Changelog",
      description: "Read up on recent technical changes",
      link: "",
    },
  ], []);

  useEffect(() => {
    if (parentRef.current) {
      const parentRect = parentRef.current.getBoundingClientRect();
      const centerOffset = parentRect.left + parentRect.width / 2;
      setLeftOffset(centerOffset - 900); // 400 is half the width of the mega menu
    }
  }, [parentRef]);

  return (
    <div
      className="absolute bg-gray-900 p-6 w-[800px] rounded-b-lg shadow-lg"
      style={{
        top: "calc(100%)",
        left: `${leftOffset}px`,
      }}
    >
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-gray-400 text-xs font-semibold mb-3">Technical resources</h3>
          <ul className="space-y-4">
            {menuItems.map((item, i) => (
              <li key={i} className="flex items-start group">
                <div className="flex flex-col cursor-pointer">
                  <div className="flex text-white items-center">
                    <h3 className="inline-flex items-center text-sm font-semibold">
                      {item.title}
                      {!item.showIcon && (
                        <FaExternalLinkAlt className="ml-1 text-xs" />
                      )}
                    </h3>
                    {item.showIcon && (
                      <FaArrowRight className="text-xs ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </div>
                  <p className="text-gray-400 text-xs">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-gray-400 text-xs font-semibold mb-3">Mollie API</h3>
          <ul className="space-y-4">
            {mollieItems.map((item, i) => (
              <li key={i} className="flex items-start group">
                <div className="flex flex-col cursor-pointer">
                  <div className="flex text-white items-center">
                    <h3 className="inline-flex items-center text-sm font-semibold">
                      {item.title}
                      <FaExternalLinkAlt className="ml-1 text-xs" />
                    </h3>
                  </div>
                  <p className="text-gray-400 text-xs">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-6">
        <h3 className="text-white font-semibold mb-3">Integrations</h3>
        <p className="text-gray-400 text-sm mb-3">Connect Mollie to your platform and tech stack</p>
        <div className="grid grid-cols-3 gap-4">
          {[
            "Chargebee",
            "Sendcloud",
            "WeTicket",
            "Magento 2",
            "Shopify",
            "WooCommerce",
          ].map((integration, index) => (
            <div key={index} className="flex items-center bg-gray-800 rounded-md p-2">
              <div className="w-6 h-6 bg-gray-600 rounded mr-2"></div>
              <span className="text-white text-sm">{integration}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevelopersMegaMenu;
