import Image from "next/image";

const WorkItem = ({ title, description, period }) => (
  <div
    className={`flex gap-8 items-center justify-between border-b border-white/20 pb-2`}
  >
    <div className="flex flex-col gap-0.5">
      <span className="text-sm text-white">{title}</span>
      <span className="text-xs font-mono whitespace-nowrap opacity-70">
        {description}
      </span>
    </div>
    <span className="text-xs font-mono whitespace-nowrap opacity-70 ">
      {period}
    </span>
  </div>
);

const Works = () => (
  <div className="flex flex-col gap-2">
    <WorkItem
      title="Michelin - R&D team"
      description="Full-stack freelancing · React, Node.js, k8s, Azure"
      period={<span className="text-orange-400">2022 - today</span>}
    />
    <WorkItem
      title="Storyfox, Cikaba, Becoms, etc"
      description="Freelancing · React, Typescript, GSAP, Three.js"
      period="2021 - 2023"
    />
    <WorkItem
      title="OpenClassrooms"
      description="Mentoring Javascript/CSS students"
      period="2021 - 2023"
    />
    <WorkItem
      title="Becoms - ClermontWeb"
      description="Fullstack · React, Vue, Node.js, Typescript"
      period="2018 - 2021"
    />
  </div>
);

const Content = () => (
  <div className="flex flex-1 justify-between items-center gap-16 px-16 py-8 text-background">
    <div className="flex gap-8">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-mono">
          Product oriented / Business first
        </span>
        <p className="text-2xl text-white">7+ years of works</p>
        <p className="font-mono text-sm text-muted">
          {`Over 7 years building creative React interfaces in startups and large corporations. Solid foundation. I deliver code designed to last and be passed on.`}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs  font-mono">Pedagogical / Web advocate</span>
        <p className="text-2xl text-white">Turn the complex accessible.</p>
        <p className="font-mono text-sm text-muted">
          {`Three years of mentoring and two years of creating content have taught me how to make complex things accessible, whether to a developer or a decision-maker.`}
        </p>
      </div>
    </div>
    <Works />
  </div>
);

const About = () => {
  return (
    <div className="relative flex flex-col justify-between h-screen bg-foreground z-30">
      <div className="relative min-h-[65vh] w-full overflow-hidden">
        <Image
          src="/collages/big-sunset-01.png"
          alt="Big Sunset"
          width={1440}
          height={512}
          className="absolute -top-2 left-[50%] -translate-x-1/2 scale-125"
        />
        <Image
          src="/collages/mountains.png"
          alt="Mountains"
          width={875}
          height={615}
          className="absolute -bottom-48 -right-2"
        />
        <Image
          src="/collages/mountains.png"
          alt="Mountains"
          width={875}
          height={615}
          className="absolute -bottom-32 -left-2"
        />
        <div className="absolute w-full bottom-0 left-[50%] -translate-x-1/2 flex items-end justify-center">
          <div className="relative h-[453px] scale-70 translate-y-30 translate-x-40 z-10">
            <Image
              src="/collages/about-01.png"
              alt="About 01"
              width={300}
              height={400}
              className="tv-screen absolute top-[57px] left-[92px] h-[145px] w-auto rotate-4  object-contain -z-10"
            />
            <div className="absolute top-[57px] left-[92px] h-[145px] w-[190px] rotate-4  object-contain -z-20 bg-black" />
            <Image
              src="/collages/tv-01.png"
              alt="TV Guy"
              width={360}
              height={453}
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="relative h-[631px] w-auto scale-70 translate-y-30 z-20">
            <span className="absolute bottom-[92%] left-[50%] -translate-x-1/2 text-white text-9xl font-bold whitespace-nowrap -z-30">
              Learn more about me
            </span>
            <Image
              src="/collages/about-02.png"
              alt="About 02"
              width={300}
              height={400}
              className="tv-screen-2 absolute top-[31px] left-[81px] h-[210px] w-auto -rotate-3 object-contain -z-20"
            />
            <div className="absolute top-[31px] left-[81px] h-[210px] w-[270px] -rotate-3  object-contain -z-30 bg-black" />
            <Image
              src="/collages/tv-02.png"
              alt="TV Girl"
              width={521}
              height={631}
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="relative h-[508px] w-auto scale-70 translate-y-30 -translate-x-40 z-10">
            <Image
              src="/collages/about-03.png"
              alt="About 03"
              width={300}
              height={400}
              className="tv-screen-3 absolute top-[24px] left-[52px] h-[180px]  w-auto -rotate-4 object-contain -z-20"
            />
            <div className="absolute top-[24px] left-[52px] h-[180px] w-[240px] -rotate-4 object-contain -z-30 bg-black" />
            <Image
              src="/collages/tv-03.png"
              alt="TV Old Guy"
              width={388}
              height={508}
              className="h-full w-auto  object-contain"
            />
          </div>
        </div>
      </div>
      <Content />
    </div>
  );
};

export default About;
