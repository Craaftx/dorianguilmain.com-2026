import Image from "next/image";

export const scribbleAsTextClasses = "inline-block align-middle";

export const Alien = ({ className, ...props }) => {
  return (
    <Image
      src="/scribbles/symbols/alien.png"
      alt="Alien"
      width={100}
      height={100}
      className={className}
      {...props}
    />
  );
};

export const Crown = ({ className, ...props }) => {
  return (
    <Image
      src="/scribbles/symbols/crown.png"
      alt="Crown"
      width={100}
      height={100}
      className={className}
      {...props}
    />
  );
};

export const Dice = ({ className, ...props }) => {
  return (
    <Image
      src="/scribbles/symbols/dice.png"
      alt="Dice"
      width={100}
      height={100}
      className={className}
      {...props}
    />
  );
};

export const SmileDead = ({ className, ...props }) => {
  return (
    <Image
      src="/scribbles/symbols/smile-dead.png"
      alt="Smile Dead"
      width={100}
      height={100}
      className={className}
      {...props}
    />
  );
};

export const Pyramid = ({ className, ...props }) => {
  return (
    <Image
      src="/scribbles/symbols/pyramid.png"
      alt="Pyramid"
      width={100}
      height={80}
      className={className}
      {...props}
    />
  );
};

export const Diamond = ({ className, ...props }) => {
  return (
    <Image
      src="/scribbles/symbols/diamond.png"
      alt="Diamond"
      width={100}
      height={74}
      className={className}
      {...props}
    />
  );
};

export const Infinite = ({ className, ...props }) => {
  return (
    <Image
      src="/scribbles/symbols/infinite.png"
      alt="Infinite"
      width={100}
      height={45}
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
        src="/scribbles/block.png"
        alt="Block"
        width={300}
        height={300}
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-full w-full object-fit"
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
        src="/scribbles/line-straight.png"
        alt="Underline"
        width={300}
        height={300}
        className="absolute top-full left-1/2 -translate-x-1/2 w-4/5 h-auto object-fit"
        {...props}
      />
    </div>
  );
};
