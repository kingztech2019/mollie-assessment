import React, { useRef, useState } from 'react';
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons
import ProductMenu from './menus/ProductMenu';
import ResourcesMegaMenu from './menus/ResourcesMenu';
import DevelopersMegaMenu from './menus/DevelopersMegaMenu';
import ContactMegaMenu from './menus/ContactMegaMenu';
import PartnersMegaMenu from './menus/PartnerMegaMenu';

interface HeaderItem {
  title: string;
  ref: React.RefObject<HTMLLIElement>;
  MenuComponent: React.FC<{ parentRef: React.RefObject<HTMLLIElement> }>;
}

const Header: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false); // State to track mobile menu visibility

  const headerItems: HeaderItem[] = [
    { title: 'Products', ref: useRef<HTMLLIElement>(null), MenuComponent: ProductMenu },
    { title: 'Partners', ref: useRef<HTMLLIElement>(null), MenuComponent: PartnersMegaMenu },
    { title: 'Developers', ref: useRef<HTMLLIElement>(null), MenuComponent: DevelopersMegaMenu },
    { title: 'Resources', ref: useRef<HTMLLIElement>(null), MenuComponent: ResourcesMegaMenu },
    { title: 'Contact', ref: useRef<HTMLLIElement>(null), MenuComponent: ContactMegaMenu },
  ];

  return (
    <header className="bg-black text-white p-4 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">mollie</div>
        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </div>
        {/* Desktop Navigation */}
        <nav className={`md:block ${menuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row md:space-x-8">
            {headerItems.map(({ title, ref, MenuComponent }) => (
              <li
                key={title}
                className="cursor-pointer flex items-center relative"
                onMouseEnter={() => setActiveMenu(title)}
                onMouseLeave={() => setActiveMenu(null)}
                ref={ref}
              >
                <span className="text-gray-300 text-xs hover:text-white">{title}</span>
                <span className="pl-1">
                  {activeMenu === title ? <FaChevronUp className="ml-1" /> : <FaChevronDown className="ml-1" />}
                </span>
                {activeMenu === title && <MenuComponent parentRef={ref} />}
              </li>
            ))}
            <li><a href="#" className="text-gray-300 hover:text-white text-xs">Pricing</a></li>
          </ul>
        </nav>
        <div className="hidden md:block">
          <button className="bg-gray-700 px-4 py-2 rounded mr-2">Login</button>
          <button className="bg-blue-600 px-4 py-2 rounded">Sign up</button>
        </div>
      </div>
      {/* Mobile Buttons */}
      <div className={`flex md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
        <button className="bg-gray-700 px-4 py-2 rounded mr-2">Login</button>
        <button className="bg-blue-600 px-4 py-2 rounded">Sign up</button>
      </div>
    </header>
  );
};

export default Header;
