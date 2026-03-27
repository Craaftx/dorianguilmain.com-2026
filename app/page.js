import FullpageScroller from "./components/FullpageScroller";
import Home from "./components/Home";

const sections = [
  <Home key="home" />,
  <div className="flex items-center justify-center h-screen" key="ehl">
    <p className="text-orange-400">Basic Slide</p>
  </div>,
];

export default function Page() {
  return <FullpageScroller sections={sections} />;
}
