"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const projects = [
  {
    id: "css",
    src: "/floppies/css.png",
    label: "CSS",
    about:
      "A deep dive into advanced CSS techniques, animations, and modern layout systems.",
    extra:
      "Built with pure CSS — no JavaScript frameworks. Showcases grid, custom properties, and keyframe animations.",
  },
  {
    id: "furnitures",
    src: "/floppies/furnitures.png",
    label: "Furnitures",
    about:
      "An e-commerce concept for a furniture brand, focused on clean UI and smooth browsing experience.",
    extra:
      "MVP built with Next.js and a headless CMS. Optimized for mobile and desktop viewports.",
  },
  {
    id: "newsletter",
    src: "/floppies/newsletter.png",
    label: "Newsletter",
    about:
      "A newsletter platform for indie creators to publish and distribute their writing.",
    extra:
      "Includes subscription management, rich text editing, and email delivery integration.",
  },
  {
    id: "portfolio",
    src: "/floppies/porfolio.png",
    label: "Portfolio",
    about:
      "This very site — a personal portfolio for Dorian Guilmain, freelance JS developer.",
    extra:
      "Built with Next.js 16, GSAP animations, and Tailwind CSS v4. Designed from scratch.",
  },
];

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

const extended = [...projects, ...projects, ...projects]; // Triple the array for infinite scroll and teleportation trick
const N = projects.length; // Start on the middle of the extended array

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

  const project = projects[selectedReal];

  return (
    <div className="relative flex flex-col h-screen bg-foreground overflow-hidden z-0">
      <div className="absolute h-full w-full -z-10 pointer-events-none">
        <Image
          ref={(el) => (cloudRefs.current[0] = el)}
          src="/collages/pink-cloud.png"
          alt="Pink Cloud"
          width={316}
          height={171}
          className="collage absolute -left-32 -top-8 -rotate-45"
        />
        <Image
          ref={(el) => (cloudRefs.current[1] = el)}
          src="/collages/clouds-01.png"
          alt="Cloud"
          width={468}
          height={298}
          className="collage absolute -right-48 -top-24 -rotate-180"
        />
        <Image
          ref={(el) => (cloudRefs.current[2] = el)}
          src="/collages/pink-cloud.png"
          alt="Pink Cloud"
          width={316}
          height={171}
          className="collage absolute right-2 -top-12 rotate-12"
        />
        <Image
          ref={(el) => (cloudRefs.current[3] = el)}
          src="/collages/clouds-02.png"
          alt="Cloud"
          width={400}
          height={255}
          className="collage absolute -right-48 -bottom-24"
        />
        <Image
          ref={(el) => (cloudRefs.current[5] = el)}
          src="/collages/pink-cloud.png"
          alt="Pink Cloud"
          width={316}
          height={171}
          className="collage absolute -left-28 -bottom-20 -rotate-12"
        />
        <Image
          ref={(el) => (cloudRefs.current[4] = el)}
          src="/collages/pink-cloud.png"
          alt="Pink Cloud"
          width={316}
          height={171}
          className="collage absolute right-[5%] -bottom-24 rotate-180"
        />
      </div>

      <div className="flex flex-col gap-4 p-16">
        <h2 className="text-5xl text-white">
          Explore some of my <span className="text-orange-400">projects</span>
        </h2>
        <p className="text-2xl text-background opacity-80">
          Mostly MVP or Work In Progress
        </p>
      </div>

      <div ref={viewportRef} className="relative py-8">
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
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>

      <div ref={detailsRef} className="flex flex-1 gap-8 mt-8 px-16 pb-16">
        <div className="flex flex-col gap-2 flex-1">
          <p className="text-2xl text-white">What is about</p>
          <p className="text-md text-background opacity-80">{project.about}</p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <p className="text-2xl text-white">And what else?</p>
          <p className="text-md text-background opacity-80">{project.extra}</p>
        </div>
        <div className="flex-1" />
      </div>
    </div>
  );
};

export default Projects;
