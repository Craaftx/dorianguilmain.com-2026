import { Alien, Block, scribbleAsTextClasses } from "./Scribbles";

const Cta = () => {
  return (
    <div className="relative flex flex-col justify-between h-screen overflow-hidden z-0 p-16">
      <div className="flex flex-col gap-4 p-4 shadow-md w-full max-w-2xl bg-background">
        <h2 className="text-7xl">
          <span className="text-orange-400">Thanks you</span> for this
          exploration
        </h2>
        <p className="text-2xl">{`Feel free to contact me and discuss of my place in one your projects. And please don’t hesitate to customise the visuals of the site. I will love to see your creativity.`}</p>
      </div>
      <div className="flex justify-between bg-background border-t-4 border-orange-400 px-4 py-3 mx-4">
        <div className="flex flex-col">
          <p className="font-bold">Get In Touch</p>
          <p className="text-sm">hello@dorianguilmain.com</p>
          <span className="text-sm">
            +3362
            <Block text="555-5555" />
          </span>
        </div>
        <div className="flex flex-col">
          <p className="font-bold">Connect</p>
          <p className="text-sm">LinkedIn</p>
          <p className="text-sm">Github</p>
        </div>
        <div className="flex flex-col">
          <p className="font-bold">Freelancing TLDR:</p>
          <span className="text-sm">
            Typescript/Javascript/React with +7 yr of experience{" "}
            <Alien className={`h-5 w-auto ${scribbleAsTextClasses}`} />
          </span>
          <p className="text-sm">
            Fully remote for the past 4 years. Artistic taste.
          </p>
        </div>
        <div className="flex flex-col">
          <p className="font-bold">Credits</p>
          <p className="text-sm">
            This website is fully designed/developed by myself
          </p>
          <p className="text-sm">React + GSAP + a ton shit of CSS</p>
        </div>
      </div>
    </div>
  );
};

export default Cta;
