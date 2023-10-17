import React from "react";
import SectionTitle from "../SectionTitle";
import BlogCard from "./BlogCard";

const TechSection = () => {
  return (
    <section className="pt-7">
      <div className="">
        <SectionTitle title={"Tech"} link={"/codding"} />
        <div className="pt-7 grid  grid-cols-1 sm:grid-cols-2 gap-8">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
    </section>
  );
};

export default TechSection;
