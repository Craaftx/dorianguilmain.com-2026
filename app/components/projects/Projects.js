"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import projectsContent from "./projectsContent";
import ProjectLink from "./ProjectLink";
import pinkCloudImg from "../../../public/collages/pink-cloud.png";
import clouds01Img from "../../../public/collages/clouds-01.png";
import clouds02Img from "../../../public/collages/clouds-02.png";

const CLOUD_PARAMETERS = [
  { x: 18, delay: 0 },
  { x: 24, delay: 0.04 },
  { x: 12, delay: 0.08 },
  { x: 20, delay: 0.02 },
  { x: 8, delay: 0.03 },
  { x: 13, delay: 0.01 },
];

const ITEM_WIDTH_VW = 25;
const ITEM_SCALE_ACTIVE = 1.1;
const ITEM_OPACITY_INACTIVE = 0.7;
const ITEM_GAP_PX = 48;

const extended = [...projectsContent, ...projectsContent, ...projectsContent]; // Triple the array for infinite scroll and teleportation trick
const N = projectsContent.length; // Start on the middle of the extended array

const getX = (vIdx, vpWidth) => {
  const w = vpWidth * (ITEM_WIDTH_VW / 100) + ITEM_GAP_PX;
  return vpWidth * 0.65 - w / 2 - vIdx * w;
};

