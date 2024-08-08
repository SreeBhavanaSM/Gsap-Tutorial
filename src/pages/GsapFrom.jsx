import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const GsapFrom = () => {
  useEffect(() => {
    gsap.from('#blue-box', {
      x: 300,
      y:200,
      duration: 3,
      repeat: -1,
      ease: "power1.out"
    });
  }, []); // Empty dependency array to run the effect once on mount

  return (
    <div>
      <h1 className="mt-5">Hello, this is Gsap.from</h1>
      <div className="mt-20">
        <div id="blue-box" className="w-20 h-20 bg-green-300 rounded-lg"></div>
      </div>
    </div>
  );
}

export default GsapFrom;
