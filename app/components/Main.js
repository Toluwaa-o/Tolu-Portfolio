import Link from "next/link";
import Projects from "./Projects/Projects";

export default function Main() {
  return (
    <div className="p-2 grid place-content-center min-h-[50vh] gap-[5vh] md:min-h-[75vh]">
      <span className="text-4xl md:text-6xl font-black tracking-wide grid gap-2 md:gap-4">
        <h1>
          Hi, I'm{" "}
          <Link href="/about" className="bg_text w-fit h-fit md:inline">
            Toluwalashe
          </Link>
        </h1>
        <h2 className="md:leading-tight">
          I{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Toluwaa-o"
            className="outline_text"
          >
            develop
          </a>
          ,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Toluwaa-o"
            className="outline_text"
          >
            code
          </a>
          ,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Toluwaa-o"
            className="outline_text"
          >
            analyze
          </a>
          , &{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Toluwaa-o"
            className="outline_text"
          >
            solve problems
          </a>
          .
        </h2>
      </span>
      <p className="md:text-sm md:tracking-wide md:leading-6">
        I'm a passionate full-stack web developer and data scientist, specializing
        in robust web applications and insightful data analysis. Committed to
        continuous learning and contributing meaningful digital solutions.
      </p>
    </div>
  );
}
