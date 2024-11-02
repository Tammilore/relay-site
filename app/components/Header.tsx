"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex flex-wrap items-center justify-between py-5 px-7" data-controller="navbar" data-navbar-hidden-class="hidden">
      <div className="flex items-center gap-x-3">
        <Link href="/">
          <img src="/relay-logo.png" alt="Maybe Logo" className="h-6" />
        </Link>
        <span className="px-1.5 py-0.5 text-[10px] uppercase bg-white border rounded-full border-gray-200/75 text-gray-500">Beta</span>
      </div>
      
      <nav className="hidden md:flex text-sm text-center gap-x-1">
        <Link href="/" className="px-3 py-1.5 text-gray-800 hover:text-gray-900 hover:bg-alpha-black-50 rounded-xl">
          Features
        </Link>
        <Link href="/" className="px-3 py-1.5 text-gray-800 hover:text-gray-900 hover:bg-alpha-black-50 rounded-xl">
          Docs
        </Link>
        <Link href="https://tryrelay.canny.io/changelog" className="px-3 py-1.5 text-gray-800 hover:text-gray-900 hover:bg-alpha-black-50 rounded-xl">
          Changelog
        </Link>
        <Link href="https://github.com/tryrelay/relay" className="px-3 py-1.5 text-gray-800 hover:text-gray-900 hover:bg-alpha-black-50 rounded-xl">
          Contribute
        </Link>
      </nav>
      
      <div className="hidden md:flex gap-x-2">
        <Link href="https://github.com/tryrelay/relay" className="px-3 py-[0.45rem] text-sm font-medium text-black rounded-xl hover:bg-alpha-black-50 bg-transparent border border-gray-300 hover:border-gray-300 flex items-center gap-2">
          <img src="/icon-github.svg" alt="GitHub icon" className="h-4 w-4" />
          Give us a star
        </Link>
      </div>
      
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="text-gray-800 focus:outline-none">
          <Image src="/icon-hamburger.svg" alt="Menu Icon" width={24} height={24} />
        </button>
      </div>
      
      {isMobileMenuOpen && (
        <nav className="flex flex-col mt-4 space-y-2 text-sm text-center w-full md:hidden">
          <Link href="/" className="px-3 py-1.5 text-gray-800 hover:text-gray-900 hover:bg-alpha-black-50 rounded-xl">
            Features
          </Link>
          <Link href="/" className="px-3 py-1.5 text-gray-800 hover:text-gray-900 hover:bg-alpha-black-50 rounded-xl">
            Docs
          </Link>
          <Link href="https://tryrelay.canny.io/changelog" className="px-3 py-1.5 text-gray-800 hover:text-gray-900 hover:bg-alpha-black-50 rounded-xl">
            Changelog
          </Link>
          <Link href="https://github.com/tryrelay/relay" className="px-3 py-1.5 text-gray-800 hover:text-gray-900 hover:bg-alpha-black-50 rounded-xl">
            Contribute
          </Link>
          <Link href="https://github.com/tryrelay/relay" className="px-3 py-[0.45rem] text-sm font-medium text-black rounded-xl hover:bg-alpha-black-50 bg-transparent border border-gray-300 hover:border-gray-300 flex items-center gap-2">
            <img src="/icon-github.svg" alt="GitHub icon" className="h-4 w-4" />
            Give us a star
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
