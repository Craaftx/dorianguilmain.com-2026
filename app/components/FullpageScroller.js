"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(Observer, SplitText);

export default function FullpageScroller({ sections }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const sectionEls = containerRef.current.querySelectorAll(".fp-section");

    let currentIndex = -1;
    let animating = false;
    const wrap = gsap.utils.wrap(0, sectionEls.length);

    function gotoSection(index, direction) {
      index = wrap(index);
      animating = true;

      const fromTop = direction === -1;
      const dFactor = fromTop ? -1 : 1;

      const tl = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" },
        onComplete: () => {
          animating = false;
        },
      });

      if (currentIndex >= 0) {
        gsap.set(sectionEls[currentIndex], { zIndex: 0 });
        tl.set(sectionEls[currentIndex], { autoAlpha: 0 });
      }

      gsap.set(sectionEls[index], { autoAlpha: 1, zIndex: 1 });

      tl.fromTo(
        sectionEls[index],
        { yPercent: 100 * dFactor },
        { yPercent: 0 },
        0,
      );

      currentIndex = index;
    }

    const observer = Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => !animating && gotoSection(currentIndex - 1, -1),
      onUp: () => !animating && gotoSection(currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true,
    });

    gotoSection(0, 1);

    return () => {
      observer.kill();
    };
  }, []);

  return (
    <div ref={containerRef}>
      {sections.map((section, i) => (
        <section
          key={i}
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
          {section}
        </section>
      ))}
    </div>
  );
}
