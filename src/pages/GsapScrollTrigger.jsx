import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './GsapScrollTrigger.css';

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
  useEffect(() => {
    // Animation for page 1
    gsap.to("#page1 h1", {
      scale: 1.5,
      y: -59,
      duration: 1,
      ease: "linear",
      immediateRender: true,
      scrollTrigger: {
        trigger: "#page1",
        toggleActions: "play complete reverse none",
        scroller: "body",
        start: 'top 0%',
        end: 'top -100%',
        scrub: 3,
        markers: true,
      },
    });

    gsap.to("#page1 h2", {
      scale: 2,
      y: 55,
      duration: 1.2,
      ease: "linear",
      immediateRender: true,
      scrollTrigger: {
        trigger: "#page1",
        toggleActions: "play complete reverse none",
        scroller: "body",
        start: 'top 0%',
        end: 'top -100%',
        scrub: 3,
        markers: true,
      },
    });

    gsap.to("#page1 .box", {
      y: 200,
      scale: 1,
      rotation: 360,
      duration: 1,
      borderRadius: 40,
      ease: "elastic.out",
      stagger: {
        from: 'center',
        amount: 4,
        grid: [1, 11],
        ease: "bounce.out",
      },
      immediateRender: true,
      scrollTrigger: {
        trigger: "#page1",
        toggleActions: "play complete reverse none",
        scroller: "body",
        start: 'top 0%',
        end: 'top -100%',
        scrub: 2,
        markers: true,
      },
    });


    // Animation for page 2
    gsap.to("#page2 h1", {
      transform: "translateX(-210%)",
      scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: 'top 0%',
        end: 'top -100%',
        scrub: 2,
        pin: true,
        markers: true,
      },
    });

    // Animation for page 3 using a timeline
    const time = gsap.timeline({
      scrollTrigger: {
        trigger: "#page3",
        toggleActions:"play complete reverse none",
        scroller: "body",
        start: 'top center',
        end: 'top 20%',
        scrub: 2,
        markers: true,
      }
    });

    time.to('#page3 .box', {
      x: 150,
      rotation: 360,
      duration: 3,
      borderRadius: '100%',
      ease: 'back.in',
    })
    .to('#page3 .box', {
      y: 300,
      scale: 1,
      duration: 3,
      borderRadius: '50%',
      ease: 'bounce',
    })
    .to('#page3 .box', {
      x: -100,
      rotation: 360,
      scale: 1.5,
      duration: 3,
      borderRadius: '70%',
      ease: 'elastic',
      stagger: {
        grid: [1, 11],
        from: "edge",
        ease: "elastic.in",
        amount: 2,
      }
    });

    // Cleanup function to remove ScrollTrigger
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []); // Empty dependency array to run the effect once on mount

  return (
    <>
      <div id="main">
        <div id="page1">
          <h1 className="pt-52">Hello, this is Gsap Scroll Trigger - page-1</h1>
          <h2 className="mt-5">Scroll down to see trigger</h2>
          <div className="mt-20 mx-60 flex">
            <div className="w-20 h-20 bg-red-50 rounded-lg m-5 box"></div>
            <div className="w-20 h-20 bg-red-100 rounded-lg m-5 box"></div>
            <div className="w-20 h-20 bg-red-200 rounded-lg m-5 box"></div>
            <div className="w-20 h-20 bg-red-300 rounded-lg m-5 box"></div>
            <div className="w-20 h-20 bg-red-400 rounded-lg m-5 box"></div>
            <div className="w-20 h-20 bg-red-500 rounded-lg m-5 box"></div>
            <div className="w-20 h-20 bg-red-600 rounded-lg m-5 box"></div>
            <div className="w-20 h-20 bg-red-700 rounded-lg m-5 box"></div>
            <div className="w-20 h-20 bg-red-800 rounded-lg m-5 box"></div>
            <div className="w-20 h-20 bg-red-900 rounded-lg m-5 box"></div>
            <div className="w-20 h-20 bg-red-950 rounded-lg m-5 box"></div>
          </div>
        </div>
        <div id="page2">
          <h1 className="">ScrollTrigger</h1>
        </div>
        <div id="page3">
          <h1 className="pt-52">Hello, this is Gsap Scroll Trigger - page-3</h1>
          <div className="mt-20 mx-60 flex">
            <div className="w-20 h-20 bg-blue-50 rounded-lg m-5 box"></div>
            <div className="w-20 h-20 bg-blue-100 rounded-lg m-5 box"></div>
            <div className="w-20 h-20 bg-blue-200 rounded-lg m-5 box"></div>
            <div className="w-20 h-20 bg-blue-300 rounded-lg m-5 box"></div>
            <div className="w-20 h-20 bg-blue-400 rounded-lg m-5 box"></div>
            <div className="w-20 h-20 bg-blue-500 rounded-lg m-5 box"></div>
            <div className="w-20 h-20 bg-blue-600 rounded-lg m-5 box"></div>
            <div className="w-20 h-20 bg-blue-700 rounded-lg m-5 box"></div>
            <div className="w-20 h-20 bg-blue-800 rounded-lg m-5 box"></div>
            <div className="w-20 h-20 bg-blue-900 rounded-lg m-5 box"></div>
            <div className="w-20 h-20 bg-blue-950 rounded-lg m-5 box"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GsapScrollTrigger;
