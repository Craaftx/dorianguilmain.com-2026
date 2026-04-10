import Image from "next/image";
import boxImg from "../../../public/scribbles/box.png";

const ProjectLink = ({ action, className = "", ...props }) => {
  return (
    <a
      href={action.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative inline-block text-lg text-nowrap text-white hover:text-orange-400 ${className}`}
      {...props}
    >
      {action.label}
      <Image
        src={boxImg}
        alt="Box"
        placeholder="blur"
        sizes="128px"
        className="absolute h-full w-full  scale-y-180 scale-x-130 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] pointer-events-none"
      />
    </a>
  );
};

export default ProjectLink;
