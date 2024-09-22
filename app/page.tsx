'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SiNextdotjs } from 'react-icons/si';

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 to-cyan-500 p-4 fixed w-full z-10 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold flex items-center">
          <SiNextdotjs className="mr-2 text-white" size={30} />
          <Link href="/" className="text-yellow-300 hover:text-yellow-400 transition">My Portfolio</Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-10">
          <Link href="/about" className="text-white hover:text-gray-200 transition">About</Link>
          <Link href="/contact" className="text-white hover:text-gray-200 transition">Contact</Link>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 bg-white shadow-lg rounded-lg p-4 absolute w-full left-0">
          <Link href="/about" className="text-gray-800 hover:bg-gray-200 rounded p-2 transition">About</Link>
          <Link href="/contact" className="text-gray-800 hover:bg-gray-200 rounded p-2 transition">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
