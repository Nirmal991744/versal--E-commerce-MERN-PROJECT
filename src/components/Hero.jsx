import React, { useEffect, useRef, useState } from "react";
import localImage from "../assets/hero1.jpg";

// If the image is in the public folder, use path from public root
const slides = [
  {
    id: 1,
    image: localImage,
    title: "Mega Sale",
    subtitle: "Up to 50% off on top brands",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1600180758890-6e4e347f3dfb?auto=format&fit=crop&w=1400&q=80",
    title: "Summer Collection",
    subtitle: "Explore lightweight outfits",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1622335785350-7f0eeb597b4b?auto=format&fit=crop&w=1400&q=80",
    title: "Trendy Accessories",
    subtitle: "Style your look with top picks",
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);
  const slideInterval = useRef(null);

  const goToNext = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    slideInterval.current = setInterval(goToNext, 4000);
    return () => clearInterval(slideInterval.current);
  }, []);

  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full h-[70vh] relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-4">
              <h2 className="text-4xl md:text-5xl font-bold">{slide.title}</h2>
              <p className="mt-3 text-lg md:text-xl">{slide.subtitle}</p>
              <button className="mt-5 px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full hover:bg-gray-200"
      >
        ❮
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full hover:bg-gray-200"
      >
        ❯
      </button>
    </div>
  );
}

export default Hero;
