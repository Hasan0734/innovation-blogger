import React from "react";
import SectionTitle from "../SectionTitle";
import Categories from "../Categories";

const CategoriesSection = () => {
  return (
    <div className="pt-7">
      <SectionTitle title={"Categories"} />
      <Categories />
    </div>
  );
};

export default CategoriesSection;
