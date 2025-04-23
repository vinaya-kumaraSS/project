import React from "react";
import { Code, PenTool, Image, Film, Camera, Monitor } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export const ServiceSection: React.FC = () => {
  const serviceData = [
    { 
      title: "Development", 
      icon: <Code className="w-8 h-8 text-indigo-500" />,
      description: "Create a platform with the best and coolest quality from us.",
      bgColor: "bg-indigo-500/10",
      shadowColor: "bg-indigo-500/20" 
    },
    { 
      title: "UI/UX Designer", 
      icon: <PenTool className="w-8 h-8 text-rose-500" />,
      description: "We provide UI/UX Design services, and of course with the best quality.",
      bgColor: "bg-rose-500/10",
      shadowColor: "bg-rose-500/20" 
    },
    { 
      title: "Graphic Design", 
      icon: <Image className="w-8 h-8 text-amber-500" />,
      description: "We provide Graphic Design services, with the best designers.",
      bgColor: "bg-amber-500/10",
      shadowColor: "bg-amber-500/20" 
    },
    { 
      title: "Motion Graphics", 
      icon: <Film className="w-8 h-8 text-emerald-500" />,
      description: "Create a platform with the best and coolest quality from us.",
      bgColor: "bg-emerald-500/10",
      shadowColor: "bg-emerald-500/20" 
    },
    { 
      title: "Photography", 
      icon: <Camera className="w-8 h-8 text-blue-500" />,
      description: "We provide Photography services, and of course with the best quality.",
      bgColor: "bg-blue-500/10",
      shadowColor: "bg-blue-500/20" 
    },
    { 
      title: "Videography", 
      icon: <Monitor className="w-8 h-8 text-purple-500" />,
      description: "Create the best platform with the best video quality with us.",
      bgColor: "bg-purple-500/10",
      shadowColor: "bg-purple-500/20" 
    },
  ];

  return (
    <section id="services" className="px-6 md:px-10 py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 md:mb-12 text-center" data-aos="fade-up">
          The Service We Provide <br /> For You
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {serviceData.map(({ title, icon, description, bgColor, shadowColor }, index) => (
            <Card 
              key={title} 
              className=""
              data-aos="fade-up" 
              data-aos-delay={100 + index * 50}
            >
              <CardContent className="py-8 text-center">
                <div className="relative flex justify-center items-center mb-4">
                  {/* Circular shadow */}
                  <div className={`absolute w-16 h-16 rounded-full ${shadowColor} blur-2xl opacity-50`} aria-hidden="true"></div>
                  {/* Icon */}
                  <div className={`relative z-10 w-14 h-14 flex items-center justify-center rounded-full ${bgColor}`}>
                    {icon}
                  </div>
                </div>
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-sm text-gray-400">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
