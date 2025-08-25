import React, { useState } from 'react';
import { Shield, Terminal } from 'lucide-react';
import CalendarModal from './CalendarModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="pt-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-24 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <div className="flex items-center justify-center md:justify-start mb-8">
            <Shield className="w-16 h-16 text-blue-400 mr-4" />
            <Terminal className="w-16 h-16 text-green-400" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Francis Sebapo</h1>
          <h2 className="text-3xl mb-8 text-gray-300">Full Stack Developer & Ethical Hacker</h2>
          <p className="text-xl mb-12 max-w-2xl text-gray-400">
            Crafting secure and scalable web applications while ensuring digital safety through ethical hacking practices.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors">
              Get in Touch
            </a>
            <a href="#projects" className="border border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg transition-colors">
              View Projects
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg transition-colors"
            >
              Set Appointment
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl"></div>
            <img 
              src="/mm.jpeg" // Updated to use the new image
              alt="Francis Sebapo"
              className="relative w-64 h-64 object-cover rounded-full border-4 border-blue-400 shadow-2xl"
            />
          </div>
        </div>
      </div>
      <CalendarModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Hero;