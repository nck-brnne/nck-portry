import React from 'react';
import { Columns } from 'react-feather';

const images = [
  '/data/homies.jpg',
  '/data/Solitude.jpg',
  '/data/lambo.jpg',
  '/data/yz.jpg',
  '/data/Lisa.jpg',
  '/data/mylogo.jpg',
  '/data/valir.jpg',
  '/data/stygian.jpg',
  '/data/fanta.jpg',
  '/data/rentcont.jpg',
];

const GraphicsGrid = () => {
  return (
    <div className="columns-1 sm:Columns-2 lg:columns-3 py-10 md:py-10 gap-3">
      {images.map((src, index) => (
        <div key={index} className="mb-4 break-inside-avoid">
          <img src={src} className="w-full object-cover" />
        </div>
      ))}
    </div>
  );
};

export default GraphicsGrid;
