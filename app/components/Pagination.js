"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const Pagination = ({ array }) => {
  const params = useParams();

  return (
    <ul className="flex gap-3 text-lg justify-center">
      {array.map((num) => (
        <li
          className={
            +params.slug === +num
              ? "font-bold border-b-2 border-black px-2"
              : "px-2 font-bold border-b-2 border-transparent md:hover:border-black"
          }
          key={num}
        >
          <Link href={`/portfolio/${num}`}>{num}</Link>
        </li>
      ))}
    </ul>
  );
};
export default Pagination;
