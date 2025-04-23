import React from "react";
import { Button } from "./ui/button";

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="pt-28 md:pt-36 pb-20 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* TEXT CONTENT */}
        <div className="text-center md:text-left" data-aos="fade-up" data-aos-delay="100">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Build Your <br className="hidden sm:block" /> Awesome Platform
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto md:mx-0 mb-8 text-base sm:text-lg">
            Enver studio is a digital studio that offers several services such as UI/UX Design to developers, we will provide the best service for those of you who use our services.
          </p>
          <a href="#services">
            <Button className="px-6 py-3 text-base group">
              Our Services <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-[-1px]">↗</span>
            </Button>
          </a>
        </div>

        {/* IMAGE CONTENT */}
        <div className="flex justify-center items-center" data-aos="fade-up" data-aos-delay="200">
          <img 
            src="assets/images/heroImage.png" 
            alt="Creative professionals working together" 
            className="w-56 sm:w-64 md:w-72 rounded-2xl shadow-2xl relative z-10 transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};
