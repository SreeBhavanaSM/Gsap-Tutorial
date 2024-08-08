import React, { useEffect} from 'react';
import { gsap } from 'gsap';

const GsapTimeline = () => {
  const time = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });

  useEffect(() => {

    time.to('#blue-box', {
      x: 400,
      rotation: 340,
      duration: 3,
      borderRadius: '100%',
      ease: 'back.inOut',
    })
    .to('#blue-box', {
      y: 300,
      rotation: 480,
      scale: 2,
      duration: 3,
      borderRadius: '50%',
      ease: 'back.inOut',
    })
    .to('#blue-box', {
      x: 800,
      rotation: 340,
      scale: 3,
      duration: 3,
      borderRadius: '100%',
      ease: 'back.inOut',
    });
  }, []); // Empty dependency array to run the effect once on mount

  const handlePlayPause = () => {
    if (time.paused()) {
      time.play();
    } else {
      time.pause();
    }
  };

  return (
    <div>
      <h1 className="mt-5">Hello, this is Gsap.Timeline</h1>
      <div className="mt-20 space-y-10">
        <button onClick={handlePlayPause}>Play/Pause</button>
        <div className="mt-20">
          <div id="blue-box" className="w-20 h-20 bg-yellow-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default GsapTimeline;
