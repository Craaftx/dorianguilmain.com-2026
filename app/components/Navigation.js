import { Circled } from "./Scribbles";

const Item = ({ number, text, active }) => (
  <Circled
    text={
      <div className="flex gap-2 w-full text-sm">
        <span>{number}</span>
        <span>{text}</span>
      </div>
    }
    active={active}
  />
);

const Menu = () => {
  return (
    <nav className="fixed top-5 left-3 z-110 flex flex-col px-6 py-4 gap-4 bg-foreground rounded-lg">
      <a href="#home" className="text-background hover:text-orange-400">
        <Item number="001" text="Home" active />
      </a>
      <a href="#about" className="text-background hover:text-orange-400">
        <Item number="002" text="About" />
      </a>
      <a href="#projects" className="text-background hover:text-orange-400">
        <Item number="003" text="Projects" />
      </a>
      <a href="#cta" className="text-background hover:text-orange-400">
        <Item number="004" text="Contact" />
      </a>
    </nav>
  );
};

const ACTIVE_CLASSES = "bg-orange-200";
const INACTIVE_CLASSES = "bg-white opacity-20";

const Navigation = () => {
  return (
    <>
      <ul className="fixed top-6 left-4 z-100 flex flex-col gap-3">
        <li className={`w-6 h-1 ${ACTIVE_CLASSES} rounded-full`} />
        <li className={`w-6 h-1 ${INACTIVE_CLASSES} rounded-full`} />
        <li className={`w-6 h-1 ${INACTIVE_CLASSES} rounded-full`} />
        <li className={`w-6 h-1 ${INACTIVE_CLASSES} rounded-full`} />
      </ul>
      {/* <Menu /> */}
    </>
  );
};

export default Navigation;
