import React from "react";
import ProjectCard from "../components/ProjectCard";
import finalres from "../public/assets/finalres.png";
import ecomweb from "../public/assets/imgasset/location.png";
import netflix from "../public/assets/imgasset/location.png";
import pikachu from "../public/assets/imgasset/location.png";
import location from "../public/assets/imgasset/location.png";
import airbnb from "../public/assets/imgasset/location.png";
import ecomadmin from "../public/assets/imgasset/location.png";

const projectData = [
  {
    id: 1,
    title: "Next js Ecommerce Admin",
    description: "ecommerce",
    image: ecomadmin,
    url: "https://ecommerceadmin-gules.vercel.app/categories",
  },
  {
    id: 1,
    title: "Next js Ecommerce Web",
    description: "ecommerce",
    image: ecomweb,
    url: "https://ecommercewebapp-one.vercel.app",
  },
  {
    id: 1,
    title: "Airbnb front page",
    description: "ecommerce",
    image: airbnb,
    url: "https://mapproject.vercel.app",
  },
  {
    id: 1,
    title: "Netflix clone",
    description: "ecommerce",
    image: netflix,
    url: "https://context-three.vercel.app",
  },
  {
    id: 1,
    title: "Simple Location Sharing Map",
    description: "ecommerce",
    image: location,
    url: "https://airbnb-six-iota.vercel.app",
  },
  {
    id: 1,
    title: "Pikachu app",
    description: "ecommerce",
    image: pikachu,
    url: "https://pokemon-list-app-demo676776.web.app",
  },
];
const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-gradient-to-t from-yellow-50 to-blue-150 px-8 md:px-12 lg:px-24 xl:px-28"
    >
      <h1 className="text-red-500 text-2xl font-semibold pt-4 sm:py-16 sm:text-3xl md:text-5xl text-center">
        Projects
      </h1>{" "}
      <div className="grid grid-cols-3 gap-10">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            linkUrl={project.url}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