const Projects = () => {
  const [selectedReal, setSelectedReal] = useState(0);
  const virtualIndex = useRef(N);
  const isAnimating = useRef(false);
  const trackRef = useRef(null);
  const detailsRef = useRef(null);
  const viewportRef = useRef(null);
  const itemRefs = useRef([]);
  const cloudRefs = useRef([]);

  const navigateTo = (newVIdx) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const viewportWidth = viewportRef.current.offsetWidth;
    const newReal = newVIdx % N;
    const prevVIdx = virtualIndex.current;

    const direction = newVIdx > virtualIndex.current ? 1 : -1;

    CLOUD_PARAMETERS.forEach(({ x, delay }, ci) => {
      const el = cloudRefs.current[ci];
      if (!el) return;
      gsap
        .timeline({ delay })
        .to(el, { x: -direction * x, duration: 0.6, ease: "ease.in" })
        .to(el, { x: 0, duration: 0.8, ease: "ease.out" });
    });

    // Animate the previous item
    gsap.to(itemRefs.current[prevVIdx], {
      scale: 1,
      opacity: ITEM_OPACITY_INACTIVE,
      duration: 0.5,
      ease: "power2.out",
    });

    // Animate the new item
    gsap.to(itemRefs.current[newVIdx], {
      scale: ITEM_SCALE_ACTIVE,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });

    // Animate the track (we move the track, not the items)
    gsap.to(trackRef.current, {
      x: getX(newVIdx, viewportWidth),
      duration: 0.8,
      ease: "power3.inOut",
      onComplete: () => {
        // If we're at the start or end of the extended array, teleport to the middle, here is the trick
        if (newVIdx < N || newVIdx >= 2 * N) {
          const mid = N + newReal;
          gsap.set(trackRef.current, { x: getX(mid, viewportWidth) });
          gsap.set(itemRefs.current[newVIdx], {
            scale: 1,
            opacity: ITEM_OPACITY_INACTIVE,
          });
          gsap.set(itemRefs.current[mid], {
            scale: ITEM_SCALE_ACTIVE,
            opacity: 1,
          });
          virtualIndex.current = mid;
        } else {
          virtualIndex.current = newVIdx;
        }
        isAnimating.current = false;
      },
    });

    // Animate the details panel
    gsap.to(detailsRef.current, {
      autoAlpha: 0,
      y: 10,
      duration: 0.4,
      onComplete: () => {
        setSelectedReal(newReal);
        gsap.to(detailsRef.current, { autoAlpha: 1, y: 0, duration: 0.4 });
      },
    });
  };

  const handleClick = (extIdx) => {
    if (extIdx === virtualIndex.current) return;
    navigateTo(extIdx);
  };

  useEffect(() => {
    const vpWidth = viewportRef.current.offsetWidth;
    gsap.set(trackRef.current, { x: getX(N, vpWidth) });
    gsap.set(itemRefs.current[N], { scale: ITEM_SCALE_ACTIVE, opacity: 1 });

    const updateLayout = () => {
      const vp = viewportRef.current.offsetWidth;
      gsap.set(trackRef.current, { x: getX(virtualIndex.current, vp) });
    };

    const ro = new ResizeObserver(updateLayout);
    ro.observe(viewportRef.current);
    return () => ro.disconnect();
  }, []);

  const project = projectsContent[selectedReal];

  return (
    <div className="relative flex flex-col h-screen bg-foreground overflow-hidden z-0">
      <div className="absolute h-full w-full -z-10 pointer-events-none">
        <Image
          ref={(el) => (cloudRefs.current[0] = el)}
          src={pinkCloudImg}
          alt="Pink Cloud"
          placeholder="blur"
          sizes="316px"
          quality={50}
          className="collage absolute -left-32 -top-8 -rotate-45"
        />
        <Image
          ref={(el) => (cloudRefs.current[1] = el)}
          src={clouds01Img}
          alt="Cloud"
          placeholder="blur"
          sizes="468px"
          quality={50}
          className="collage absolute -right-48 max-md:-right-[70%] -top-24 max-md:-top-32 -rotate-180"
        />
        <Image
          ref={(el) => (cloudRefs.current[2] = el)}
          src={pinkCloudImg}
          alt="Pink Cloud"
          placeholder="blur"
          sizes="316px"
          quality={50}
          className="collage absolute right-2 -top-12 max-md:-top-24 rotate-12"
        />
        <Image
          ref={(el) => (cloudRefs.current[3] = el)}
          src={clouds02Img}
          alt="Cloud"
          placeholder="blur"
          sizes="400px"
          quality={50}
          className="collage absolute -right-48 max-md:-right-[80%] -bottom-24"
        />
        <Image
          ref={(el) => (cloudRefs.current[5] = el)}
          src={pinkCloudImg}
          alt="Pink Cloud"
          placeholder="blur"
          sizes="316px"
          quality={50}
          className="collage absolute -left-28 max-md:-left-[50%] -bottom-20 -rotate-12"
        />
        <Image
          ref={(el) => (cloudRefs.current[4] = el)}
          src={pinkCloudImg}
          alt="Pink Cloud"
          placeholder="blur"
          sizes="316px"
          quality={50}
          className="collage absolute right-[5%] max-md:-right-[10%] -bottom-24 rotate-180"
        />
      </div>

      <div className="flex flex-col gap-4 max-md:gap-1 p-16 max-md:p-8">
        <h2 className="text-5xl max-md:text-2xl max-md:font-bold text-white">
          Explore some of my <span className="text-orange-400">projects</span>
        </h2>
        <p className="text-2xl max-md:text-sm text-background opacity-80">
          Mostly MVP or Work In Progress
        </p>
      </div>

      <div
        ref={viewportRef}
        className="relative py-8 max-md:py-12 max-md:scale-180"
      >
        <div
          ref={trackRef}
          className="flex flex-row h-full items-center"
          style={{ willChange: "transform" }}
        >
          {extended.map((p, i) => (
            <div
              key={`${p.id}-${i}`}
              ref={(el) => (itemRefs.current[i] = el)}
              onClick={() => handleClick(i)}
              className="relative shrink-0 cursor-pointer"
              style={{
                width: `${ITEM_WIDTH_VW}vw`,
                marginRight: ITEM_GAP_PX,
                opacity: ITEM_OPACITY_INACTIVE,
              }}
            >
              <Image
                src={p.src}
                alt={`Floppy ${p.label}`}
                width={1371}
                height={1417}
                placeholder="blur"
                sizes="25vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>

      <div
        ref={detailsRef}
        className="flex max-md:flex-1 max-md:flex-col gap-8 max-md:gap-1 mt-8 max-md:mt-4 px-16 max-md:px-8"
      >
        <div className="flex flex-col gap-2 max-md:gap-1 flex-2 max-md:flex-1 ">
          <p className="text-2xl max-md:text-base max-md:font-bold text-white">
            {project.about.title}
          </p>
          <p className="font-mono text-md max-md:text-sm text-background opacity-80">
            {project.about.content}
          </p>
        </div>
        <div className="flex flex-col gap-2 max-md:gap-1 flex-2 max-md:flex-1 ">
          <p className="text-2xl max-md:text-base max-md:font-bold text-white">
            {project.extra.title}
          </p>
          <p className="font-mono text-md max-md:text-sm text-background opacity-80">
            {project.extra.content}
          </p>
        </div>
        <div className="flex items-center justify-center flex-1">
          {project?.action && <ProjectLink action={project.action} />}
        </div>
      </div>
    </div>
  );
};

export default Projects;
