"use client";

import React from "react";
import logo from "../../public/assets/RP..svg";
import gearslogo from "../../public/assets/gears-svgrepo-com 1.svg";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import profile2 from "../../public/assets/20230306_160012.png";
import zig from "../../public/assets/zigzags.svg";
import plus from "../../public/assets/plus.svg";
import cube from "../../public/assets/cube.svg";
import ellipse from "../../public/assets/Ellipse 11.svg";
import rectangle from "../../public/assets/rectangle.svg";
import { useTypewriter, Cursor, Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Link, animateScroll as scroll } from "react-scroll";
import Linkt from "next/link";
// @ts-ignore
import About from "../About";
import Experience from "../Experience";
import Contact from "../Contact";
import Projects from "../Projects";
const HomePage = () => {
  // const { animatedText } = useTypewriter({
  //   words: ["Front-End Developer", "UX Designer", "Content Writer"],
  //   // loop: {},
  //   typeSpeed: 120,
  //   deleteSpeed: 80,
  // });
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: any) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };
  return (
    <div className="w-full">
      {/* nabar */}
      <header>
        <nav className="flex items-start sm:items-center w-full justify-between px-8 sm:px-24 py-4 ">
          <div className=" ">
            <Image src={logo} alt="logo" className="w-12 sm:w-24" />
            <h1 className="font-extrabold text-[8px] sm:text-[10px] leading-5 tracking-wider opacity-40 text-blue-400">
              Reshma Poudel
            </h1>
          </div>
          <div></div>
          <ul className="hidden sm:flex items-center gap-8 md:gap-12 lg:gap-16 xl:gap-24 text-lg font-normal ">
            <li className="cursor-pointer">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                About
              </Link>
            </li>

            <li className="flex items-center gap-2 cursor-pointer">
              <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className="flex items-center gap-0.5"
              >
                <Image src={gearslogo} alt="projects" />
                <span>Experience</span>
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                activeClass="active"
                to="contactMe"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Contact me
              </Link>
            </li>
          </ul>
          <div className="text-red-600 block sm:hidden">
            <MenuIcon fontSize="large" />
          </div>
        </nav>
      </header>
      <hr className="border-yellow-100"></hr>
      <div className="bg-gradient-to-t from-blue-100 to-yellow-50 w-full shadow-2xl">
        <div className="relative flex flex-col sm:flex-row sm:justify-between sm:items-center  w-full  px-8 md:px-12 lg:px-24 xl:px-28">
          <div className="my-6 sm:w-1/2 flex flex-col w-full items-center sm:items-start gap-12 justify-center py-20 md:max-w-4xl capitalize">
            <div className="font-semibold text-navyblue leading-10 text-center sm:text-start">
              <div className="text-5xl sm:text-4xl lg:text-5xl xl:text-6xl">
                hi 👋,I’m Reshma{" "}
              </div>
              <div className="text-4xl sm:text-2xl lg:text-4xl xl:text-5xl capitalize tracking-wider pt-4 text-red-500">
                <Typewriter
                  words={[
                    "Front-End Developer",
                    "UX Designer",
                    "Content Writer",
                  ]}
                  loop={100}
                  cursor
                  cursorStyle="|"
                  cursorColor="blue"
                  typeSpeed={150}
                  deleteSpeed={100}
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="bg-red-500 px-9 md:px-16 md:py-5 md:rounded-md capitalize font-semibold py-3 rounded text-white hover:font-bold "
            >
              hire me
            </motion.button>
          </div>
          <div className="w-full sm:w-1/2  flex items-center justify-center sm:justify-end pt-8">
            <div className=" w-full relative">
              <Image src={profile2} alt="profile" className="  rounded" />
              <Image
                src={zig}
                alt="profile"
                className="absolute top-20 sm:top-1 left-0 lg:top-24 lg:left-8  w-20 h-16  md:w-24  md:h-20 "
              />
              <Image
                src={plus}
                alt="profile"
                className="w-4 h-4 absolute -top-4 md:-top-2 lg:top-3 left-40  sm:left-32 md:left-40  lg:left-56 md:w-6 md:h-6 "
              />
              <Image
                src={ellipse}
                alt="profile"
                className="w-4 h-4 absolute   bottom-0 lg:bottom-24   left-28"
              />
              <Image
                src={cube}
                alt="cube
                "
                className="w-5 h-5 absolute top-2  right-8"
              />
            </div>
            <Image
              src={rectangle}
              alt="profile"
              className="w-[500px] h-[500px] absolute bottom-2 left-0 -z-10"
            />
          </div>
          <div className="absolute top-0 bottom-0 right-1 flex flex-col items-center justify-center gap-4">
            <Linkt href={`https://www.linkedin.com/notifications/`}>
              <BsFacebook
                fontSize={30}
                className="cursor-pointer text-navyblue"
              />
            </Linkt>
            <Linkt href={`https://github.com/Reshmapoudel`}>
              <AiFillGithub
                fontSize={30}
                className="cursor-pointer text-navyblue"
              />
            </Linkt>
            <Linkt href={`https://www.linkedin.com/notifications/`}>
              <AiFillLinkedin
                fontSize={30}
                className="cursor-pointer text-navyblue"
              />
            </Linkt>
          </div>
        </div>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
