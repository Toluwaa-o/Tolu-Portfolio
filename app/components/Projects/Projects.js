import AllProjects from "./AllProjects";

const Projects = async () => {
  return (
    <article id="work" className="grid gap-[5vh]">
      <span className="flex items-center uppercase gap-2 md:mb-[5vh]">
        <span className="bg-black w-[10vw] h-[2px]"></span>
        <h3 className="tracker-wider">Featured Projects</h3>
      </span>

      <AllProjects />

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
