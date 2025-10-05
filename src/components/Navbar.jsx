import React, { useState, useEffect, useRef } from "react";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Navbar = () => {
  const [overlay, setOverlay] = useState(false);
  const [video, setVideo] = useState(false);

  const open = () => {
    setOverlay(true);
  };

  useEffect(() => {
    if (overlay) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      const top = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(top || "0") * -1);
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
    };
  }, [overlay]);

  const close = (onDone) => {
    gsap.to("#overlayMenu", {
      yPercent: -100,
      duration: 1,
      ease: "expo.inOut",
      onComplete: () => {
        setOverlay(false);
        requestAnimationFrame(() =>
          requestAnimationFrame(() => onDone && onDone())
        );
        setVideo(false)
      },
    });
  };


  useEffect(() => {
    const nameChars = new SplitText(".myName", { type: "chars" });
    if (!overlay) return;

    gsap.from("#overlayMenu", {
      yPercent: 100,
      duration: 2,
      ease: "expo.inOut",
    });

    gsap.set(".navItem", { yPercent: 20, opacity: 0 });
    gsap.to(
      ".navItem",
      {
        yPercent: 0,
        duration: 1.5,
        opacity: 1,
        // delay: 1,
        ease: "back.inOut",
        stagger: 0.1,
        onComplete: () =>
          gsap.set(".navItem", { clearProps: "transform,opacity" }),
      },
      "-=1.7"
    );

    gsap.set(nameChars.chars, { rotationY: 90 });
    gsap.to(
      nameChars.chars,
      {
        rotationY: 0,
        duration: 1.5,
        stagger: 0.05,
        ease: "power1.inOut",
      },
      "-=1.5"
    );
  }, [overlay]);

  const handleNavigate = (selector) => {
    // normalize to id hash if needed
    const targetSelector =
      selector.startsWith("#") || selector.startsWith(".")
        ? selector
        : `#${selector}`;
    close(() => {
      const el = document.querySelector(targetSelector);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" }); // page is unlocked now
        // also sync the URL hash without triggering browser’s native jump again
        const url = new URL(window.location.href);
        const hash = targetSelector.startsWith("#")
          ? targetSelector.slice(1)
          : null;
        if (hash) history.pushState(null, "", `#${hash}`);
      }
    });
  };

  return (
    <>
      <div className="relative w-full flex items-center justify-between xs:py-4 xs:px-7 py-2 px-5 h-[12vh]" id="navbar">
        <div className="Oswald font-extrabold text-3xl xs:text-4xl text-[var(--secondary)]">
          Aayaan Kumar
        </div>
        <div
          onClick={open}
          className="group cursor-pointer flex items-center justify-center gap-2 xs:w-32 w-24 h-12 text-base xs:h-15 bg-[var(--secondary)] xs:text-lg rounded-full text-[var(--primary)] duration-200 ease-in-out Poppins"
        >
          Menu
          <IoMenu className="p-1 bg-[var(--primary)] rounded-full group-hover:text-[var(--secondary)] group-hover:w-8 group-hover:h-8 group-hover:scale-[1.1] duration-200 ease-in-out" />
        </div>
      </div>

      {overlay && (
        <div
          className="absolute flex flex-col xl:pl-[200px] pt-[100px] w-screen h-screen bg-[url('./noise-bg.png')] bg-cover top-0 left-0 text-[var(--primary)] text4xl z-10 space-y-5 overflow-hidden"
          id="overlayMenu"
        >
          <IoIosClose
            onClick={close}
            className="absolute top-[25px] right-[40px] w-10 h-10 rounded-full border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--secondary)] duration-200 cursor-pointer"
          />
          <div className="space-y-6 text-6xl Oswald font-black pl-[20px]">
            <h1
              className="cursor-pointer hover:opacity-50 duration-150 w-fit navItem opacity-100"
              onClick={() => handleNavigate("#thatsMe")}
            >
              THAT'S ME
            </h1>
            <h1
              className="cursor-pointer hover:opacity-50 duration-150 w-fit navItem opacity-100"
              onClick={() => handleNavigate(".skillsSection")}
            >
              SKILLS
            </h1>
            <h1
              className="cursor-pointer hover:opacity-50 duration-150 w-fit navItem opacity-100"
              onClick={() => handleNavigate("#projectsSec")}
            >
              PROJECTS
            </h1>
          </div>
          <div className="xl:absolute mx-auto mt-[40px] bottom-[350px] right-8 flex gap-6 text-[var(--primary)] text-3xl">
            <h3
              className="Chicle underline w-fit hover:-translate-y-1 duration-200 cursor-pointer link navItem"
              onClick={() =>
                window.open("https://github.com/aayaan07", "_blank")
              }
            >
              Github
            </h3>
            ·
            <h3
              className="Chicle underline w-fit hover:-translate-y-1 duration-200 cursor-pointer link navItem"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/aayaan-kumar-61444833b",
                  "_blank"
                )
              }
            >
              Linkedin
            </h3>
            ·
            <h3
              className="Chicle underline w-fit hover:-translate-y-1 duration-200 cursor-pointer link navItem"
              onClick={() =>
                window.open(
                  "https://discord.com/users/1033657886208954418",
                  "_blank"
                )
              }
            >
              Discord
            </h3>
          </div>

          <h1 className="myName xl:text-[150px] text-[80px] md:text-[140px] mt-[50px] mx-auto Lugrasimo font-black text-white leading-[80px] md:leading-[130px] xl:absolute bottom-8 right-8 xl:leading-[140px] max-w-[700px]">
            Aayaan <br />
            Kumar
          </h1>
          <div className="w-[500px] h-[250px] bg-[var(--secondary)] rounded-lg mt-[60px] musicBox navItem hidden xl:block relative">
            {video ? (
              <video src="./video.mp4" className="w-full h-full bg-cover" autoPlay/>
            ) : (
              <div className="w-fit mx-auto h-full flex flex-col items-center justify-center text-center Poppins text-3xl text-white font-bold max-w-[75%] cursor-pointer" onClick={() => setVideo(true)}>
                <strong>Wanna know why I added this box</strong> <br />{" "}
                <span className="text-white/70 text-xl">Click me</span>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;



