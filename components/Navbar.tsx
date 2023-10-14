"use client";
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import navItems from "../lib/navbar.json";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Input } from "./ui/input";

const Navbar = () => {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <Sheet>
      <nav className="container mx-auto flex items-center gap-3 justify-between py-3">
        {isSearch && (
          <div className="flex-grow">
            <Input className="w-full  !focus-visible:ring-0" />
          </div>
        )}
        {!isSearch && (
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <SheetTrigger asChild>
                <button className="block md:hidden px-1.5 py-1.5 rounded">
                  <Menu width={24} />
                </button>
              </SheetTrigger>

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
                {navItems.slice(0, 8).map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.link}
                      className="hover:text-primeblue font-semibold text-base px-2 py-2"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div>
          <button
            onClick={() => setIsSearch(!isSearch)}
            className="px-2 py-1.5 sm:py-2 bg-gray-100 rounded"
          >
            {!isSearch ? <Search width={20} /> : <X width={20}/>}
          </button>
        </div>
      </nav>

      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>
            <img className="w-2/4" src="assets/roxifylogo.png" alt="logo" />
          </SheetTitle>
        </SheetHeader>

        <ul className="mt-4">
          {navItems.map((item) => (
            <li key={item.id} className="my-2">
              <Link
                href={item.link}
                className="hover:text-primeblue font-semibold text-base py-2"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default Navbar;
