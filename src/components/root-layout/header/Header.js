"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Menü linkleri
  const menuLinks = [
    { name: "Anasayfa", href: "#" },
    { name: "Hakkımızda", href: "#" },
    { name: "Hizmetlerimiz", href: "#" },
    { name: "Projelerimiz", href: "#" },
    { name: "İletişim", href: "#" }
  ];

  return (
    <nav className="absolute top-0 pt-6 pb-4 w-full z-50">
      <div className="container mx-auto">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="relative w-48 h-24">
              <Image fill src="/logo/logo.png" alt="logo" className="object-contain z-50" />
            </div>
          </div>

          {/* Hamburger Menu Button */}
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)} // Toggle the menu on click
              className="text-white hover:text-blue-200 focus:outline-none md:block z-50"
            >
              <svg
                className="h-12 w-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  // Close Icon when menu is open
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  // Hamburger Icon when menu is closed
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-95 flex flex-col justify-start items-start z-40 transform transition-transform duration-500 ease-in-out">
          <div className="w-full flex flex-col items-start pt-28 ps-4">
            {/* Menü Öğeleri */}
            {menuLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className={`group inline text-white px-4 py-6 text-3xl font-semibold relative transition-all duration-500 ease-in-out transform opacity-0 animate-slideInFromLeft ${isOpen ? 'opacity-100' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }} // Her bir link için animasyon gecikmesi
              >
                {link.name}
                {/* Alt çizgi */}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-[#00BDCA] w-0 group-hover:w-full animate-slideLine transition-all duration-300`}></span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
