import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const GsapStagger2 = () => {
    useEffect ( () => {
        gsap.to(
            ".stagger-box",{
                duration: 1,
                scale: 0,
                y: 40,
                repeat:-1,
                yoyo:true,
                ease: "power1.inOut",
                stagger: {
                    grid: [5,11],
                    from: "center",
                    // from: "end",
                    // from: "edge",
                    // from: "random",
                    ease: "power2.in",
                    amount: 1.5
                  }
            }
        )
    })
  return (
    <div>
      <h1 className="mt-5">Hello, this is Gsap Stagger 2 :detailed animation</h1>
      <div className="mt-20 mx-60 flex">
        <div  className="w-20 h-20 bg-green-50 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-green-100 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-green-200 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-green-300 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-green-400 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-green-500 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-green-600 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-green-700 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-green-800 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-green-900 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-green-950 rounded-lg mx-5 mb-2 stagger-box"></div>
      </div>
      <div className="mt-5 mx-60 flex">
        <div  className="w-20 h-20 bg-yellow-50 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-yellow-100 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-yellow-200 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-yellow-300 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-yellow-400 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-yellow-500 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-yellow-600 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-yellow-700 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-yellow-800 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-yellow-900 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-yellow-950 rounded-lg mx-5 mb-2 stagger-box"></div>
      </div>
      <div className="mt-5 mx-60 flex">
        <div  className="w-20 h-20 bg-red-50 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-red-100 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-red-200 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-red-300 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-red-400 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-red-500 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-red-600 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-red-700 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-red-800 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-red-900 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-red-950 rounded-lg mx-5 mb-2 stagger-box"></div>
      </div>
      <div className="mt-5 mx-60 flex">
        <div  className="w-20 h-20 bg-pink-50 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-pink-100 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-pink-200 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-pink-300 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-pink-400 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-pink-500 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-pink-600 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-pink-700 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-pink-800 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-pink-900 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-pink-950 rounded-lg mx-5 mb-2 stagger-box"></div>
      </div>
      <div className="mt-5 mx-60 flex">
        <div  className="w-20 h-20 bg-purple-50 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-purple-100 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-purple-200 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-purple-300 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-purple-400 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-purple-500 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-purple-600 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-purple-700 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-purple-800 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-purple-900 rounded-lg mx-5 mb-2 stagger-box"></div>
        <div  className="w-20 h-20 bg-purple-950 rounded-lg mx-5 mb-2 stagger-box"></div>
      </div>
    </div>
  );
}

export default GsapStagger2;
