"use client"

import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About us", link: "/about-us" },
  { name: "Contact us", link: "/contact-us" },
];

const socialItems = [
  { name: "Facebook", icon: "ic:baseline-facebook", link: "https://facebook.com/" },
  { name: "Youtube", icon: "mdi:youtube", link: "https://youtube.com" },
  { name: "Twitter", icon: "mdi:twitter", link: "https://twitter.com" },
  { name: "Pinterest", icon: "mdi:pinterest", link: "https://pinterest.com" },
];

const TopNav = () => {
  return (
    <div className="border-b py-1 hidden sm:block">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <ul className="flex items-center gap-5">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.link} className="font-xs hover:text-primeblue">{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="flex items-center gap-3">
            {socialItems.map((item) => (
              <li key={item.name}>
                <Link href={item.link} target="_blank">
                  <Icon width={20} icon={item.icon} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
