import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const ThatsMe = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#thatsMe",
        start: "15% top",
        pin: true,
        scrub: true,
      },
    });
    gsap.set(".title", { yPercent: 25, opacity: 0.1 });
    gsap.to(".title", {
      yPercent: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#thatsMeMobile",
        start: "top 30%",
      },
    });
    gsap.set(".odd", { xPercent: -20 });
    gsap.set(".even", { xPercent: 20 });
    gsap.set(".title6", { yPercent: 25, opacity: 0 });
    tl.to(".odd , .even", {
      xPercent: 0,
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
        className="w-fit h-screen overflow-x-clip xl:my-[200px] xl:flex flex-col justify-center items-center xl:-rotate-z-6 hidden"
        id="thatsMe"
      >
        <h1 className="odd title1 Oswald italic font-black text-[var(--secondary)]/50 text-6xl lg:text-8xl text-nowrap lg:translate-x-[-250px] translate-x-[-430px]">
          GAMER · EDITOR ·{" "}
          <span className="text-[var(--secondary)]">WEB DEVELOPER</span> ·
          DESIGNER · ENGINEER
        </h1>
        <h1 className="even title2 Oswald italic font-black text-[var(--secondary)]/50 text-6xl lg:text-8xl text-nowrap lg:translate-x-[-500px] translate-x-[-570px]">
          EDITOR · WEB DEVELOPER ·{" "}
          <span className="text-[var(--secondary)]">DESIGNER</span> · ENGINEER ·
          GAMER
        </h1>
        <h1 className="odd title3 Oswald italic font-black text-[var(--secondary)]/50 text-6xl lg:text-8xl text-nowrap lg:translate-x-[-600px] translate-x-[-635px]">
          WEB DEVELOPER · DESIGNER ·{" "}
          <span className="text-[var(--secondary)]">ENGINEER</span> · GAMER ·
          EDITOR
        </h1>
        <h1 className="even title4 Oswald italic font-black text-[var(--secondary)]/50 text-6xl lg:text-8xl text-nowrap lg:translate-x-[-300px] translate-x-[-450px]">
          DESIGNER · ENGINEER ·{" "}
          <span className="text-[var(--secondary)]">GAMER</span> · EDITOR · WEB
          DEVELOPER
        </h1>
        <h1 className="odd title5 Oswald italic font-black text-[var(--secondary)]/50 text-6xl lg:text-8xl text-nowrap lg:translate-x-[-200px] translate-x-[-390px]">
          ENGINEER · GAMER ·{" "}
          <span className="text-[var(--secondary)]">EDITOR</span> · WEB
          DEVELOPER · DESIGNER
        </h1>
        <h1 className="title6 Oswald italic font-black text-[var(--secondary)] text-6xl lg:text-8xl text-nowrap lg:translate-x-[-400px] translate-x-[-490px]">
          YUP THAT'S ME :D
        </h1>
      </div>

      {/* For Mobile  */}

      <div
        className="w-screen h-screen overflow-x-hiddern xl:hidden flex-col justify-center items-center flex"
        id="thatsMeMobile"
      >

        <h1 className="title Oswald font-bold text-center text-[54px] opacity-100">·WEB DEVELOPER·</h1>
        <h1 className="title Oswald font-bold text-center text-[54px] opacity-100">·DESIGNER·</h1>
        <h1 className="title Oswald font-bold text-center text-[54px] opacity-100">·ENGINEER·</h1>
        <h1 className="title Oswald font-bold text-center text-[54px] opacity-100">·GAMER·</h1>
        <h1 className="title Oswald font-bold text-center text-[54px] opacity-100">·EDITOR·</h1>
        <h1 className="title Oswald font-bold text-center text-[54px] opacity-100 underline">YUP THAT'S ME xD</h1>

        
      </div>
    </>
  );
};

export default ThatsMe;
