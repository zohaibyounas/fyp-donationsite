import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Link as RouterLink } from 'react-router-dom';
import DonateBtn from './DonateBtn';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-black flex p-4 w-full fixed top-0 z-50 justify-between items-center">
      <div className="text-lg font-bold">
        <Link to="/#main" className="text-white" onClick={closeMenu}>
          Donation <span className="text-yellow-500">Site</span>
        </Link>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div
        className={`${isOpen ? 'flex' : 'hidden'} flex-col gap-10 items-center justify-center fixed inset-0 bg-black text-white md:static md:bg-transparent md:flex md:flex-row md:space-x-20`}
      >
        <button className="absolute top-4 right-4 md:hidden" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <Link smooth to="/#main" className="py-2 md:py-0 text-lg hover:bg-yellow-400 rounded hover:p-1 cursor-pointer" onClick={closeMenu}>
          Home
        </Link>
        <Link smooth to="/#about" className="py-2 md:py-0 text-lg hover:bg-yellow-400 rounded hover:p-1 cursor-pointer" onClick={closeMenu}>
          About Us
        </Link>
        <Link smooth to="/#what-we-do" className="py-2 md:py-0 text-lg hover:bg-yellow-400 rounded hover:p-1 cursor-pointer" onClick={closeMenu}>
          What We Do
        </Link>
        <Link smooth to="/#contact" className="py-2 md:py-0 text-lg hover:bg-yellow-400 rounded hover:p-1 cursor-pointer" onClick={closeMenu}>
          Contact Us
        </Link>
        <RouterLink to="/form" className="py-2 md:py-0 text-lg hover:bg-yellow-400 rounded hover:p-1 cursor-pointer" onClick={closeMenu}>
          Login
        </RouterLink>
      
      </div>
      <DonateBtn />
    </nav>
  );
};

export default Navbar;
