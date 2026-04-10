"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import moonsImg from "../../public/collages/moons.png";
import sunsetImg from "../../public/collages/sunset.png";
import pinkCloudsImg from "../../public/collages/pink-clouds.png";
import tinyMoonImg from "../../public/collages/tiny-moon.png";
import pinkCloudImg from "../../public/collages/pink-cloud.png";
import hotairballoon01Img from "../../public/collages/hotairballoon-01.png";
import hotairballoon02Img from "../../public/collages/hotairballoon-02.png";

const MovingBackground = () => {
  let root = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const collages = gsap.utils.toArray(".collage", root.current);

      // Each element gets its own quickTo with a unique depth factor
      const movers = collages.map((el, i) => {
        const depth = 0.03 + (i % 4) * 0.02;
        return {
          xTo: gsap.quickTo(el, "x", { duration: 0.6, ease: "power1" }),
          yTo: gsap.quickTo(el, "y", { duration: 0.6, ease: "power1" }),
          depth,
        };
      });

      const onMouseMove = (e) => {
        // Offset from viewport center so elements drift from their resting position
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;

        movers.forEach(({ xTo, yTo, depth }) => {
          xTo(dx * depth);
          yTo(dy * depth);
        });
      };

      window.addEventListener("mousemove", onMouseMove);
      return () => window.removeEventListener("mousemove", onMouseMove);
    }, root);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={root}
      className="absolute h-full w-full inset-0 z-0 overflow-hidden opacity-60"
    >
      <Image
        src={moonsImg}
        alt="moons"
        placeholder="blur"
        sizes="100vw"
        quality={75}
        className="collage absolute -top-4 -left-4"
      />
      <Image
        src={sunsetImg}
        alt="Sunset"
        placeholder="blur"
        sizes="167px"
        quality={75}
        className="collage absolute -bottom-8 -right-8"
      />
      <Image
        src={pinkCloudsImg}
        alt="Pink Clouds"
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, 800px"
        quality={75}
        className="collage absolute -bottom-8 -left-16"
      />
      <Image
        src={tinyMoonImg}
        alt="Tiny Moon"
        placeholder="blur"
        sizes="197px"
        quality={75}
        className="collage absolute -bottom-2 left-[50%] translate-x-[-50%]"
      />
      <Image
        src={pinkCloudImg}
        alt="Pink Cloud"
        placeholder="blur"
        sizes="316px"
        quality={75}
        className="collage absolute -right-[15%] top-[45%] -rotate-2"
      />
      <Image
        src={pinkCloudImg}
        alt="Pink Cloud"
        placeholder="blur"
        sizes="316px"
        quality={75}
        className="collage absolute -right-[10%] top-[30%] rotate-45"
      />
      <Image
        src={hotairballoon01Img}
        alt="Hot Air Balloon 01"
        placeholder="blur"
        sizes="155px"
        quality={75}
        className="collage absolute -right-[2%] -top-[5%] -rotate-15"
      />
      <Image
        src={hotairballoon01Img}
        alt="Hot Air Balloon 01"
        placeholder="blur"
        sizes="155px"
        quality={75}
        className="collage absolute -left-[5%] bottom-[10%] rotate-5"
      />
      <Image
        src={hotairballoon02Img}
        alt="Hot Air Balloon 02"
        placeholder="blur"
        sizes="96px"
        quality={75}
        className="collage absolute w-24 h-auto object-contain left-[10%] bottom-[0%] rotate-5"
      />
    </div>
  );
};

export default MovingBackground;
