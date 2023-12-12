import Link from "next/link";

const Project = ({ name, link, desktopView, description }) => {
  return (
    <div className="grid gap-2 md:gap-4">
      <img src={desktopView} alt={name} className="rounded-md" />
      <div className="grid gap-2 md:gap-4">
        <h4 className="font-extrabold text-2xl">{name}</h4>
        <p className="text-gray-600 text-lg">{description}</p>
        <Link href={link} className="border-b-4 border-myColor w-fit mt-4 md:hover:border-white md:transition-all">View Project</Link>
      </div>
    </div>
  );
};
export default Project;
