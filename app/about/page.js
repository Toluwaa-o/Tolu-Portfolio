import LinkPage from "../components/Links";
import About from "./components/About";
import Values from "./components/Values";

const AboutPage = () => {
  return (
    <div className="pb-4 grid gap-4">
      <About />
      <Values />
      <LinkPage />
    </div>
  );
};

export default AboutPage;
