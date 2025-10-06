import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const ThatsMe = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#thatsMe",
        start: "top top",
        pin: true,
        scrub: true,
      },
    });
    // gsap.set(".title", { yPercent: 25, opacity: 0.1 });
    // gsap.to(".title", {
    //   yPercent: 0,
    //   opacity: 1,
    //   duration: 1,
    //   stagger: 0.1,
    //   scrollTrigger: {
    //     trigger: "#thatsMeMobile",
    //     start: "top 30%",
    //   },
    // });
    gsap.set(".odd", { xPercent: -25, opacity: 0.4 });
    gsap.set(".even", { xPercent: 25, opacity: 0.4 });
    gsap.set(".title6", { yPercent: 25, opacity: 0 });
    tl.to(".odd , .even", {
      xPercent: 0,
      opacity: 1,
      stagger: 0.1,
    });
    tl.to(".title6", {
      yPercent: 0,
      opacity: 1,
    });
  });

  return (
    <>
      {/* For Desktop  */}
      <div
        className="relative w-screen h-screen overflow-x-clip xl:my-[200px] flex flex-col items-center justify-center xl:justify-start text-center lg:-rotate-z-6"
        id="thatsMe"
      >
        <h1 className="odd title1 Oswald italic font-black text-[var(--secondary)] text-5xl md:text-7xl lg:text-8xl text-nowrap">
          · WEB DEVELOPER ·
        </h1>
        <h1 className="even title2 Oswald italic font-black text-[var(--secondary)] text-5xl md:text-7xl lg:text-8xl text-nowrap">
          · DESIGNER ·
        </h1>
        <h1 className="odd title3 Oswald italic font-black text-[var(--secondary)] text-5xl md:text-7xl lg:text-8xl text-nowrap">
          · ENGINEER ·
        </h1>
        <h1 className="even title4 Oswald italic font-black text-[var(--secondary)] text-5xl md:text-7xl lg:text-8xl text-nowrap">
          · GAMER ·
        </h1>
        <h1 className="odd title5 Oswald italic font-black text-[var(--secondary)] text-5xl md:text-7xl lg:text-8xl text-nowrap">
          · EDITOR ·
        </h1>
        <h1 className="title6 Oswald italic font-black text-[var(--secondary)] text-5xl md:text-7xl lg:text-8xl underline text-nowrap">
          YUP THAT'S ME :D
        </h1>
      </div>
      

      {/* For Mobile  */}

      {/* <div
        className="w-screen h-screen overflow-x-hiddern xl:hidden flex-col justify-center items-center flex"
        id="thatsMeMobile"
      >

        <h1 className="title Oswald font-bold text-center text-[54px] opacity-100">·WEB DEVELOPER·</h1>
        <h1 className="title Oswald font-bold text-center text-[54px] opacity-100">·DESIGNER·</h1>
        <h1 className="title Oswald font-bold text-center text-[54px] opacity-100">·ENGINEER·</h1>
        <h1 className="title Oswald font-bold text-center text-[54px] opacity-100">·GAMER·</h1>
        <h1 className="title Oswald font-bold text-center text-[54px] opacity-100">·EDITOR·</h1>
        <h1 className="title Oswald font-bold text-center text-[54px] opacity-100 underline">YUP THAT'S ME xD</h1>

        
      </div> */}
    </>
  );
};

export default ThatsMe;
