import React from "react";
import SectionTitle from "../SectionTitle";

const CommentsSection = () => {
  return (
    <div className="pt-7">
      <SectionTitle title={"Comments"} />
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 bg-gray-100 rounded-full"></div>
        <div>
          <h2 className="text-sm font-semibold">Sora Blogging Tips</h2>
          <p className="text-xs text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet earum
            officia sed eveniet voluptas similique, a exercitationem iusto?
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentsSection;
