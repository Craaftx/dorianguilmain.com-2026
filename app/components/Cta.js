"use client";

import { useState } from "react";
import {
  Alien,
  Block,
  Dice,
  scribbleAsTextClasses,
  Underlined,
} from "./Scribbles";
import CollageCanvas from "./collage/CollageCanvas";
import Image from "next/image";

const Cta = () => {
  const [collageMode, setCollageMode] = useState("viewing");
  const isEditing = collageMode === "editing";

  return (
    <div className="relative flex flex-col justify-between h-screen w-screen overflow-hidden z-0 lg:p-16 md:p-8 p-4 pb-8">
      <CollageCanvas mode={collageMode} setMode={setCollageMode} />
      <div
        className={`relative z-10 flex flex-col gap-4 p-4 shadow-md w-full max-w-xl bg-background transition-opacity ${isEditing ? "opacity-20 pointer-events-none" : ""}`}
      >
        <h2 className="lg:text-6xl md:text-5xl max-md:font-bold text-2xl">
          <span className="text-orange-400">Thanks you</span> for this
          exploration
        </h2>
        <div className="lg:text-xl md:text-md text-sm">
          <span>
            {`Feel free to contact me and discuss of my place in one your projects. `}
          </span>
          <span className="md:hidden">{`And visit this website on your desktop to get the full experience and customise this page !`}</span>
          <span className="max-md:hidden">{`And please don’t hesitate to`}</span>
          <span
            role="button"
            onClick={() => setCollageMode(isEditing ? "viewing" : "editing")}
            className="max-md:hidden inline text-wrap text-orange-400 hover:text-orange-500 cursor-pointer"
          >
            {isEditing
              ? " doing what your doing (Oh Hey! Happy hacking). "
              : " customise the visuals of this page. "}
          </span>
          <span className="max-md:hidden">{`I will love to see your creativity.`}</span>
        </div>
      </div>
      <div className="flex w-full justify-end max-md:hidden">
        <button
          className={`relative z-10 text-xs p-1 cursor-pointer text-left border-4 border-background hover:border-orange-400 bg-background transition-opacity ${isEditing ? "hidden" : ""}`}
          onClick={() => setCollageMode(isEditing ? "viewing" : "editing")}
        >
          Click here to edit this <br /> collage <Underlined text="yourself" />{" "}
          <Dice className={`h-4 w-auto ${scribbleAsTextClasses}`} />
        </button>
      </div>
      <div
        className={`relative z-10 flex max-md:flex-col max-md:gap-2 justify-between px-6 py-3 md:mx-6 bg-background  border-t-4 border-orange-400 transition-opacity ${isEditing ? "opacity-0 pointer-events-none" : ""}`}
      >
        <div className="flex flex-1 flex-col">
          <p className="lg:text-md text-sm font-bold">Get In Touch</p>
          <p className="lg:text-sm text-xs">hello@dorianguilmain.com</p>
          <span className="lg:text-sm text-xs">
            +3362
            <Block text="0Got-cha" />
          </span>
        </div>
        <div className="flex flex-1 flex-col">
          <p className="lg:text-md text-sm font-bold">Connect</p>
          <a
            className="lg:text-sm text-xs hover:text-orange-400"
            href="https://www.linkedin.com/in/dorian-guilmain/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="lg:text-sm text-xs hover:text-orange-400"
            href="https://github.com/Craaftx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
        <div className="flex flex-2 flex-col">
          <p className=" lg:text-md text-sm font-bold">Freelancing TL;DR</p>
          <span className="lg:text-sm text-xs">
            Typescript/Javascript/React{" "}
            <Alien className={`h-5 w-auto ${scribbleAsTextClasses}`} /> with +7
            yr of experience
          </span>
          <span className="lg:text-sm text-xs">
            <Underlined text="Fully remote" /> for the past 4 years. Artistic
            taste.
          </span>
        </div>
        <div className="flex flex-2 flex-col lg:mr-8">
          <p className="lg:text-md text-sm font-bold">Credits</p>
          <p className="lg:text-sm text-xs text-wrap">
            This website is fully designed/developed by myself with React + GSAP
            + CSS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cta;
