import FullpageScroller from "./components/FullpageScroller";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Cta from "./components/Cta";

const sections = [
  <Home key="home" />,
  <Projects key="projects" />,
  <Cta key="cta" />,
];

export default function Page() {
  return <FullpageScroller sections={sections} />;
}
