import React from "react";
import { Logo } from "./Logo";

export const Footer: React.FC = () => {
  return (
    <footer className="px-6 md:px-10 py-8 border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <Logo />
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Support</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
        </div>
        
        <span className="text-sm text-gray-500">© 2025 Enver, All Rights Reserved</span>
      </div>
    </footer>
  );
};