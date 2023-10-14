import Link from "next/link";
import React from "react";

interface PropsType {
  title: String;
  link?: String;
}

const SectionTitle = ({ title, link }: PropsType) => {
  return (
    <div className="bg-gray-100">
      <div className="flex items-center justify-between">
        <h3 className="py-2 px-5 text-sm font-semibold uppercase">{title}</h3>
        {link && (
          <div>
            <Link
              href={`${link}`}
              className="text-primeblue px-3 py-2 bg-gray-200 hover:bg-gray-100 text-sm"
            >
              View all
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionTitle;
