import React from "react";
import SectionTitle from "../SectionTitle";
import CoddingCard from "./CoddingCard";
import BlogCard from "./BlogCard";

const OtherSection = () => {
  return (
    <>
      <div className="py-10">
        <div className="">
          <SectionTitle title={"Others"} link={"/codding"} />
          <div className="pt-10 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherSection;
