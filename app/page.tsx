import Business from "@/components/Home/Business";
import BusinessSection from "@/components/Home/BusinessSection";
import Codding from "@/components/Home/Codding";
import DesignSection from "@/components/Home/DesignSection";
import HomeBanner from "@/components/Home/HomeBanner";
import HomeBannerTwo from "@/components/Home/HomeBannerTwo";
import TechSection from "@/components/Home/TechSection";
import Technology from "@/components/Home/Technology";
import Videos from "@/components/Home/Videos";
import SidebarLayout from "@/components/SidebarLayout";

export default function Home() {
  return (
    <main className="">
      <HomeBanner />
      <Technology />
      <HomeBannerTwo />
      <Business />
      <Videos />
      <SidebarLayout>
        <Codding />
        <TechSection />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <DesignSection />
          <BusinessSection />
        </div>
      </SidebarLayout>
    </main>
  );
}
