import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "keen-slider/keen-slider.min.css";

export const ProjectsSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 1.1, spacing: 12 },
      breakpoints: {
        "(min-width: 768px)": {
          disabled: true, // <-- disables keen-slider on tablet/desktop
        },
      },
    }
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    {
      title: "Mobile App Design",
      image: "assets/images/Projects_Images/Project_1.png",
      category: "UI/UX Design",
    },
    {
      title: "Interior Design Platform",
      image: "assets/images/Projects_Images/Project_2.png",
      category: "Web Design",
    },
    {
      title: "Photography Portfolio",
      image: "assets/images/Projects_Images/Project_3.png",
      category: "Web Platform",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black text-white relative">
      <h2 className="text-3xl font-bold text-center mb-16" data-aos="fade-up">
        Our Awesome Portfolio
      </h2>

      <div className="relative">
        {/* Carousel or Flex */}
        <div
          ref={sliderRef}
          className={`${isMobile ? "keen-slider" : "flex justify-center gap-10 px-6 flex-wrap md:flex-nowrap"}`}
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className={`${isMobile ? "keen-slider__slide" : ""}
                group relative w-[300px] h-[200px] rounded-2xl overflow-hidden bg-gray-800 shadow-xl
                ${i === 1 && !isMobile ? "mt-8" : i === 2 && !isMobile ? "mt-16" : ""}
              `}
              data-aos="fade-up"
              data-aos-delay={100 + i * 100}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="text-sm text-indigo-400">{project.category}</span>
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                </div>
              </div>

              <div className="absolute -inset-[2px] border-[8px] border-gray-900 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Navigation buttons (below) */}
        {isMobile && (
          <div className="flex justify-center gap-6 mt-8">
            <button
              onClick={() => instanceRef.current?.prev()}
              className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-white shadow"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full text-white shadow"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

        {/* Navigation Dots (optional for now static) */}
        {isMobile && (
          <div className="flex justify-center gap-2 mt-4">
            {projects.map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-gray-700"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
