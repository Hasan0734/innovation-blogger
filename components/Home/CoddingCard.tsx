import Link from "next/link";
import React from "react";

const CoddingCard = () => {
  return (
    <>
      <div className="flex gap-4">
        <Link href={"/"}>
          <img
            className="w-[98px] h-[65px]"
            src="assets/post2.jpg"
            alt="blog-image"
          />
        </Link>
        <div>
          <Link
            href={"/"}
            className="text-xl font-semibold hover:text-primeblue"
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
        </div>
      </div>
    </>
  );
};

export default CoddingCard;
