import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';

interface ContactMegaMenuProps {
  parentRef: React.RefObject<HTMLLIElement>;
}

interface MenuItem {
    title: string;
    description: string;
    link:string;
  }

const ContactMegaMenu: React.FC<ContactMegaMenuProps> = ({ parentRef }) => {

    const mollieItems: MenuItem[] = [
        {
          title: "For shoppers",
          description: "Find out why Mollie is on your bank statement",
          link: "",
        },
        {
          title: "For Mollie customers",
          description: "Reach out to our customer support team",
          link: "",
        },
        {
          title: "Contact sales",
          description: "Discover how we can help your business",
          link: "",
        },
        
      ];
  const [leftOffset, setLeftOffset] = useState(0);

  useEffect(() => {
    console.log(parentRef.current,"REF");
    if (parentRef.current) {
      const parentRect = parentRef.current.getBoundingClientRect();
      const centerOffset = parentRect.left + parentRect.width / 2;
      setLeftOffset(centerOffset - 1000); // 200 is half the width of the mega menu
    }
  }, [parentRef]);

  return (
    <div 
      className="absolute bg-gray-900 p-6 w-[400px] rounded-b-lg shadow-lg"
      style={{ 
        top: 'calc(100%)',
        left: `${leftOffset}px` 
      }}
    >
      <h3 className="text-gray-400 text-xs font-semibold mb-3">Get in touch</h3>
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
      <div className="mt-6 bg-blue-600 rounded-lg p-4">
        <h4 className="text-white font-semibold flex items-center mb-2">
          Help Centre <FaExternalLinkAlt className="ml-1 text-xs" />
        </h4>
        <p className="text-white text-sm mb-4">Have a question? Find the answer on our Help Centre.</p>
        <div className="bg-blue-700 rounded-lg p-3">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
          <div className="bg-white text-blue-600 rounded p-2 text-sm">
            Ask MollieGPT a question
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMegaMenu;