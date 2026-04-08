import Image from "next/image";
import MovingBackground from "./MovingBackground";
import {
  Alien,
  Block,
  Crown,
  Dice,
  scribbleAsTextClasses,
  SmileDead,
  Underlined,
} from "./Scribbles";

const BigBlock = ({ text, className = "", ...props }) => {
  return (
    <span
      className={`relative inline-block lg:text-7xl md:text-4xl text-2xl text-orange-300 w-auto ${className}`}
      {...props}
    >
      {text}
      <Image
        src="/scribbles/big-block.png"
        alt="Big Block"
        width={1000}
        height={500}
        className="absolute top-[50%] -left-4 translate-y-[-50%] h-full w-5/6 object-fit"
        {...props}
      />
      <Image
        src="/scribbles/todo.png"
        alt="Todo"
        width={304}
        height={200}
        className="absolute top-full left-2/3 h-1/6 w-auto object-fit"
        {...props}
      />
    </span>
  );
};

const Home = () => {
  return (
    <div className="relative flex items-center justify-center h-screen lg:p-16 md:p-8 p-4 bg-foreground z-0 overflow-hidden">
      <MovingBackground />
      <div className="flex max-md:flex-col w-full h-full bg-background shadow-lg z-10">
        <div className="flex flex-col flex-2 max-md:flex-1 max-md:order-2 justify-between gap-2 p-8">
          <div className="flex justify-between py-2 border-b-2 border-foreground ">
            <p>Dorian G</p>
            <p>Developer/Creator</p>
          </div>

          <BigBlock
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            className="max-md:hidden"
          />

          <h1 className="lg:text-4xl md:text-2xl text-xl md:mb-8 max-md:mt-4">
            I am a{" "}
            <span className="text-orange-400">
              freelance{" "}
              <Crown className={`h-8 w-auto ${scribbleAsTextClasses}`} />
              <Alien className={`h-8 w-auto ${scribbleAsTextClasses}`} />{" "}
              developer
            </span>{" "}
            who focuses on creating great products. In a world{" "}
            <Dice className={`h-8 w-auto ${scribbleAsTextClasses}`} /> where AI{" "}
            <SmileDead className={`h-8 w-auto ${scribbleAsTextClasses}`} /> is
            ubiquitous and software development <Block text="start to be" /> has
            become commonplace,{" "}
            <span className="text-orange-400">creativity</span> and the ability
            to <span className="text-orange-400">build well</span>{" "}
            <Underlined text="have become rare." />
          </h1>
        </div>
        <div className="flex-1 max-md:order-1 max-md:max-h-[50vh] overflow-hidden">
          <Image
            src="/me/main.jpg"
            alt="Profile"
            width={540}
            height={824}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
