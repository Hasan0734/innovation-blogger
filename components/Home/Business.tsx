import Link from "next/link";
import React from "react";
import BlogCard from "./BlogCard";
import SectionTitle from "../SectionTitle";

const Business = () => {
  return (
    <section className="pt-7">
      <div className="container mx-auto">
        <SectionTitle title={"Business"} link={"/business"} />
        <div className="pt-7 grid  grid-cols-2 md:grid-cols-4 gap-3 sm:gap-8">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </section>
  );
};

export default Business;
