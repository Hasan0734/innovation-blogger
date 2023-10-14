import React from "react";
import SectionTitle from "../SectionTitle";
import CoddingCard from "./CoddingCard";
import Link from "next/link";

const BusinessSection = () => {
  return (
    <div className="pt-10">
      <div className="">
        <SectionTitle title={"Design"} link={"/codding"} />
        <div className="pt-10 grid  grid-cols-1">
          <Link href={``}>
            <div
              className="relative group bg-cover bg-no-repeat h-[200px]  w-full
                  after:absolute after:w-full after:bg-gradient-to-b after:from-black/0 after:to-black/25 after:bottom-0 after:left-0 after:right-0 after:h-4/5"
              style={{ backgroundImage: `url(assets/post2.jpg)` }}
            >
              <div className="absolute bottom-0 left-0 right-0 px-5 py-3 z-10">
                <div className=" py-2">
                  <span className="bg-primeblue px-2 py-0.5 rounded text-white text-xs">
                    Design
                  </span>
                </div>
                <Link
                  href={"/"}
                  className="text-white text-sm sm:text-2xl font-semibold"
                >
                  Uber Lands Electric Car Deal With Nissan In The UK
                </Link>
                <div className=" text-gray-300 text-xs mt-4">
                  <span className="">by Jahid Hasan - </span>
                  <span>April 23, 2023</span>
                </div>
              </div>
            </div>
          </Link>
          <div className="space-y-4 mt-8">
            <CoddingCard />
            <CoddingCard />

            <CoddingCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSection;
