import React from "react";
import { PlayCircle } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="px-6 md:px-10 py-16 max-w-7xl mx-auto" data-aos="fade-up">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
      <p className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight">
  Why Enver Is The <br /> Best Choice?
</p>

        <p className="text-gray-400 md:max-w-md">
          Watch this one minute video so you understand why you should use our services!
        </p>
      </div>
      <div className="relative group cursor-pointer overflow-hidden rounded-xl">
        <img 
          src="assets/images/aboutImage.png" 
          alt="Team Meeting" 
          className="rounded-xl w-full max-h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 group-hover:bg-black/40">
          <div className="bg-indigo-500 p-6 rounded-full transition-transform duration-300 group-hover:scale-110">
            <PlayCircle className="w-10 h-10 sm:w-14 sm:h-14 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};
