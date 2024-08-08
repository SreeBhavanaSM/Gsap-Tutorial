import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase); // Register the plugin with GSAP

const GsapCustomEase = () => {
  useEffect(() => {
    // Create the custom ease
    CustomEase.create(
      'custom',
      "M0,0 C0,0 0.14,0.089 0.185,0.104 0.224,0.117 0.298,0.091 0.335,0.109 0.371,0.127 0.415,0.218 0.449,0.242 0.482,0.266 0.57,0.268 0.6,0.297 0.632,0.329 0.653,0.448 0.681,0.485 0.708,0.522 0.796,0.551 0.82,0.592 0.845,0.638 0.824,0.751 0.846,0.8 0.869,0.853 1,1 1,1 "
    );

    // Apply the animation to the target element
    gsap.to('#blue-box', {
      duration: 8,
      rotation: 360,
      borderRadius:"100%",
      ease: 'custom',
      y: 300,
      x:700,
      z:300,
      scale :3,
    });
  }, []); // Empty dependency array to run the effect once on mount

  return (
    <div>
      <h1 className="mt-5">Hello, this is Custom Ease in Gsap</h1>
      <div className="mt-20">
        <div id="blue-box" className="w-20 h-20 bg-blue-300 rounded-lg"></div>
      </div>
    </div>
  );
};

export default GsapCustomEase;
