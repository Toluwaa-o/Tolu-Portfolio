"use client";

import { useEffect, useState } from "react";
import Project from "./Project";
import data from "@/data";

const AllProjects = () => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [category, setCategory] = useState("web_development");

  useEffect(() => {
    setPortfolioData(data.filter((dt) => dt.category === category));
  }, [category]);

  return (
    <div className="grid gap-[5vh] p-2 md:gap-[20vh]">
      <span className="flex justify-between text-sm md:text-base md:font-bold gap-2 items-center md:w-[60%] md:m-auto md:gap-6">
        <p
          onClick={() => setCategory("web_development")}
          className={`${
            category === "web_development"
              ? "border-myColor"
              : "border-transparent"
          } text-center w-[100%] pb-2 border-b-2`}
          role="button"
        >
          Web Development
        </p>
        <span className="w-[2px] h-[2rem] bg-myGray"></span>
        <p
          onClick={() => setCategory("data_analysis")}
          className={`${
            category === "data_analysis"
              ? "border-myColor"
              : "border-transparent"
          } text-center w-[100%] pb-2 border-b-2`}
          role="button"
        >
          Data Analysis
        </p>
      </span>
      {portfolioData &&
        portfolioData.map((item) => <Project key={item.id} {...item} />)}
    </div>
  );
};
export default AllProjects;
