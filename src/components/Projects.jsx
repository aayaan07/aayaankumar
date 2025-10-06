import React, { useRef } from "react";
import { projects } from "../utils/constant";
import { FaArrowRightLong } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Projects = () => {
    const title = useRef(null)
    useGSAP(() => {
        const tl = gsap.timeline({ scrollTrigger: {
            trigger: "#projectsSec",
            start: "top 50%"
        }})

        gsap.set(".heading", { yPercent: 25, opacity: 0 })
        gsap.set("#project", { yPercent: 25, opacity: 0 })

        tl.to(".heading", {
            yPercent: 0,
            opacity: 1,
            duration: 1.2,
            ease: "expo.inOut"
        }).to("#project", {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15
        }, "-=1")
    })




  return (
    <div className="w-screen min-h-screen flex flex-col gap-[50px] px-[20px]" id="projectsSec">
      <strong className="lg:text-[80px] text-[64px] text-nowrap CaveatBrush font-medium place-self-end heading text-[var(--secondary)]">
        MY PROJECTS
      </strong>
      <div id="projects" className="flex flex-col w-[90vw] mx-auto">
        {projects.map((project, index) => {
          return (
            <div
              id="project"
              className="group flex items-center justify-between px-3 py-4 border-b-[1px] border-b-[var(--secondary)] cursor-pointer"
              key={index}
              onClick={() => window.open(project.link, "_blank")}
            >
              <div className="group-hover:-translate-y-1 duration-200">
                <h1 className="text-2xl Poppins font-semibold text-[var(--secondary)] max-w-[80%] lg:max-w-full" ref={title}>{project.title}</h1>
                <h1 className="text-xl Poppins font-medium text-[var(--secondary)]/70 lg:block hidden subTitle">{project.techStack}</h1>
              </div>
              <FaArrowRightLong className="w-11 h-11 text-[var(--secondary) -rotate-z-45 group-hover:-translate-y-1 duration-200"/>
            </div>
          );
        })}
      </div>
      <small className="w-fit mx-auto text-gray-400 Poppins text-lg">Note: You can find code for all these projects on my <span className="underline cursor-pointer hover:text-black duration-150" onClick={() => window.open("https://github.com/aayaan07", "_blank")}>Github</span></small>
    </div>
  );
};

export default Projects;

