import FullpageScroller from "./components/FullpageScroller";
import Home from "./components/Home";
import Projects from "./components/projects/Projects";
import Cta from "./components/Cta";
import About from "./components/About";
import Navigation from "./components/Navigation";
import { SectionProvider } from "./components/SectionContext";
import { SECTIONS } from "./components/sections";

const sectionContent = {
  home: <Home />,
  about: <About />,
  projects: <Projects />,
  cta: <Cta />,
};

export default function Page() {
  return (
    <SectionProvider>
      <Navigation />
      <FullpageScroller
        sections={SECTIONS.map((s) => ({
          id: s.id,
          content: sectionContent[s.id],
        }))}
      />
    </SectionProvider>
  );
}
