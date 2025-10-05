import { useState } from "react";
import Hero from "./components/Hero";
import gsap from "gsap";
import { ScrambleTextPlugin, ScrollTrigger, SplitText } from "gsap/all";
import ThatsMe from "./components/ThatsMe";
import Navbar from "./components/Navbar";
import MyStory from "./components/MyStory";
import { useGSAP } from "@gsap/react";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { FaArrowUp } from "react-icons/fa";

function App() {
  gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin, useGSAP);

  return (
    <main className="bg-primary text-secondary w-full relative">
      <Navbar />
      <Hero />
      <ThatsMe />
      <MyStory />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
