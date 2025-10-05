import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { frontendSkills, backendSkills, otherSkills } from "../utils/constant";
import Magnet from "../ui/Magnet";

const Skills = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#skillsIntro",
        start: "top top",
        end: "+=800",
        scrub: 1,
        pin: true,
      },
    });
    tl.to("#skillsIntro", {
      scale: 164,
      ease: "none",
    }).to(
      "#skillsIntro",
      {
        // color: "transparent",
        background: "var(--secondary)",
        onComplete: () => gsap.set("#skillsIntro", { display: "none" }),
      },
      "<"
    );

    const skillsTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#skillsSec",
        start: "top 40%",
      },
    });
    const skillsTlM = gsap.timeline({
      scrollTrigger: {
        trigger: "#skillsSecMobile",
        start: "top 40%",
      },
    });

    gsap.set(".headingM", { yPercent: 25, opacity: 0 });
    gsap.set(".subHeadingM", { yPercent: 15, opacity: 0 });
    gsap.set(".skillItemM", { yPercent: 15, opacity: 0 });
    skillsTlM
      .to(".headingM", {
        yPercent: 0,
        opacity: 1.5,
        duration: 0.5,
      })
      .to(
        ".subHeadingM",
        {
          yPercent: 0,
          opacity: 1.5,
          duration: 0.4,
          stagger: 0.05,
        },
        "-=0.4"
      )
      .to(
        ".skillItemM",
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.02,
        },
        "-=0.4"
      );

    gsap.set(".heading", { yPercent: 25, opacity: 0 });
    gsap.set(".subHeading", { yPercent: 15, opacity: 0 });
    gsap.set(".skillItem", { yPercent: 15, opacity: 0 });
    skillsTl
      .to(".heading", {
        yPercent: 0,
        opacity: 1.5,
        duration: 0.5,
      })
      .to(
        ".subHeading",
        {
          yPercent: 0,
          opacity: 1.5,
          duration: 0.4,
          stagger: 0.05,
        },
        "-=0.4"
      )
      .to(
        ".skillItem",
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.02,
        },
        "-=0.4"
      );
  });
  return (
    <>
      <section className="w-screen bg-[var(--secondary)] xl:block hidden skillsSection">
        <div
          id="skillsIntro"
          className="w-screen h-screen bg-[var(--primary)] text-[var(--secondary)] text-[80px] Oswald font-bold xl:flex justify-center items-center hidden"
        >
          * SCROLL TO SEE THE SKILLS SECTION *
        </div>
        <div
          id="skillsSec"
          className="bg-[var(--secondary)] flex flex-col text-[var(--primary)] w-screen h-screen z-[3] py-5 px-[50px]"
        >
          <h1 className="text-7xl CaveatBrush font-medium place-self-end heading">
            MY SKILLS
          </h1>
          <div className="w-full h-full flex flex-col gap-[60px] items-center pt-[50px]">
            {/* Frontend  */}
            <div className="flex flex-col items-center">
              <h2 className="subHeading Poppins font-medium text-2xl mb-[8px]">
                Frontend
              </h2>
              <div className="flex gap-10">
                {frontendSkills.map((skill) => {
                  return (
                    <Magnet padding={50} disabled={false} magnetStrength={5} key={skill.name}>
                      <img
                        src={skill.src}
                        alt={skill.name}
                        className="skillItem w-auto h-20"
                      />
                    </Magnet>
                  );
                })}
              </div>
            </div>
            {/* Backend  */}
            <div className="flex flex-col gap-5 items-center">
              <h2 className="subHeading Poppins font-medium text-2xl">
                Backend {`(Learning)`}
              </h2>
              <div className="flex gap-10">
                {backendSkills.map((skill) => {
                  return (
                    <Magnet padding={50} disabled={false} magnetStrength={5} key={skill.name}>
                      <img
                        src={skill.src}
                        alt={skill.name}
                        className="skillItem w-auto h-20"
                      />
                    </Magnet>
                  );
                })}
              </div>
            </div>
            {/* Other  */}
            <div className="flex flex-col gap-5 items-center">
              <h2 className="subHeading Poppins font-medium text-2xl">
                Others
              </h2>
              <div className="flex gap-10">
                {otherSkills.map((skill) => {
                  return (
                    <Magnet padding={50} disabled={false} magnetStrength={5} key={skill.name}>
                      <img
                        src={skill.src}
                        alt={skill.name}
                        className="skillItem w-auto h-20"
                      />
                    </Magnet>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For MOBILE  */}
      <div
        id="skillsSecMobile"
        className="bg-[var(--secondary)] flex flex-col text-[var(--primary)] w-screen h-screen z-[3] py-5 px-[10px] xl:hidden skillsSection"
      >
        <h1 className="text-7xl CaveatBrush font-medium place-self-end headingM">
          MY SKILLS
        </h1>
        <div className="w-full h-full flex flex-col gap-[40px] items-center pt-[50px]">
          {/* Frontend  */}
          <div className="flex flex-col gap-5 items-center">
            <h2 className="subHeadingM Poppins font-medium text-2xl">
              Frontend
            </h2>
            <div className="flex gap-10 flex-wrap justify-center">
              {frontendSkills.map((skill) => {
                return (
                  <img
                    src={skill.src}
                    alt={skill.name}
                    className="skillItemM w-auto h-20"
                    key={skill.name}
                  />
                );
              })}
            </div>
          </div>
          {/* Backend  */}
          <div className="flex flex-col gap-5 items-center">
            <h2 className="subHeadingM Poppins font-medium text-2xl">
              Backend {`(Learning)`}
            </h2>
            <div className="flex gap-10 flex-wrap justify-center">
              {backendSkills.map((skill) => {
                return (
                  <img
                    src={skill.src}
                    alt={skill.name}
                    className="skillItemM w-auto h-20"
                    key={skill.name}
                  />
                );
              })}
            </div>
          </div>
          {/* Other  */}
          <div className="flex flex-col gap-5 items-center">
            <h2 className="subHeadingM Poppins font-medium text-2xl">Others</h2>
            <div className="flex gap-10 flex-wrap justify-center">
              {otherSkills.map((skill) => {
                return (
                  <img
                    src={skill.src}
                    alt={skill.name}
                    className="skillItemM w-auto h-20"
                    key={skill.name}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
