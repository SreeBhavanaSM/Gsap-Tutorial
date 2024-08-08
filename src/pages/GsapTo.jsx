import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const GsapTo = () => {
  useEffect(() => {
    gsap.to('#blue-box', {
      x: 250,
      duration: 2,repeat: -1,yoyo: true , rotation:360,ease :'elastic' // Add duration for the animation
    });
  }, []); // Empty dependency array to run the effect once on mount

  return (
    <div>
      <h1 className="mt-5">Hello, this is Gsap.to</h1>
      <div className="mt-20">
        <div id="blue-box" className="w-20 h-20 bg-blue-300 rounded-lg"></div>
      </div>
    </div>
  );
}

export default GsapTo;
