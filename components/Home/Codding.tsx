import Link from "next/link";
import React from "react";
import SectionTitle from "../SectionTitle";
import CoddingCard from "./CoddingCard";

const Codding = () => {
  return (
    <section className="">
      <div className="">
        <SectionTitle title={"Codding"} link={"/codding"} />
        <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="">
            <Link href={"/"}>
              <div className="relative">
                <div className="absolute left-3 top-2">
                  <span className="bg-primeblue px-2 py-0.5 rounded text-white text-xs">
                    Coding
                  </span>
                </div>
                <img className="w-full h-[180px]" src="assets/63.jpg" alt="" />
              </div>
            </Link>
            <div className="mt-2">
              <Link href={""} className="text-xl font-semibold leading-6">
                Uber Lands Electric Car Deal With Nissan In The UK
              </Link>
              <div className="text-xs text-gray-500 mt-2">
                <span className="">
                  by{" "}
                  <span className="font-semibold text-primeblue">
                    Jahid Hasan
                  </span>{" "}
                  -{" "}
                </span>
                <span>April 23, 2023</span>
              </div>
              <div className="mt-3">
                <p className="text-sm text-gray-500 line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere earum quia iure nesciunt voluptatibus optio! Quis
                  nihil, perspiciatis totam quo optio possimus ducimus, hic eius
                  reiciendis quisquam rem quae in?
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <CoddingCard />
            <CoddingCard />
            <CoddingCard />
            <CoddingCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Codding;
