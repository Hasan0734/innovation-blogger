import React from "react";
import SectionTitle from "../SectionTitle";
import Tags from "../Tags";

const TagSection = () => {
  return (
    <div className="pt-7">
      <SectionTitle title={"More Tags"} />
      <Tags />
    </div>
  );
};

export default TagSection;
