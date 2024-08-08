import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const GsapStagger = () => {
    useEffect ( () => {
        gsap.to(
            ".stagger-box",{
                y:400,
                stagger:1,
                duration:1,
                rotation:180,
                borderRadius:"100%",
                ease:"bounce.out"
            }
        )
    })
  return (
    <div>
      <h1 className="mt-5">Hello, this is Gsap Stagger</h1>
      <div className="mt-20 mx-60 flex">
        <div  className="w-20 h-20 bg-red-50 rounded-lg m-5 stagger-box"></div>
        <div  className="w-20 h-20 bg-red-100 rounded-lg m-5 stagger-box"></div>
        <div  className="w-20 h-20 bg-red-200 rounded-lg m-5 stagger-box"></div>
        <div  className="w-20 h-20 bg-red-300 rounded-lg m-5 stagger-box"></div>
        <div  className="w-20 h-20 bg-red-400 rounded-lg m-5 stagger-box"></div>
        <div  className="w-20 h-20 bg-red-500 rounded-lg m-5 stagger-box"></div>
        <div  className="w-20 h-20 bg-red-600 rounded-lg m-5 stagger-box"></div>
        <div  className="w-20 h-20 bg-red-700 rounded-lg m-5 stagger-box"></div>
        <div  className="w-20 h-20 bg-red-800 rounded-lg m-5 stagger-box"></div>
        <div  className="w-20 h-20 bg-red-900 rounded-lg m-5 stagger-box"></div>
        <div  className="w-20 h-20 bg-red-950 rounded-lg m-5 stagger-box"></div>
      </div>
    </div>
  );
}

export default GsapStagger;
