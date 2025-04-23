import React from "react";
import { Button } from "./ui/button";

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="px-6 md:px-10 py-20 bg-gray-900"
      data-aos="fade-up"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
            Contact us for the service <br /> you want to use
          </h2>
        </div>
        <Button className="px-6 py-3 text-base shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all">
          Contact us
        </Button>
      </div>
    </section>
  );
};
