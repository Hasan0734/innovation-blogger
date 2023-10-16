import Link from "next/link";
import React from "react";
import BlogCard from "./BlogCard";
import SectionTitle from "../SectionTitle";

const Technology = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <SectionTitle title={"Technology"} link={"/technology"} />
        <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-8">
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
