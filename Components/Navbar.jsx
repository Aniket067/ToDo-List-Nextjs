// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className='flex py-3 flex-wrap justify-around'>
//         <h1 className='text-lg font-semibold'>ToDo List</h1>
//         <ul className='flex gap-[40px] font-medium'>
//             <li>Home</li>
//             <li>Product</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </div>
//   )
// }

// export default Navbar

"use client"; // This directive marks the component as a client component

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-2xl font-bold tracking-wide">ToDo List</h1>
        <ul className="hidden md:flex space-x-8 font-medium">
          <li className="hover:text-gray-200">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-gray-200">
            <a href="#">Product</a>
          </li>
          <li className="hover:text-gray-200">
            <a href="#">About</a>
          </li>
          <li className="hover:text-gray-200">
            <a href="#">Contact</a>
          </li>
        </ul>
        <button 
          className="md:hidden text-2xl focus:outline-none" 
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>
      <div className={`md:hidden px-6 pt-2 pb-4 ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="space-y-2 font-medium">
          <li className="hover:text-gray-200">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-gray-200">
            <a href="#">Product</a>
          </li>
          <li className="hover:text-gray-200">
            <a href="#">About</a>
          </li>
          <li className="hover:text-gray-200">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
