"use client";
import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";

const Categories = [
  { name: "Business", link: "/business", totalProduct: 5 },
  { name: "Coding", link: "/coding", totalProduct: 6 },
  { name: "Design", link: "/design", totalProduct: 4 },
];

const Footer = () => {
  return (
    <footer className="py-5 shadow-[3px_-2px_9px_#e2e2e2]">
      <div className="container mx-auto">
        <div className="py-10 border-b flex items-center justify-between gap-x-20 gap-y-5 flex-col sm:flex-row">
          <div className="flex items-center gap-5 flex-col sm:flex-row">
            <img
              className="w-3/5 sm:w-1/5"
              src="assets/roxifylogo.png"
              alt="logo"
            />

            <div>
              <h3 className="text-xl font-semibold uppercase hidden sm:block">
                About us
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
                hic ex, illo itaque quibusdam repellendus sapiente cumque
                veritatis in nam sunt quaerat eaque quo non!
              </p>
            </div>
          </div>
          <div>
            <ul className="flex items-center gap-2">
              <li>
                <Link
                  href={"/"}
                  className="rounded-sm px-2 py-2 bg-gray-200 hover:bg-blue-900 hover:text-white block"
                >
                  <Icon width={24} icon="ic:baseline-facebook" />
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="rounded-sm px-2 py-2 bg-gray-200 hover:bg-blue-400 hover:text-white block"
                >
                  <Icon width={24} icon="mdi:twitter" />
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="rounded-sm px-2 py-2 bg-gray-200 hover:bg-red-500 hover:text-white block"
                >
                  <Icon width={24} icon="mdi:youtube" />
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="rounded-sm px-2 py-2 bg-gray-200 hover:bg-[#dd277b] hover:text-white block"
                >
                  <Icon width={24} icon="mdi:instagram" />
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="rounded-sm px-2 py-2 bg-gray-200 hover:bg-red-600 hover:text-white block"
                >
                  <Icon width={24} icon="mdi:pinterest" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
          <div className="space-y-3">
            <div>
              <h2 className="text-base font-semibold uppercase">Categories</h2>
              <ul className="mt-2 space-y-2">
                {Categories.map((category, i) => (
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
            </div>
            <div>
              <h2 className="text-base font-semibold uppercase">Main Tags</h2>
              <ul className="mt-2 flex items-center gap-2">
                {Categories.map((category, i) => (
                  <li key={i}>
                    <Link
                      href={category.link}
                      className="flex bg-gray-200 hover:bg-primeblue px-4 py-1.5 text-xs hover:text-white rounded-sm"
                    >
                      <span>
                        {category.name} ({category.totalProduct})
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-base font-semibold uppercase">Latest Posts</h2>
          </div>
          <div>
            <h2 className="text-base font-semibold uppercase">Latest Posts</h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
