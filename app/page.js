import FullpageScroller from "./components/FullpageScroller";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Cta from "./components/Cta";
import About from "./components/About";

const sections = [
  <Home key="home" />,
  <About key="about" />,
  <Projects key="projects" />,
  <Cta key="cta" />,
];

export default function Page() {
  return <FullpageScroller sections={sections} />;
}
