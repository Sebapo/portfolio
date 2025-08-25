import React, { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Shield className="w-8 h-8 text-blue-400" />
            <span className="ml-2 text-xl font-bold">Francis Sebapo</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 hover:bg-gray-700 rounded">About</a>
              <a href="#skills" className="block px-3 py-2 hover:bg-gray-700 rounded">Skills</a>
              <a href="#projects" className="block px-3 py-2 hover:bg-gray-700 rounded">Projects</a>
              <a href="#contact" className="block px-3 py-2 hover:bg-gray-700 rounded">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;