"use client"

import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Typewriter } from 'react-simple-typewriter';

export const HeroSection = () => {
  return (
    <div className="py-16 sm:py-24 md:py-32 lg:py-48 relative z-0 ">

      {/* Noise Background */}
      <div
        className="absolute inset-0 -z-30 opacity-5 bg-cover bg-center"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>

      {/* Ring Hero */}
      {/* <div className="absolute inset-0 flex justify-center items-center -z-20">
        <div className="w-[690px] h-[690px] rounded-full border border-gray-700 animate-pulse"></div>
        <div className="w-[890px] h-[890px] rounded-full border border-gray-800"></div>
      </div> */}

      <div className="container px-6 sm:px-8 lg:px-12 mx-auto">
        <div className="flex flex-col items-center text-center">

          {/* Gambar */}
          <Image
            src={memojiImage}
            className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-48 lg:h-48"
            alt="Person peeking from behind laptop"
          />

          {/* Status Proyek */}
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 mt-4 inline-flex items-center gap-3 rounded-lg">
            <div className="bg-green-500 w-3 h-3 rounded-full animate-blink"></div>
            <div className="text-white text-xs sm:text-sm md:text-base">
              Available for new projects
            </div>
          </div>

          {/* Heading dan Deskripsi */}
          <div className="uppercase max-w-2xl mx-auto mt-8">
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center tracking-wide leading-snug bg-gradient-to-l from-white via-blue-500 to-skye-400 bg-clip-text text-transparent animate-gradient">
          Hafiz Rafie Aditya
          </h1>

            <h2 className="mt-2 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
              <Typewriter
                words={['Web Developer', 'Network Engineer', 'Web Designer']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            </h2>
            
          </div>


          {/* Tombol */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <button className="gap-2 border-2 text-white px-4 sm:px-6 h-10 sm:h-12 rounded animate-borderPulse hover:bg-blue-500 transition text-sm sm:text-base">
              <span>Explore My Work</span>
            </button>
            <button className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white px-4 sm:px-6 h-10 sm:h-12 rounded border border-gray-500 hover:bg-gradient-to-r hover:from-blue-600 hover:via-blue-500 hover:to-blue-400 hover:border-blue-500 transition-all duration-50 ease-in-out flex items-center gap-2 text-sm sm:text-base">
              <span className="animate-bounce">👋</span>
              <span className="font-semibold">Let's Connect</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
