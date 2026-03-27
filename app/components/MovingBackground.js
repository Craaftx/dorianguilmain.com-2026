"use client";

import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

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
        src="/collages/moons.png"
        alt="moons"
        width={1475}
        height={833}
        className="collage absolute -top-4 -left-4"
      />
      <Image
        src="/collages/sunset.png"
        alt="Sunset"
        height={360}
        width={167}
        className="collage absolute -bottom-8 -right-8"
      />
      <Image
        src="/collages/pink-clouds.png"
        alt="Pink Clouds"
        height={325}
        width={800}
        className="collage absolute -bottom-8 -left-16"
      />
      <Image
        src="/collages/tiny-moon.png"
        alt="Tiny Moon"
        height={197}
        width={197}
        className="collage absolute -bottom-2 left-[50%] translate-x-[-50%]"
      />
      <Image
        src="/collages/pink-cloud.png"
        alt="Pink Cloud"
        width={316}
        height={171}
        className="collage absolute -right-[15%] top-[45%] -rotate-2"
      />
      <Image
        src="/collages/pink-cloud.png"
        alt="Pink Cloud"
        width={316}
        height={171}
        className="collage absolute -right-[10%] top-[30%] rotate-45"
      />
      <Image
        src="/collages/hotairballoon-01.png"
        alt="Hot Air Balloon 01"
        width={155}
        height={195}
        className="collage absolute -right-[2%] -top-[5%] -rotate-15"
      />
      <Image
        src="/collages/hotairballoon-01.png"
        alt="Hot Air Balloon 01"
        width={155}
        height={195}
        className="collage absolute -left-[5%] bottom-[10%] rotate-5"
      />
      <Image
        src="/collages/hotairballoon-02.png"
        alt="Hot Air Balloon 02"
        width={205}
        height={243}
        className="collage absolute w-24 h-auto object-contain left-[10%] bottom-[0%] rotate-5"
      />
    </div>
  );
};

export default MovingBackground;
