import React from "react";
import ProjectCard from "../components/ProjectCard";
import finalres from "../public/assets/finalres.png";
import ecomweb from "../public/assets/imgasset/location.png";
import netflix from "../public/assets/imgasset/location.png";
import pikachu from "../public/assets/imgasset/kshitij.png";
import location from "../public/assets/imgasset/location.png";
import airbnb from "../public/assets/imgasset/location.png";
import ecomadmin from "../public/assets/imgasset/location.png";
import pkproject from "../public/assets/project/pkproject.png";
import reshmaTravel from "../public/assets/project/travelreshma.png";
import virohanallc from "../public/assets/project/virohana llc.png";
import prabhudulabs from "../public/assets/project/prabhidilabs.png";
import ecommercefront from "../public/assets/project/ecommercefront.png";
import virohanareact from "../public/assets/project/virohanareactproject.png";
import vtech from "../public/assets/project/vtech.png";
const projectData = [
  {
    id: 133,
    title: "PK Adventure LLC",
    description: "trek company",
    image: pkproject,
    url: "https://pkhimalayasadventure.com",
  },
  {
    id: 2321,
    title: "Vi-rohana LLC",
    description: "ecommerce",
    image: virohanallc,
    url: "https://virohana.com",
  },
  {
    id: 31,
    title: "Travel app",
    description: "ecommerce",
    image: reshmaTravel,
    url: "https://travel.virohana.com",
  },
  {
    id: 661,
    title: "Prabhidi Labs",
    description: "Software Development company",
    image: prabhudulabs,
    url: "https://www.prabidhilabs.com",
  },
  {
    id: 1,
    title: "Next js Ecommerce Admin",
    description: "ecommerce",
    image: pkproject,
    url: "https://ecommerceadmin-gules.vercel.app/categories",
  },
  {
    id: 1,
    title: "Vtech",
    description: "Software Develpoment Company",
    image: vtech,
    url: "https://tech.virohana.com",
  },
  {
    id: 1,
    title: "Next js Ecommerce Web",
    description: "ecommerce",
    image: ecommercefront,
    url: "https://ecommercewebapp-one.vercel.app",
  },
  {
    id: 176,
    title: "virohana LLC react Project",
    description: "ecommerce",
    image: virohanareact,
    url: "https://firebrick-woodpecker-418705.hostingersite.com",
  },
  // {
  //   id: 1,
  //   title: "Airbnb front page",
  //   description: "ecommerce",
  //   image: airbnb,
  //   url: "https://mapproject.vercel.app",
  // },
  // {
  //   id: 1,
  //   title: "Netflix clone",
  //   description: "ecommerce",
  //   image: netflix,
  //   url: "https://context-three.vercel.app",
  // },
  // {
  //   id: 1,
  //   title: "Simple Location Sharing Map",
  //   description: "ecommerce",
  //   image: location,
  //   url: "https://airbnb-six-iota.vercel.app",
  // },
];
const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-gradient-to-t from-yellow-50 to-blue-150 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-28"
    >
      <h1 className="text-red-500 text-2xl font-semibold pt-4 sm:py-16 sm:text-3xl md:text-5xl text-center">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10 pb-8">
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
