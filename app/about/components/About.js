const About = () => {
  return (
    <div className="p-4 grid gap-4 md:gap-[5vh] md:place-content-center md:min-h-[75vh]">
      <h2 className="text-2xl font-black md:text-6xl md:mt-[10vh]">A little bit about myself.</h2>

      <p className="text-sm tracking-wide leading-7 md:text-lg">
        I'm Toluwalashe Ogunleye—a self-taught full-stack developer and data
        analyst with a passion for using technology to make a meaningful impact.
        My journey includes continuous learning, hands-on projects, and active
        involvement in the tech community.
      </p>

      <p className="text-sm tracking-wide leading-7 md:text-lg">
        I'm inspired by both coding and music, finding a creative rhythm in
        their harmony. Football is my passion, offering lessons in teamwork and
        resilience.
      </p>

      <img
        src="/Toluwalashe.jpeg"
        alt="Toluwalashe Ogunleye"
        className="rounded-xl md:mt-[10vh]"
      />
    </div>
  );
};

export default About;
