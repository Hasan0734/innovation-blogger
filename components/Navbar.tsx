"use client";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import React from "react";
import navItems from "../lib/navbar.json";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between py-3">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <button className="block md:hidden px-1.5 py-1.5 rounded">
            <Menu width={24} />
          </button>
          <div>
            <Link href={"/"}>
              <img
                className="w-28 md:w-40"
                src="assets/roxifylogo.png"
                alt="logo"
              />
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center gap-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className="hover:text-primeblue font-semibold text-base px-4 py-2"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <button className="px-2 py-1.5 sm:py-2 bg-gray-100 rounded">
          <Search width={20} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
