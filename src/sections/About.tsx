
// Mark the component as a Client Component
'use client';

import { useEffect, useRef } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiGraphql, SiFirebase, SiFigma } from "react-icons/si";

export const AboutSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Define the skills with icons
  const skills = [
    { name: "React.js", icon: <FaReact className="text-blue-500 text-4xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-500 text-4xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500 text-4xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400 text-4xl" /> },
    { name: "GraphQL", icon: <SiGraphql className="text-pink-500 text-4xl" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-4xl" /> },
    { name: "Figma", icon: <SiFigma className="text-purple-500 text-4xl" /> },
  ];

  // Infinite loop scroll effect
  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollAmount = 0;

    const autoScroll = () => {
      if (carousel) {
        scrollAmount += 1; // Adjust scroll speed
        if (scrollAmount >= carousel.scrollWidth - carousel.offsetWidth) {
          scrollAmount = 0; // Reset scroll to the start
        }
        carousel.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    };

    const interval = setInterval(autoScroll, 20); // Adjust scroll speed
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="py-12 sm:py-16 md:py-28 lg:py-60 bg-gray-900 relative z-0">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mb-6">
            About Me
          </h2>

          {/* Description */}
          <p className="text-white/70 text-base sm:text-lg md:text-xl leading-relaxed mb-8">
          I am a student at Telkom University, majoring in Computer Technology. In the course of my studies, 
          I have mastered several programming languages, such as HTML, CSS, JavaScript, and PHP. 
          These skills help me in developing responsive and dynamic web applications. 
          I always strive to improve my technical skills to achieve deeper expertise in this field.
          </p>

          {/* Skills Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-6 items-center overflow-x-auto no-scrollbar mt-12"
            style={{ overflowX: 'hidden' }}  // Directly hide horizontal scrollbar
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg p-6 w-32 h-32 transition-all"
              >
                {skill.icon}
                <span className="mt-2 text-sm text-center">{skill.name}</span>
              </div>
            ))}
            {/* Duplicate skills for seamless loop */}
            {skills.map((skill, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex flex-col items-center justify-center bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg p-6 w-32 h-32 transition-all"
              >
                {skill.icon}
                <span className="mt-2 text-sm text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
