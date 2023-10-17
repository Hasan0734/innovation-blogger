import React from "react";
import SectionTitle from "../SectionTitle";
import BlogCardRow from "../BlogCardRow";
import { ChevronDown } from "lucide-react";

const ReadMoreSection = () => {
  return (
    <>
      <div className="py-7">
        <div className="">
          <SectionTitle title={"Read more"} link={"/codding"} />
          <div className="pt-7 grid grid-cols-1 gap-8">
            <BlogCardRow
              imageSize={"min-w-full md:min-w-[320px] h-[200px] md:h-[180px]"}
            />
            <BlogCardRow
              imageSize={"min-w-full md:min-w-[320px] h-[200px] md:h-[180px]"}
            />
            <BlogCardRow
              imageSize={"min-w-full md:min-w-[320px] h-[200px] md:h-[180px]"}
            />
            <BlogCardRow
              imageSize={"min-w-full md:min-w-[320px] h-[200px] md:h-[180px]"}
            />
            <BlogCardRow
              imageSize={"min-w-full md:min-w-[320px] h-[200px] md:h-[180px]"}
            />
            <BlogCardRow
              imageSize={"min-w-full md:min-w-[320px] h-[200px] md:h-[180px]"}
            />
          </div>
          <div className="mt-10 flex justify-center">
            <button className="border border-gray-400 px-6 py-1.5 duration-300 text-sm hover:text-white hover:bg-primeblue flex items-center gap-2">
              Read more <ChevronDown />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadMoreSection;
