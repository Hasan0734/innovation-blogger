import React from "react";
import SectionTitle from "./SectionTitle";
import FollowUs from "./Home/FollowUs";
import CoddingCard from "./Home/CoddingCard";
import Link from "next/link";
import PopularPost from "./Home/PopularPost";
import SubcribeUs from "./Home/SubcribeUs";
import Facebook from "./Home/Facebook";
import SidebarTechnology from "./Home/SidebarTechnology";
import CategoriesSection from "./Home/CategoriesSection";
import TagSection from "./Home/TagSection";
import CommentsSection from "./Home/CommentsSection";

const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="py-7">
      <div className="container mx-auto grid grid-cols-4 gap-8">
        <div className="col-span-4 sm:col-span-3">{children}</div>
        <div className="col-span-4 sm:col-span-1">
          <div>
            <SectionTitle title="Follow us" />
            <FollowUs />
          </div>

          <PopularPost />
          <SubcribeUs />
          <SidebarTechnology />
          <Facebook />
          <CommentsSection />
          <CategoriesSection />
          <TagSection />
        </div>
      </div>
    </section>
  );
};

export default SidebarLayout;
