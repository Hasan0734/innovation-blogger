"use client";

import Link from "next/link";
import React from "react";
import blogs from "../../lib/blogs.json";
import { Icon } from "@iconify/react";
import BlogCard from "./BlogCard";
import SectionTitle from "../SectionTitle";

const Videos = () => {
  return (
    <section className="pt-7">
      <div className="container mx-auto">
        <SectionTitle title={"Videos"} link={"/videos"} />
        <div className="pt-7 grid  grid-cols-1 sm:grid-cols-2 gap-8">
          {blogs.slice(0, 2).map((blog) => (
            <Link href={`/${blog.id}`} key={blog.id}>
              <div
                className="relative group bg-cover bg-no-repeat h-[200px] sm:h-[320px] w-full
                  after:absolute after:w-full after:bg-gradient-to-b after:from-black/0 after:to-black/25 after:bottom-0 after:left-0 after:right-0 after:h-4/5"
                style={{ backgroundImage: `url(${blog.image})` }}
              >
                <div className="flex justify-end pt-4 pr-4">
                  <button className="bg-gray-500 group-hover:bg-red-500 text-white rounded-lg px-3 py-1.5">
                    <Icon icon="ph:play-fill" />
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 px-5 py-3 z-10">
                  <div className="px-2 py-2">
                    <span className="bg-primeblue px-2 py-0.5 rounded text-white text-xs">
                      Design
                    </span>
                  </div>
                  <h3 className="text-white text-sm sm:text-2xl font-semibold">
                    {blog.title}
                  </h3>
                  <div className=" text-gray-300 text-xs mt-4">
                    <span className="">by Jahid Hasan - </span>
                    <span>April 23, 2023</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-8">
          <BlogCard video={true} />
          <BlogCard video={true} />
          <BlogCard video={true} />
          <BlogCard video={true} />
        </div>
      </div>
    </section>
  );
};

export default Videos;
