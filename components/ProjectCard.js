import Image from "next/image";
import React from "react";
import { Link } from "@mui/material";

const ProjectCard = ({ imgUrl, title, description, linkUrl }) => {
  return (
    <Link
      href={linkUrl}
      target="_blank"
      className="border rounded-md flex flex-col items-center justify-center text-center no-underline overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="overflow-hidden w-full">
        <Image
          src={imgUrl}
          alt={title}
          className="w-full h-auto transform transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="py-3 px-4 w-full bg-white">
        <h5 className="uppercase text-black font-bold relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-black after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full">
          {title}
        </h5>
        {/* <p className="mt-2 text-gray-600 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          {description}
        </p> */}
      </div>
    </Link>
  );
};

export default ProjectCard;
