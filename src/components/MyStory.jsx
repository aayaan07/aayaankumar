import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import React, { useRef } from "react";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger, SplitText);

const MyStory = () => {
  const textRef = useRef(null);

  useGSAP(() => {
    const split = new SplitText(textRef.current, { type: "words, chars" });
    gsap.set(split.chars, { opacity: 0.5 });
    gsap.to(split.chars, {
      opacity: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#myStorySection",
        start: "top top",
        scrub: true,
        pin: true,
        normalize: true
      },
    });
  }, []);

  return (
    <div
      className="w-screen h-screen py-[50px] xl:pl-[100px] px-[10px] flex flex-col lg:flex-row items-center justify-between"
      id="myStorySection"
    >
      <div className="xl:max-w-[65vw] mx-auto xl:mx-0 max-w-[90vw] text-[50px] md:text-[70px] xl:text-8xl text-[var(--secondary)] leading-[60px]">
        “
        <span
          ref={textRef}
          className="text-start VT323 w-fit myStoryText font-medium"
        >
          I code like a programmer, play like a gamer, edit like a creator, and
          fix things like an engineer. Basically, I’m the controller with all
          cheat codes unlocked. xD
        </span>
        ”
      </div>

      <div className="w-fit h-fit flex items-center justify-center relative flex-col">
        <div className="flex lg:flex-col gap-4 lg:mr-20 justify-center">
          <IoLogoGithub className="w-12 h-12 text-[var(--secondary)] hover:bg-gray-300 p-1 duration-200 rounded-full cursor-pointer"/>
          <IoLogoLinkedin className="w-12 h-12 text-[var(--secondary)] hover:bg-gray-300 p-1 duration-200 rounded-full cursor-pointer"/>
          <FaDiscord className="w-12 h-12 text-[var(--secondary)] hover:bg-gray-300 p-1 duration-200 rounded-full cursor-pointer"/>
        </div>
        <h3 className="lg:absolute text-lg font-mono lg:rotate-z-90 underline text-orange-500 lg:right-0 text-nowrap">KNOW ME MORE</h3>
      </div>

    
    </div>
  );
};

export default MyStory;
