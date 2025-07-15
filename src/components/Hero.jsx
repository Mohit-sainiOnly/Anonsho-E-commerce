// src/components/Hero.jsx

import React, { useEffect, useState } from 'react';
import slide1 from '../assets/slide4.png';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import slide4 from '../assets/slide1.jpg';

const images = [slide1, slide2, slide3, slide4];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-[3/2] sm:aspect-[16/7] lg:aspect-[16/5] overflow-hidden mb-6">
      {images.map((img, index) => (
         <img
    key={index}
    src={img}
    alt={`Slide ${index + 1}`}
    loading="lazy"
    className={`absolute inset-0 w-full h-full object-fill transition-opacity duration-1000 ease-in-out ${
      index === current ? 'opacity-100 z-20' : 'opacity-0 z-10'
    }`}
    onError={(e) => {
      e.currentTarget.src = 'https://via.placeholder.com/1500x800?text=Image+Not+Found';
    }}
  />
      ))}

      {/* Optional Overlay Text */}
      {/* <div className="absolute inset-0 z-30 bg-black/30 backdrop-blur-sm flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-white">
          Welcome to Anonsho
        </h1>
        <p className="text-sm sm:text-lg text-gray-100 mt-2 max-w-xl">
          Discover top-rated trends, gadgets, fashion & more!
        </p>
      </div> */}
    </div>
  );
};

export default Hero;
