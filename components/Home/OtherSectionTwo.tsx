import React from "react";
import SectionTitle from "../SectionTitle";
import CoddingCard from "./CoddingCard";
import BlogCard from "./BlogCard";

const OtherSectionTwo = () => {
  return (
    <section className="pb-10">
      <div className=" container mx-auto">
        <div className="">
          <SectionTitle title={"Others"} link={"/codding"} />
          <div className="pt-7 grid grid-cols-2 md:grid-cols-4 gap-8">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherSectionTwo;
