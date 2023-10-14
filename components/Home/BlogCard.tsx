import Link from "next/link";
import React from "react";

const BlogCard = () => {
  return (
    <>
      <div className="">
        <Link href={"/"}>
          <div className="relative">
            <div className="absolute left-3 top-2">
              <span className="bg-primeblue px-2 py-0.5 rounded text-white text-xs">
                Business
              </span>
            </div>
            <img className="w-full h-[170px]" src="assets/63.jpg" alt="" />
          </div>
        </Link>
        <div className="mt-2">
          <Link href={""} className="text-base font-semibold leading-6">
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
