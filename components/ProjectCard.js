import Image from "next/image";
import React from "react";
  import { Link } from "@mui/material";

const ProjectCard = ({ imgUrl, title, description, linkUrl }) => {
  return (
    <Link
      href={linkUrl}
      target="_blank"
      className="max-w-[300px] border rounded-md flex flex-col items-center justify-center text-center bg-[#F5E7F5]  no-underline py-2 overflow-hidden shadow-lg hover:bg-[#E1A9E3] transition duration-300"
    >
      <div className="">
        <Image src={imgUrl} width={200} height={500} alt={title} />
      </div>
      <div className="mt-2">
        <h5 className="uppercase text-black font-bold">{title}</h5>
        {/* <p>{description}</p> */}
      </div>
    </Link>
  );
};

export default ProjectCard;
