import Link from "next/link";
import React from "react";

const categories = [
    { name: "Business", link: "/business", totalProduct: 5 },
    { name: "Coding", link: "/coding", totalProduct: 6 },
    { name: "Design", link: "/design", totalProduct: 4 },
  ];

const Categories = () => {
  return (
    <>

        <ul className="mt-2 space-y-2">
          {categories.map((category, i) => (
            <li key={i}>
              <Link
                href={category.link}
                className="flex items-center justify-between text-gray-600 text-base hover:text-primeblue"
              >
                <span>{category.name}</span>
                <span>({category.totalProduct})</span>
              </Link>
            </li>
          ))}
        </ul>
     
    </>
  );
};

export default Categories;
