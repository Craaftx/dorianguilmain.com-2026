"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { SplitText } from "gsap/SplitText";
import { useSection } from "./SectionContext";

gsap.registerPlugin(Observer, SplitText);

export default function FullpageScroller({ sections }) {
  const containerRef = useRef(null);
  const gotoRef = useRef(null);
  const currentIndexRef = useRef(-1);
  const { currentId, setSection } = useSection();

  useEffect(() => {
    const sectionEls = containerRef.current.querySelectorAll(".fp-section");

    let animating = false;
    const wrap = gsap.utils.wrap(0, sectionEls.length);

    function gotoSection(index, direction) {
      index = wrap(index);
      animating = true;

      const fromTop = direction === -1;
      const dFactor = fromTop ? -1 : 1;

      const tl = gsap.timeline({
        defaults: { duration: 1.1, ease: "power1.inOut" },
        onComplete: () => {
          setSection(sections[index].id);
          setTimeout(() => {
            animating = false;
          }, 300);
        },
      });

      if (currentIndexRef.current >= 0) {
        gsap.set(sectionEls[currentIndexRef.current], { zIndex: 0 });
        tl.to(
          sectionEls[currentIndexRef.current],
          { yPercent: -100 * dFactor },
          0,
        );
      }

      gsap.set(sectionEls[index], { autoAlpha: 1, zIndex: 1 });

      tl.fromTo(
        sectionEls[index],
        { yPercent: 100 * dFactor },
        { yPercent: 0 },
        0,
      );

      currentIndexRef.current = index;
    }

    gotoRef.current = (index, direction) => {
      if (!animating) gotoSection(index, direction);
    };

    const observer = Observer.create({
      type: "wheel,touch",
      wheelSpeed: -1,
      onDown: () => !animating && gotoSection(currentIndexRef.current - 1, -1),
      onUp: () => !animating && gotoSection(currentIndexRef.current + 1, 1),
      tolerance: 12,
      preventDefault: true,
    });

    const initialHash = window.location.hash.replace("#", "") || "home";
    const initialIndex = sections.findIndex((s) => s.id === initialHash);
    gotoSection(initialIndex >= 0 ? initialIndex : 0, 1);

    return () => {
      observer.kill();
    };
  }, []);

  useEffect(() => {
    const targetIndex = sections.findIndex((s) => s.id === currentId);
    if (targetIndex === -1 || targetIndex === currentIndexRef.current) return;

    const direction = targetIndex > currentIndexRef.current ? 1 : -1;
    gotoRef.current?.(targetIndex, direction);
  }, [currentId]);

  return (
    <div ref={containerRef}>
      {sections.map((section) => (
        <section
          key={section.id}
          className="fp-section"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            visibility: "hidden",
          }}
        >
          {section.content}
        </section>
      ))}
    </div>
  );
}
