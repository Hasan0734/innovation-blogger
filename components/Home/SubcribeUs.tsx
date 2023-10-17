import React from "react";
import SectionTitle from "../SectionTitle";

const SubcribeUs = () => {
  return (
    <>
      <div className="pt-7">
        <SectionTitle title={"SUBSCRIBE US"} />
        <div className="mt-5">
          <iframe
            className="w-full"
            height={180}
            src="https://www.youtube.com/embed/4ACdX2qxxPY"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default SubcribeUs;
