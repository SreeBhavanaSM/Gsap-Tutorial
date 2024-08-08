import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const GsapTimeline2 = () => {
  const tl = useRef(gsap.timeline({ paused: true })); // Initialize with paused: true

  useEffect(() => {
    tl.current
      .to("#box1", { x: 600, duration: 4, ease: "elastic", scale:4, rotation:360, borderRadius: '100%'})
      .to("#box1", { opacity: 0})
      .to("#box2", { y: 100, x:200, duration: 2, ease:"linear", scale:2 }, "-=0.5") 
      .to("#box2", { x:600, duration: 3, ease:"back.inOut", scale:3, rotation:350, borderRadius: '100%' })
      .to("#box3", { x:600, duration: 4, ease:"back.out", scale:4, rotation:360, borderRadius: '100%', duration: 1 });
  }, []); 

  const handlePlayPause = () => {
    const timeline = tl.current;
    if (timeline.paused()) {
      timeline.play();
    } else {
      timeline.pause();
    }
  };

  const handleReverse = () => {
    tl.current.reverse();
  };

  const handleseek = () => {
    tl.current.seek(1.5);
  };

  return (
    <div>
      <h1 className="mt-5">Hello, this is Gsap.Timeline 2nd Example</h1>
      <div className="mt-20 space-y-10">
        <button onClick={handlePlayPause}>Play/Pause</button>
        <button onClick={handleReverse}>Reverse</button>
        <button onClick={handleseek}>Seek</button>
        <div className="mt-20">
          <div id="box1" className="w-20 h-20 bg-yellow-300 rounded-lg mb-5"></div>
          <div id="box2" className="w-20 h-20 bg-yellow-500 rounded-lg mb-5"></div>
          <div id="box3" className="w-20 h-20 bg-yellow-700 rounded-lg mb-5"></div>
        </div>
      </div>
    </div>
  );
};

export default GsapTimeline2;
