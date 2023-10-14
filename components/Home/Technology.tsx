import Link from "next/link";
import React from "react";
import BlogCard from "./BlogCard";

const Technology = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="bg-gray-100">
          <div className="flex items-center justify-between">
            <h3 className="py-2 px-5 text-sm font-semibold uppercase">
              Technology
            </h3>
            <div>
              <Link
                href={"/technology"}
                className="text-primeblue px-3 py-2 bg-gray-200 text-sm"
              >
                View all
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-10 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </section>
  );
};

export default Technology;
