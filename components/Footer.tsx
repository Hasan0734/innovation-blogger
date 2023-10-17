"use client";
import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";

import CoddingCard from "./Home/CoddingCard";
import Categories from "./Categories";
import Tags from "./Tags";

const categories = [
  { name: "Business", link: "/business", totalProduct: 5 },
  { name: "Coding", link: "/coding", totalProduct: 6 },
  { name: "Design", link: "/design", totalProduct: 4 },
];

const items = [
  { title: "Home", url: "/" },
  { title: "About Us", url: "/about-us" },
  { title: "Contact Us", url: "/contact-us" },
];

const Footer = () => {
  return (
    <footer className=" shadow-[3px_-2px_9px_#e2e2e2]">
      <div className="container mx-auto">
        <div className="py-7 border-b flex items-center justify-between gap-x-20 gap-y-5 flex-col sm:flex-row">
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
              <Categories />
            </div>
            <div>
              <h2 className="text-base font-semibold uppercase">Main Tags</h2>
              <Tags />
            </div>
          </div>

          <div>
            <h2 className="text-base font-semibold uppercase">Latest Posts</h2>
            <div className="mt-3 space-y-3">
              <CoddingCard titleSize={"text-base leading-5"} />
              <CoddingCard titleSize={"text-base leading-5"} />
              <CoddingCard titleSize={"text-base leading-5"} />
            </div>
          </div>
          <div>
            <h2 className="text-base font-semibold uppercase">Popular Posts</h2>
            <div className="mt-3 space-y-3">
              <CoddingCard titleSize={"text-base leading-5"} />
              <CoddingCard titleSize={"text-base leading-5"} />
              <CoddingCard titleSize={"text-base leading-5"} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 py-3">
        <div className="container mx-auto flex flex-col-reverse gap-y-2 flex- sm:flex-row items-center justify-between">
          <div>
            <span className="text-sm">
              Developed by{" "}
              <span className="text-primeblue font-semibold">@Jahid0734</span>
            </span>
          </div>
          <div>
            <ul className="flex items-center gap-6 flex-wrap">
              {items.map((item, i) => (
                <li key={i}>
                  <Link
                    className="text-sm hover:text-primeblue"
                    href={item.url}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
