'use client';

import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-3 w-full z-50 flex justify-between items-center px-4 backdrop-blur">
      {/* Logo atau judul */}
      <div className="text-white text-lg font-semibold">Hafiz Rafie.</div>

      {/* Menu untuk desktop */}
      <nav className="hidden md:flex gap-4 p-2.5 border border-white rounded-full">
        <a href="#" className="nav-item text-white hover:text-gray-300">
          Home
        </a>
        <a href="#" className="nav-item text-white hover:text-gray-300">
          About
        </a>
        <a href="#" className="nav-item text-white hover:text-gray-300">
          Project
        </a>
        <a href="#" className="nav-item text-white hover:text-gray-300">
          Contact
        </a>
        <a href="#" className="nav-item text-white hover:text-gray-300">
          Article
        </a>
      </nav>

      {/* Menu ikon hamburger untuk mobile */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        &#x22EE; {/* Ikon titik tiga */}
      </button>

      {/* Dropdown menu untuk mobile */}
      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-white/10 border border-white/15 backdrop-blur rounded-lg shadow-lg p-4">
          <a
            href="#"
            className="block text-white hover:text-gray-300 mb-2"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-white hover:text-gray-300 mb-2"
          >
            About
          </a>
          <a
            href="#"
            className="block text-white hover:text-gray-300 mb-2"
          >
            Project
          </a>
          <a
            href="#"
            className="block text-white hover:text-gray-300 mb-2"
          >
            Contact
          </a>
          <a
            href="#"
            className="block text-white hover:text-gray-300"
          >
            Article
          </a>
        </div>
      )}
    </div>
  );
};
