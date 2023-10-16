import Link from "next/link";
import React from "react";

function BlogCardRow() {
  return (
    <>
      <div className="flex gap-4 flex-col md:flex-row">
        <Link href={"/"} className="">
          <img
            className="min-w-full md:min-w-[320px] h-[200px] md:h-[180px] "
            src="assets/post2.jpg"
            alt="blog-image"
          />
        </Link>
        <div>
          <Link
            href={"/"}
            className="text-2xl leading-3 font-semibold hover:text-primeblue"
          >
            Delicious simple cooking recipe review
          </Link>
          <div className="text-xs text-gray-500 mt-2">
            <span className="">
              by{" "}
              <span className="font-semibold text-primeblue">Jahid Hasan</span>{" "}
              -{" "}
            </span>
            <span>April 23, 2023</span>
          </div>
          <div className="mt-4 max-w-md">
            <p className="line-clamp-2 text-sm text-gray-600 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis hic
              suscipit quo aspernatur eveniet fugiat incidunt perspiciatis
              maxime rerum veniam.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogCardRow;
