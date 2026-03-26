import FullpageScroller from "./components/FullpageScroller";

const sections = [
  <div className="flex items-center justify-center h-screen" key="hero">
    <p className="text-gray-400">JavaScript Developer</p>
  </div>,
  <div className="flex items-center justify-center h-screen" key="ehl">
    <p className="text-orange-400">Basic Slide</p>
  </div>,
];

export default function Home() {
  return <FullpageScroller sections={sections} />;
}
