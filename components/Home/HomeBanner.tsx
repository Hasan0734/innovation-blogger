import React from "react";
import blogs from "../../lib/blogs.json";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <div>
      <div className="container mx-auto mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 sm:gap-8">
          {blogs.map((blog) => (
            <Link href={`/${blog.id}`} key={blog.id}>
              <div
                className="relative bg-cover bg-no-repeat h-[260px] sm:h-[380px] w-full
                  after:absolute after:w-full after:bg-gradient-to-b after:from-black/0 after:to-black/25 after:bottom-0 after:left-0 after:right-0 after:h-4/5"
                style={{ backgroundImage: `url(${blog.image})` }}
              >
                <div className="absolute bottom-0 left-0 right-0 px-5 py-3 z-10">
                  <h3 className="text-white text-2xl font-semibold">
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
      </div>
    </div>
  );
};

export default HomeBanner;
