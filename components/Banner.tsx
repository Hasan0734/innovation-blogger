import { ChevronLeft, ChevronRight, ZapIcon } from "lucide-react";
import React from "react";

const Banner = () => {
  return (
    <div className="top_banner py-1.5">
      <div className="container mx-auto flex items-center gap-2">
        <div>
          <button className="uppercase text-white bg-black px-2 py-1 text-xs font-semibold">
            <span className="sm:block hidden">Breaking</span>
            <span className="sm:hidden">
              <ZapIcon width={15}/>
            </span>
          </button>
        </div>
        <div className="flex items-center justify-between flex-grow gap-2">
          <p className="font-xs text-white font-normal line-clamp-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ex
            doloremque nihil et expedita accusantium reiciendis.
          </p>
          <div className="flex items-center gap-1">
            <button className="bg-black text-white px-0.5">
              <ChevronLeft width={20} />
            </button>
            <button className="bg-black text-white px-0.5">
              <ChevronRight width={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
