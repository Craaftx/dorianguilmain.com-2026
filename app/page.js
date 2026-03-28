import FullpageScroller from "./components/FullpageScroller";
import Home from "./components/Home";
import Projects from "./components/Projects";

const sections = [<Home key="home" />, <Projects key="projects" />];

export default function Page() {
  return <FullpageScroller sections={sections} />;
}
