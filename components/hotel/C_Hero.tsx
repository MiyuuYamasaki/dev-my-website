'use client';

import { useState, useEffect } from 'react';

const images = ['/room1.jpg', '/room2.jpg', '/room3.jpg', '/room4.jpg'];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center font-serif">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to Luxury Haven
          </h1>
          <p className="text-xl md:text-2xl text-white">
            Experience unparalleled comfort and elegance
          </p>
        </div>
      </div>
    </section>
  );
}
