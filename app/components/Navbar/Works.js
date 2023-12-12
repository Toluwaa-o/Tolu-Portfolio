"use client";

import data from "@/utils/data";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

const Works = (props) => {
  const [show, setShow] = useState(false);

  const closeDropDowns = () => {
    setShow(false);
    props.setShow(false);
  };

  return (
    <>
      <li className="md:hidden grid gap-4 md:relative">
        <span
          className="flex items-center w-[90vw] m-auto relative"
          role="button"
        >
          <p className="text-gray-600 font-bold text-lg transition-all m-auto ">
            Work
          </p>
          {show ? (
            <IoIosArrowDown
              onClick={() => setShow(false)}
              className="absolute right-0 md:relative"
            />
          ) : (
            <IoIosArrowUp
              onClick={() => setShow(true)}
              className="absolute right-0 md:relative"
            />
          )}
        </span>
        <ul className={`grid gap-4 ${show ? "works_in" : "works_out"}`}>
          {data.map(({ name, link }) => (
            <li>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => closeDropDowns}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </li>
      <li
        onMouseOver={() => setShow(true)}
        onMouseOut={() => setShow(false)}
        className="hidden md:grid gap-4 md:relative"
      >
        <span
          className="flex items-center w-[90vw] m-auto relative md:w-fit md:gap-4"
          role="button"
        >
          <p className="text-gray-600 font-bold text-lg transition-all m-auto md:hover:text-black">
            Work
          </p>
          {show ? (
            <IoIosArrowDown className="absolute right-0 md:relative" />
          ) : (
            <IoIosArrowUp className="absolute right-0 md:relative" />
          )}
        </span>
        <ul
          className={`grid gap-4 ${
            show ? "works_in" : "works_out"
          } md:absolute md:top-[1.8rem] md:h-fit md:bg-white md:shadow-lg md:p-4 md:w-[30vw]`}
        >
          {data.map(({ name, link }) => (
            <li>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="md:hover:border-b-4 md:hover:border-myColor md:transition-all"
                onClick={() => closeDropDowns}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </li>
    </>
  );
};

export default Works;
