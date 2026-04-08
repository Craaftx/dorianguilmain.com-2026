import Image from "next/image";

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
        src="/scribbles/box.png"
        alt="Box"
        width={229}
        height={68}
        className="absolute h-full w-full  scale-y-180 scale-x-130 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] pointer-events-none"
      />
    </a>
  );
};

export default ProjectLink;
