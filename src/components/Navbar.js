import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4 flex justify-between items-center">
      <div className="text-lg font-bold">
        <a  className='text-white'>Donation <span className="text-yellow-500">Site</span></a>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div className={`${isOpen ? "flex" : "hidden"} flex-col gap-10  items-center justify-center fixed inset-0 bg-black text-white md:static md:bg-transparent md:flex md:flex-row md:space-x-20 `}>
        <button className="absolute top-4 right-4 md:hidden" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <a className="py-2 md:py-0 text-lg hover:bg-yellow-400 rounded hover:p-1 cursor-pointer  ">Home</a>
        <a  className="py-2 md:py-0 text-lg  hover:bg-yellow-400 rounded hover:p-1 cursor-pointer">Donate</a>
        <a  className="py-2 md:py-0 text-lg  hover:bg-yellow-400 rounded hover:p-1 cursor-pointer">Way to give</a>
        <a  className="py-2 md:py-0 text-lg  hover:bg-yellow-400 rounded hover:p-1 cursor-pointer">Contact Us</a>
      </div>
        <button className='font-bold text-lg rounded text-black bg-yellow-500 px-4 mx-4 p-2 font-sans hover:text-black hover:bg-white hover:scale-110'>Donate Now</button>
      
    </nav>
  );
};

export default Navbar;
