import gsap from "gsap";
import { SplitText } from "gsap/all";
import React, { useEffect, useRef } from "react";
import Magnet from "../ui/Magnet";

const Hero = () => {
  const heroSection = useRef(null)
  useEffect(() => {
    const myName = new SplitText("#heroNameText", { type: "chars" });
    gsap.set(myName.chars, { yPercent: 40, opacity: 0 });
    gsap.to(myName.chars, {
      yPercent: 0,
      opacity: 1,
      stagger: 0.05,
      duration: 1,
      delay: 0.3,
      ease: "power1.inOut",
      onComplete: () =>
        gsap.set("#heroNameText", { clearProps: "transform,opacity" }),
    });
    gsap.to(".scrambleText1", {
      duration: 2,
      scrambleText: {
        text: "FIRST YEAR STUDENT AT IILM UNIVERSITY GURUGRAM, HARYANA",
        speed: 0.2,
      },
      delay: 1,
    });
    gsap.to(
      ".scrambleText2",
      {
        duration: 1.5,
        scrambleText: "* SCROLL TO KNOW MORE *",
      },
      "-=1.5"
    );
  }, [heroSection]);

  return (
    <div className="relative flex flex-col items-center pt-[120px] xl:pt-[50px] xl:space-y-2 space-y-[20px] h-[88vh]" ref={heroSection}>
      <h3 className="Poppins text-3xl text-gray-500 font-semibold w-fit">
        Hey there, I'm
      </h3>
      <div className="xlw-[80%] w-[90%] overflow-x-hidden overflow-y-hidden pt-5 mx-auto h-fit flex justify-center">
        <h1
          className="z-[1] GermaniaOne text-[120px] md:text-[170px] xl:text-[200px] text-[var(--secondary)] font-black w-fit leading-[100px] md:leading-[150px] xl:leading-[180px] text-center tracking-tight opacity-100"
          id="heroNameText"
        >
          <span className="xl:text-[220px]">AAYAAN</span> <br /> KUMAR
        </h1>
      </div>

      <div className="xl:absolute bottom-[50px] left-[70px] font-mono text-green-700 font-light text-lg text-center mt-[40px]">
        <Magnet padding={50} disabled={false} magnetStrength={10}>
          <h3 className="scrambleText1 max-w-[200px]"></h3>
        </Magnet>
      </div>
      <div className="xl:absolute bottom-[100px] right-[70px] font-mono text-blue-700 font-light text-lg text-center mt-[40px]">
        <Magnet padding={50} disabled={false} magnetStrength={10}>
          {" "}
          <h3 className="scrambleText2"></h3>
        </Magnet>
      </div>
    </div>
  );
};

export default Hero;
