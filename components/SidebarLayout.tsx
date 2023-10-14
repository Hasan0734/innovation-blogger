import React from "react";
import Codding from "./Home/Codding";
import SectionTitle from "./SectionTitle";

const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="py-10">
      <div className="container mx-auto grid grid-cols-4 gap-8">
        <div className="col-span-4 sm:col-span-3">{children}</div>
        <div className="col-span-1 hidden md:block">
          <SectionTitle title="Follow us" />
        </div>
      </div>
    </section>
  );
};

export default SidebarLayout;
