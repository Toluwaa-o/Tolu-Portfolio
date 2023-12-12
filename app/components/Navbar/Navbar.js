"use client";

import Link from "next/link";
import HamburgerMenu from "./Hamburger";
import Works from "./Works";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  const [show, setShow] = useState(false);

  return (
    <nav className="flex justify-between relative p-4 items-center">
      <Link
        className="flex text-black text-lg md:font-extrabold md:text-xl transition-all"
        href="/"
      >
        <p>Toluwalashe</p>
      </Link>
      <HamburgerMenu show={show} setShow={setShow} />
      <ul
        className={`absolute bg-white top-[5vh] w-[100vw] left-0 right-0 shadow-md p-4 text-center grid gap-4 justify-start ${
          show ? "nav_in" : "nav_out"
        } md:flex md:relative md:top-[unset] md:w-fit md:gap-8 md:shadow-none`}
      >
        <li>
          <Link
            className={`${
              path === "/" ? "text-black" : "text-gray-600"
            } font-bold text-lg transition-all md:hover:text-black`}
            onClick={() => setShow(false)}
            href="/"
          >
            <p>Home</p>
          </Link>
        </li>

        <Works show={show} setShow={setShow} path={path} />

        <li>
          <Link
            className={`${
              path === "/about" ? "text-black" : "text-gray-600"
            } font-bold text-lg transition-all md:hover:text-black`}
            onClick={() => setShow(false)}
            href="/about"
          >
            <p>About</p>
          </Link>
        </li>

        <li>
          <a
            className="text-gray-600 font-bold text-lg transition-all md:hover:text-black"
            href="#bottom"
            onClick={() => setShow(false)}
          >
            <p>Contact</p>
          </a>
        </li>

        <li>
          <a
            className="text-gray-600 font-bold text-lg transition-all md:hover:text-black"
            href="https://docs.google.com/document/d/1hQFAw234_02t2OQeKad2MF-HQckYIPAt5U614fkPajk/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setShow(false)}
          >
            <p>CV / Resume</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
