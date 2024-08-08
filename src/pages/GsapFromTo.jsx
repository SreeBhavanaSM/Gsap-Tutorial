import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const GsapFromTo = () => {
  useEffect(() => {
    gsap.fromTo('#blue-box', {
      x: 0,
      rotation:0,
      borderRadius:'0%'
    },
      {
        x: 550,
        rotation:360,
        borderRadius:'100%',
        duration: 3,
        repeat: -1,
        yoyo: true ,
        ease :'bounce.out'
      }
    );
    gsap.fromTo('#purple-box', {
      x: 550,
      rotation:0,
      borderRadius:'0%'
    },
      {
        x: 0,
        rotation:360,
        borderRadius:'100%',
        duration: 3,
        repeat: -1,
        yoyo: true ,
        ease :'bounce.inOut'
      }
    );
  }, []); // Empty dependency array to run the effect once on mount

  return (
    <div>
      <h1 className="mt-5">Hello, this is Gsap.fromTo</h1>
      <div className="mt-20">
        <div id="blue-box" className="w-20 h-20 bg-pink-300 rounded-lg"></div>
      </div>
      <div className="mt-20">
        <div id="purple-box" className="w-20 h-20 bg-purple-500 rounded-lg"></div>
      </div>
    </div>
  );
}

export default GsapFromTo;
