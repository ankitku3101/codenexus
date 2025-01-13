'use client'

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Spotlight } from "@/components/ui/spotlight";
import gsap from "gsap";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Hero() {
  const [counter, setCounter] = useState(0);
  const [spotlightVisible, setSpotlightVisible] = useState(false); 
  const comp = useRef(null);

  useEffect(() => {
    const targetDate = new Date("2025-02-14T00:00:00");

    const updateCountdown = () => {
      const currentDate = new Date();
      const timeLeft = targetDate.getTime() - currentDate.getTime();

      if (timeLeft <= 0) {
        clearInterval(timer);
        return;
      }

      setCounter(timeLeft);
    };

    const timer = setInterval(updateCountdown, 1000); 
    updateCountdown(); 
    return () => clearInterval(timer); 
  }, []);

  const days = Math.floor(counter / (1000 * 60 * 60 * 24));
  const hours = Math.floor((counter % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((counter % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((counter % (1000 * 60)) / 1000);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        onComplete: () => {
          setSpotlightVisible(true); 
        },
      });

      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.8,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div id="home" className="relative overflow-hidden" ref={comp}>
      <div 
          id="intro-slider"
          className="h-screen p-40 bg-[#010002] absolute top-0 left-0 z-10 w-full flex flex-col gap-20 tracking-widest">
          <h1 className="text-9xl text-green-300 font-semibold" id="title-1">CODE</h1>
          <h1 className="text-9xl text-green-300 font-semibold" id="title-2">CONNECT</h1>
          <h1 className="text-9xl text-green-300 font-semibold" id="title-3">CREATE</h1>
      </div>
      <div
        style={{
          backgroundImage: `url(${'/hero.jpg'})`,
          backgroundSize: 'cover',
          backgroundBlendMode: 'overlay',
        }}
        className="bg-center h-screen w-full flex items-center justify-center bg-[#090715] antialiased bg-grid-white/[0.02] relative overflow-hidden"
      >
        <div id="welcome">
          {spotlightVisible && (
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#D4CFEF" />
          )}
          <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 text-center">  
            <h1 className="">
                <span className="text-5xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">CODE</span>
                <span className="text-5xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-green-300 to-green-500 bg-opacity-50">NEXUS</span>
            </h1>
            <p className="mt-4 font-normal text-base md:text-lg tracking-normal md:tracking-wider text-neutral-300 max-w-lg mx-auto">
              Code, Connect, and Create - It's All in the Nexus
            </p>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max mt-8 justify-center text-green-300 tracking-wider md:text-base">
              <div className="flex flex-col items-center">
                <span className="md:text-2xl text-green-300">{days}</span>
                days
              </div>
              <div className="flex flex-col items-center">
                <span className="md:text-2xl text-green-300">{hours}</span>
                hours
              </div>
              <div className="flex flex-col items-center">
                <span className="md:text-2xl text-green-300">{minutes}</span>
                min
              </div>
              <div className="flex flex-col items-center">
                <span className="md:text-2xl text-green-300">{seconds}</span>
                sec
              </div>
            </div>
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </div>
  );
}
