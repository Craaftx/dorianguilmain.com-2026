import Image from "next/image";

const WorkItem = ({ title, description, period }) => (
  <div className="flex sm:gap-8 gap-2 sm:items-center sm:justify-between border-b border-text/20 sm:pb-2 pb-1">
    <div className="flex flex-col sm:gap-0.5">
      <span className="flex gap-2 sm:text-sm text-xs">
        {title}{" "}
        <span className="md:hidden text-xs font-mono whitespace-nowrap opacity-70">
          {"("}
          {period}
          {")"}
        </span>
      </span>
      <span className="text-xs font-mono sm:whitespace-nowrap opacity-70">
        {description}
      </span>
    </div>
    <span className="max-md:hidden text-xs font-mono sm:whitespace-nowrap opacity-70 ">
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
  <div className="flex max-sm:flex-col max-lg:flex-1 sm:justify-between sm:items-center lg:gap-16 gap-8 lg:px-16 md:px-8 px-4 py-8 text-background bg-foreground">
    <div className="flex lg:flex-row flex-col lg:gap-8 gap-4">
      <div className="flex flex-col lg:gap-2 gap-1">
        <span className="text-xs font-mono opacity-80">
          Product oriented / Business first
        </span>
        <p className="lg:text-2xl md:text-xl text-base max-sm:font-bold">
          7+ years of works
        </p>
        <p className="font-mono md:text-sm text-xs opacity-80">
          {`Over 7 years building creative React interfaces in startups and large corporations. Solid foundation. I deliver code designed to last and be passed on.`}
        </p>
      </div>
      <div className="flex flex-col lg:gap-2 gap-1">
        <span className="text-xs font-mono opacity-80">
          Pedagogical / Web advocate
        </span>
        <p className="lg:text-2xl md:text-xl text-base max-sm:font-bold">
          Turn the complex accessible.
        </p>
        <p className="font-mono md:text-sm text-xs opacity-80">
          {`Three years of mentoring and two years of creating content have taught me how to make complex things accessible, whether to a developer or a decision-maker.`}
        </p>
      </div>
    </div>
    <Works />
  </div>
);

const About = () => {
  return (
    <div className="relative flex flex-col justify-between h-screen bg-foreground z-30 overflow-hidden">
      <div className="relative flex-1 lg:min-h-[65vh] h-auto w-full overflow-hidden">
        <Image
          src="/collages/big-sunset-01.png"
          alt="Big Sunset"
          width={1440}
          height={512}
          className="absolute h-[85%] min-w-full -top-2 left-[50%] -translate-x-1/2 object-cover"
        />
        <Image
          src="/collages/mountains.png"
          alt="Mountains"
          width={875}
          height={615}
          className="absolute h-[85%] w-auto -bottom-48 -right-24 object-contain"
        />
        <Image
          src="/collages/mountains.png"
          alt="Mountains"
          width={875}
          height={615}
          className="absolute h-[85%] w-auto -bottom-32 -left-2 object-contain"
        />
        <div className="absolute w-[55vw] max-md:w-[80vw] bottom-0 left-[50%] -translate-x-1/2 ">
          <div className="absolute bottom-0 left-0 h-[453px] w-[360px] lg:scale-75 md:scale-50 scale-30 lg:translate-y-25 md:translate-y-40 translate-y-45 lg:-translate-x-30 md:-translate-x-50 -translate-x-50 z-10">
            <Image
              src="/collages/about-01.png"
              alt="About 01"
              width={300}
              height={400}
              className="tv-screen absolute top-[57px] left-[92px] h-[145px] w-[190px] rotate-4  -z-10"
            />
            <div className="absolute top-[57px] left-[92px] h-[145px] w-[190px] rotate-4  -z-20 bg-black" />
            <Image
              src="/collages/tv-01.png"
              alt="TV Guy"
              width={360}
              height={453}
              className="h-[453px] w-[360px]"
            />
          </div>
          <div className="absolute bottom-0 left-1/2 h-[631px] w-[521px] lg:scale-70 md:scale-50 scale-30 lg:translate-y-30 md:translate-y-40 translate-y-60 -translate-x-1/2 z-20">
            <span className="absolute bottom-[92%] left-[50%] -translate-x-1/2 text-white text-9xl font-bold whitespace-nowrap -z-30">
              Learn more about me
            </span>
            <Image
              src="/collages/about-02.png"
              alt="About 02"
              width={300}
              height={400}
              className="tv-screen-2 absolute top-[31px] left-[81px] h-[210px] w-[270px] -rotate-3 -z-20"
            />
            <div className="absolute top-[31px] left-[81px] h-[210px] w-[270px] -rotate-3  -z-30 bg-black" />
            <Image
              src="/collages/tv-02.png"
              alt="TV Girl"
              width={521}
              height={631}
              className="h-[631px] w-[521px]"
            />
          </div>
          <div className="absolute bottom-0 right-0 h-[508px] w-[388px] lg:scale-70 md:scale-50 scale-30 lg:translate-y-30 md:translate-y-40 translate-y-50 lg:translate-x-30 md:translate-x-50 translate-x-50 z-10">
            <Image
              src="/collages/about-03.png"
              alt="About 03"
              width={300}
              height={400}
              className="tv-screen-3 absolute top-[24px] left-[52px] h-[180px] w-[240px] -rotate-4 -z-20"
            />
            <div className="absolute top-[24px] left-[52px] h-[180px] w-[240px] -rotate-4 -z-30 bg-black" />
            <Image
              src="/collages/tv-03.png"
              alt="TV Old Guy"
              width={388}
              height={508}
              className="h-[508px] w-[388px]"
            />
          </div>
        </div>
      </div>
      <Content />
    </div>
  );
};

export default About;
