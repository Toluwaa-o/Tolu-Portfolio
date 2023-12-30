import Project from "@/app/components/Projects/Project";
import { PrismaClient } from "@prisma/client";
import Link from "next/link";
import { notFound } from "next/navigation";
import AllProjects from "./AllProjects";

const prisma = new PrismaClient();

export const getProjects = async () => {
  const projects = await prisma.portfolios.findMany();

  if (!projects) return notFound();

  return projects;
};

const Projects = async () => {
  const data = await getProjects();

  return (
    <article id="work" className="grid gap-[5vh]">
      <span className="flex items-center uppercase gap-2 md:mb-[5vh]">
        <span className="bg-black w-[10vw] h-[2px]"></span>
        <h3 className="tracker-wider">Featured Projects</h3>
      </span>

      <AllProjects data={data} />

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Toluwaa-o"
        className="border-b-4 border-black w-fit mt-4 uppercase m-auto md:hover:border-white md:hover:font-black md:transition-all"
      >
        Other Projects
      </a>
    </article>
  );
};

export default Projects;
