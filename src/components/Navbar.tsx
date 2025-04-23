import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Logo } from "./Logo";

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`px-6 py-4 md:py-6 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-gray-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <Logo />

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white p-2"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-gray-300 text-sm">
            <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
            <a href="#services" className="hover:text-purple-400 transition-colors">Services</a>
            <a href="#projects" className="hover:text-purple-400 transition-colors">Our Project</a>
            <a href="#about" className="hover:text-purple-400 transition-colors">About us</a>
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <a href="#contact">
              <Button variant="outline" className="px-4 py-2 text-sm hover:border-purple-400 hover:text-purple-400">
                Contact us
              </Button>
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}>
          <div className="flex flex-col gap-4 py-4">
            <a 
              href="#home" 
              className="py-2 text-gray-300 hover:text-purple-400 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#services" 
              className="py-2 text-gray-300 hover:text-purple-400 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#projects" 
              className="py-2 text-gray-300 hover:text-purple-400 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Our Project
            </a>
            <a 
              href="#about" 
              className="py-2 text-gray-300 hover:text-purple-400 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              About us
            </a>
            <a 
              href="#contact" 
              onClick={() => setMenuOpen(false)}
            >
              <Button className="w-full bg-indigo-500 hover:bg-purple-600 px-4 py-2 text-sm">
                Contact us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
