"use client";

import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";

const follows = [
  {
    id: 1,
    name: "Facebook",
    icon: "ic:baseline-facebook",
    link: "https://facebook.com/",
    background: "#3b5999",
    bgLinear: "",
  },
  {
    id: 2,
    name: "Twitter",
    icon: "mdi:twitter",
    link: "https://twitter.com/",
    background: "#00acee",
    bgLinear: "",
  },
  {
    id: 3,
    name: "YouTube",
    icon: "mdi:youtube",
    link: "https://youtube.com/",
    background: "#f50000",
    bgLinear: "",
  },
  {
    id: 4,
    name: "Instagram",
    icon: "mdi:instagram",
    link: "https://instagram.com/",
    background: "",
    bgLinear: "linear-gradient(15deg,#ffb13d,#dd277b,#4d5ed4)",
  },
  {
    id: 5,
    name: "LinkedIn",
    icon: "mdi:linkedin",
    link: "https://linkedin.com/",
    background: "#0077b5",
    bgLinear: "",
  },
  {
    id: 6,
    name: "Skype",
    icon: "mdi:skype",
    link: "https://skype.com/",
    background: "#00aff0",
    bgLinear: "",
  },
];

const FollowUs = () => {
  return (
    <div className=" pt-7">
      <ul className="grid grid-cols-2 sm:grid-cols-2 gap-2">
        {follows.map((follow) => (
          <li key={follow.id}>
            <Link
              className={`w-full flex items-center justify-between pr-2`}
              href={follow.link}
              target="_blank"
              style={{background: follow.background ? follow.background : follow.bgLinear}}
            >
              <span className="px-2 py-2 backdrop-blur-sm bg-white/10 text-white">
                <Icon width={21} icon={follow.icon} />
              </span>
              <span className="text-sm text-white">{follow.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowUs;
