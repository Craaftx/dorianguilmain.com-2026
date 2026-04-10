import Image from "next/image";
import alienImg from "../../public/scribbles/symbols/alien.png";
import crownImg from "../../public/scribbles/symbols/crown.png";
import diceImg from "../../public/scribbles/symbols/dice.png";
import smileDeadImg from "../../public/scribbles/symbols/smile-dead.png";
import pyramidImg from "../../public/scribbles/symbols/pyramid.png";
import diamondImg from "../../public/scribbles/symbols/diamond.png";
import infiniteImg from "../../public/scribbles/symbols/infinite.png";
import blockImg from "../../public/scribbles/block.png";
import circledImg from "../../public/scribbles/circled.png";
import lineStraightImg from "../../public/scribbles/line-straight.png";

export const scribbleAsTextClasses = "inline-block align-middle";

export const Alien = ({ className, ...props }) => {
  return (
    <Image
      src={alienImg}
      alt="Alien"
      placeholder="blur"
      sizes="32px"
      className={className}
      {...props}
    />
  );
};

export const Crown = ({ className, ...props }) => {
  return (
    <Image
      src={crownImg}
      alt="Crown"
      placeholder="blur"
      sizes="32px"
      className={className}
      {...props}
    />
  );
};

export const Dice = ({ className, ...props }) => {
  return (
    <Image
      src={diceImg}
      alt="Dice"
      placeholder="blur"
      sizes="32px"
      className={className}
      {...props}
    />
  );
};

export const SmileDead = ({ className, ...props }) => {
  return (
    <Image
      src={smileDeadImg}
      alt="Smile Dead"
      placeholder="blur"
      sizes="64px"
      className={className}
      {...props}
    />
  );
};

export const Pyramid = ({ className, ...props }) => {
  return (
    <Image
      src={pyramidImg}
      alt="Pyramid"
      placeholder="blur"
      sizes="32px"
      className={className}
      {...props}
    />
  );
};

export const Diamond = ({ className, ...props }) => {
  return (
    <Image
      src={diamondImg}
      alt="Diamond"
      placeholder="blur"
      sizes="32px"
      className={className}
      {...props}
    />
  );
};

export const Infinite = ({ className, ...props }) => {
  return (
    <Image
      src={infiniteImg}
      alt="Infinite"
      placeholder="blur"
      sizes="32px"
      className={className}
      {...props}
    />
  );
};

export const Block = ({ text, className, ...props }) => {
  return (
    <div className="relative inline-block" {...props}>
      <span className="opacity-80">{text}</span>
      <Image
        src={blockImg}
        alt="Block"
        placeholder="blur"
        sizes="128px"
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-full w-full object-fit"
        {...props}
      />
    </div>
  );
};

export const Circled = ({ text, className, active = false, ...props }) => {
  return (
    <div className="relative inline-block" {...props}>
      {text}
      <Image
        src={circledImg}
        alt="Circled"
        placeholder="blur"
        sizes="128px"
        className={`absolute h-full w-full  scale-y-180 scale-x-130 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] pointer-events-none ${active ? "opacity-100" : "opacity-0"}`}
        {...props}
      />
    </div>
  );
};

export const Underlined = ({ text, className, ...props }) => {
  return (
    <div className="relative inline-block" {...props}>
      <span>{text}</span>
      <Image
        src={lineStraightImg}
        alt="Underline"
        placeholder="blur"
        sizes="128px"
        className="absolute top-full left-1/2 -translate-x-1/2 w-4/5 h-auto object-fit"
        {...props}
      />
    </div>
  );
};
