"use client";

import { useState } from "react";
import { Alien, Block, scribbleAsTextClasses } from "./Scribbles";
import CollageCanvas from "./collage/CollageCanvas";

const Cta = () => {
  const [collageMode, setCollageMode] = useState("viewing");
  const isEditing = collageMode === "editing";

  return (
    <div className="relative flex flex-col justify-between h-screen overflow-hidden z-0 p-16 pb-8">
      <CollageCanvas mode={collageMode} setMode={setCollageMode} />
      <div
        className={`relative z-10 flex flex-col gap-4 p-4 shadow-md w-full max-w-xl bg-background transition-opacity ${isEditing ? "opacity-20 pointer-events-none" : ""}`}
      >
        <h2 className="text-6xl">
          <span className="text-orange-400">Thanks you</span> for this
          exploration
        </h2>
        <p className="text-xl">
          <span>
            {`Feel free to contact me and discuss of my place in one your projects. And please don’t hesitate to`}
          </span>
          <span
            role="button"
            onClick={() => setCollageMode(isEditing ? "viewing" : "editing")}
            className="inline text-wrap text-orange-400 hover:text-orange-500 cursor-pointer"
          >
            {isEditing
              ? " doing what your doing (Oh Hey! Happy hacking). "
              : " customise the visuals of this page. "}
          </span>
          <span>{`I will love to see your creativity.`}</span>
        </p>
      </div>
      <div
        className={`relative z-10 flex justify-between bg-background border-t-4 border-orange-400 px-6 py-3 transition-opacity ${isEditing ? "opacity-0 pointer-events-none" : ""}`}
      >
        <div className="flex flex-1 flex-col">
          <p className="font-bold">Get In Touch</p>
          <p className="text-sm">hello@dorianguilmain.com</p>
          <span className="text-sm">
            +3362
            <Block text="F00-BaR" />
          </span>
        </div>
        <div className="flex flex-1  flex-col">
          <p className="font-bold">Connect</p>
          <p className="text-sm">LinkedIn</p>
          <p className="text-sm">Github</p>
        </div>
        <div className="flex flex-2 flex-col">
          <p className="font-bold">Freelancing TLDR:</p>
          <span className="text-sm">
            Typescript/Javascript/React with +7 yr of experience{" "}
            <Alien className={`h-5 w-auto ${scribbleAsTextClasses}`} />
          </span>
          <p className="text-sm">
            Fully remote for the past 4 years. Artistic taste.
          </p>
        </div>
        <div className="flex flex-2 flex-col mr-8">
          <p className="font-bold">Credits</p>
          <p className="text-sm text-wrap">
            This website is fully designed/developed by myself with React + GSAP
            + CSS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cta;
