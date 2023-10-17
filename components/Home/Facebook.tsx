import React from "react";
import SectionTitle from "../SectionTitle";

const Facebook = () => {
  return (
    <>
      <div className="pt-7">
        <SectionTitle title="Facebook" />
        <iframe
          title="fb:page Facebook Social Plugin"
          allow="encrypted-media"
          src="https://www.facebook.com/v9.0/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df310903c8977e54%26domain%3Dsaxify-templateify.blogspot.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fsaxify-templateify.blogspot.com%252Ff112fb928f9ef8%26relation%3Dparent.parent&amp;container_width=320&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Ftemplateify%2F&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;width=360"
       
          className="w-full mt-4 h-[180px]"
        ></iframe>
      </div>
    </>
  );
};

export default Facebook;
