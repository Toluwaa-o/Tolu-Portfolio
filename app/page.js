import ChatBox from "./components/Chat/ChatBox";
import LinkPage from "./components/Links";
import Main from "./components/Main";
import Projects from "./components/Projects/Projects";

export default function Home() {
  return (
    <div className="p-4 grid place-content-center gap-[8vh] relative">
      <ChatBox />
      <Main />
      <Projects />
      <LinkPage />
    </div>
  );
}
