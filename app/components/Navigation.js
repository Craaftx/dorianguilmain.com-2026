"use client";

import { useState } from "react";
import { Circled } from "./Scribbles";
import { useSection } from "./SectionContext";
import { SECTIONS } from "./sections";
import Image from "next/image";
import bigSunset01Img from "../../public/collages/big-sunset-01.png";
import mountainsImg from "../../public/collages/mountains.png";

const Item = ({ number, text, active }) => (
  <Circled
    text={
      <div className="flex gap-2 w-full text-sm">
        <span>{number}</span>
        <span>{text}</span>
      </div>
    }
    active={active}
  />
);

const Menu = ({ currentId }) => {
  return (
    <nav className="fixed top-5 left-3 z-110 flex flex-col px-6 py-4 gap-4 bg-foreground rounded-lg overflow-hidden">
      {SECTIONS.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="text-background hover:text-orange-400 z-10"
        >
          <Item number={s.number} text={s.label} active={currentId === s.id} />
        </a>
      ))}
      <Image
        src={bigSunset01Img}
        alt="Big Sunset"
        placeholder="blur"
        sizes="200px"
        quality={50}
        className="absolute  scale-200 rotate-5 -top-2 left-[50%] -translate-x-1/2 opacity-40 z-0"
      />
      <Image
        src={mountainsImg}
        alt="Mountains"
        placeholder="blur"
        sizes="200px"
        quality={50}
        className="absolute -bottom-2 left-0 w-full opacity-40 z-0"
      />
    </nav>
  );
};

const ACTIVE_CLASSES = "bg-orange-200";
const INACTIVE_CLASSES = "bg-white opacity-20";

const Indicators = ({ currentId, onMouseEnter }) => {
  return (
    <ul
      className="fixed top-6 left-4 z-100 flex flex-col gap-3"
      onMouseEnter={onMouseEnter}
    >
      {SECTIONS.map((s) => (
        <li
          key={s.id}
          className={`w-6 h-1 ${currentId === s.id ? ACTIVE_CLASSES : INACTIVE_CLASSES} rounded-full`}
        />
      ))}
    </ul>
  );
};

const Navigation = () => {
  const { currentId } = useSection();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="max-sm:hidden" onMouseLeave={() => setMenuOpen(false)}>
      <Indicators
        currentId={currentId}
        onMouseEnter={() => setMenuOpen(true)}
      />
      {menuOpen && <Menu currentId={currentId} />}
    </div>
  );
};

export default Navigation;
