import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative tracking-wider min-h-screen w-full">
      <div className="min-h-screen w-full">
        <div className="absolute inset-0 h-full">
          <Image
            src="/hero/hero.png"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
            alt="hero cover image"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute top-1/3 z-50 max-w-3xl px-6 md:px-8">
          <div className="tracking-wider text-white">
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-4 drop-shadow-lg">
              Discover Your Style
            </h1>
            <p className="text-lg md:text-xl font-medium leading-relaxed drop-shadow-md">
              Shop the latest trends in fashion, electronics, and more — all in
              one place. Quality you trust, prices you'll love.
            </p>
          </div>
          <div className="flex justify-start mt-8">
            <button className="cursor-pointer transition-all duration-300 px-6 py-4 bg-blue-600 hover:bg-blue-700 uppercase text-white rounded-md font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
