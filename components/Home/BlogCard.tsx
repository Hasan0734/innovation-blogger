"use client";

import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";

interface PropsTypes {
  video?: boolean;
}

const BlogCard = ({ video }: PropsTypes) => {
  return (
    <>
      <div className="">
        <Link href={"/"}>
          <div className="relative group">
            <div className="absolute left-3 top-2">
              <span className="bg-primeblue px-2 py-0.5 rounded text-white text-xs">
                Technology
              </span>
            </div>
            <img className="w-full h-[170px]" src="assets/63.jpg" alt="" />
            {video && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-black/50 group-hover:bg-red-500 text-white rounded-lg px-3 py-1.5">
                  <Icon icon="ph:play-fill" />
                </button>
              </div>
            )}
          </div>
        </Link>
        <div className="mt-2">
          <Link href={""} className="text-base font-semibold leading-6 hover:text-primeblue line-clamp-2">
            Uber Lands Electric Car Deal With Nissan In The UK
          </Link>
          <div className="text-xs text-gray-500">
            <span className="">by Jahid Hasan - </span>
            <span>April 23, 2023</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
