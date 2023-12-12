import LinkPage from "./components/Links";
import Main from "./components/Main";
import Projects from "./components/Projects/Projects";

export default function Home() {
  return (
    <div className="p-4 grid place-content-center gap-[8vh]">
      <Main />
      <Projects />
      <LinkPage />
    </div>
  );
}
