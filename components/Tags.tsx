import Link from "next/link";
import React from "react";

const tags = [
    { name: "Business", link: "/business", totalProduct: 5 },
    { name: "Coding", link: "/coding", totalProduct: 6 },
    { name: "Design", link: "/design", totalProduct: 4 },
  ];


const Tags = () => {
  return (
    <>
     
        <ul className="mt-2 flex items-center flex-wrap gap-2">
          {tags.map((tag, i) => (
            <li key={i}>
              <Link
                href={tag.link}
                className="flex bg-gray-200 hover:bg-primeblue px-4 py-1.5 text-xs hover:text-white rounded-sm"
              >
                <span>
                  {tag.name} ({tag.totalProduct})
                </span>
              </Link>
            </li>
          ))}
        </ul>
     
    </>
  );
};

export default Tags;
