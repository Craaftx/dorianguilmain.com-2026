import cssImg from "../../../public/floppies/css.png";
import furnituresImg from "../../../public/floppies/furnitures.png";
import newsletterImg from "../../../public/floppies/newsletter.png";
import portfolioImg from "../../../public/floppies/porfolio.png";

const projectsContent = [
  {
    id: "css",
    src: cssImg,
    label: "CSS",
    about: {
      title: "My last blog",
      content:
        "I wanted to write about my job and all the problems that CSS can create when building simple or complicated applications.",
    },
    extra: {
      title: "Some details",
      content:
        "Written in French, this blog explores advanced CSS techniques, animations, and modern layout systems.",
    },
    action: {
      label: "Start to read (FR) →",
      href: "https://blog.dorianguilmain.com",
    },
  },
  {
    id: "furnitures",
    src: furnituresImg,
    label: "Furnitures",
    about: {
      title: "More Hoobies",
      content:
        "On my spare time I like to build things like custom furniture, mostly 80s inspired. Some of them come with technology like my mural of RFID CD's.",
    },
    extra: {
      title: "Sometimes BIG",
      content:
        "I built a van by myself in 9 months to travel around Europe in the last 2 years. From carpentery to electrical work, it was a full learning experience.",
    },
  },
  {
    id: "newsletter",
    src: newsletterImg,
    label: "Newsletter",
    about: {
      title: "A newsletter",
      content:
        "This french newsletter shares insights on AI, software engineering, and the future of work.",
    },
    extra: {
      title: "What's the matter ?",
      content:
        "AI is making coding accessible to everyone, but not software engineering. However, nothing comes without a price. The ability to build it well remains rare.",
    },
    action: {
      label: "Take a look (FR) →",
      href: "https://camarchepourlinstant.substack.com",
    },
  },
  {
    id: "portfolio",
    src: portfolioImg,
    label: "Portfolio",
    about: {
      title: "You're already on it",
      content:
        "This very site — a personal portfolio of me, a freelance JS developer and my tiny space on the web. (with some easter eggs to find)",
    },
    extra: {
      title: "Some tech details",
      content:
        "Built with Next.js 16, GSAP animations, and Tailwind CSS v4. Designed from scratch. Collage style.",
    },
  },
];

export default projectsContent;
