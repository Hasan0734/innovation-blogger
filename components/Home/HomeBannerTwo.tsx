import React from "react";
import blogs from "../../lib/blogs.json";
import Link from "next/link";

const HomeBannerTwo = () => {
  return (
    <>
      <section className="">
        <div className="">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {blogs.map((blog) => (
              <Link href={`/${blog.id}`} key={blog.id}>
                <div
                  className="relative bg-cover bg-no-repeat h-[290px] sm:h-[450px] w-full
                  after:absolute after:w-full after:bg-gradient-to-b after:from-black/0 after:to-black/25 after:bottom-0 after:left-0 after:right-0 after:h-4/5"
                  style={{ backgroundImage: `url(${blog.image})` }}
                >
                  <div className="px-2 py-2">
                    <span className="bg-primeblue px-2 py-0.5 rounded text-white text-xs">
                      Design
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 px-5 py-3 z-10">
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
        </div>
      </section>
    </>
  );
};

export default HomeBannerTwo;
