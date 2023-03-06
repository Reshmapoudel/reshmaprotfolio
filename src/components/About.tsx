import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import preview from "../../public/assets/preview.png";
import ProgressBar from "./ProgressBar";
const About = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <div className=" py-20 flex flex-col items-center justify-center">
      <h1 className="text-red-500 text-2xl font-semibold pt-4 sm:py-16 sm:text-3xl md:text-5xl">
        About Me
      </h1>
      {/* <hr className="w-24 border-2 bg-red-700" /> */}
      <div className="px-4">
        <div className="flex flex-col-reverse sm:flex-row w-full items-center px-8 xl:px-16">
          <div className="sm:w-1/2">
            <Image src={preview} alt="girl with computer" />
          </div>

          <div className="sm:w-1/2 w-full flex flex-col text-center gap-6 sm:text-start ">
            <h1 className="text-navyblue text-xl tracking-wider font-medium sm:text-2xl md:text-3xl md:pb-8">
              Hello,My name is Reshma Poudel
            </h1>
            <p className="text-justify tracking-wide text-base text-navyblue sm:text-lg md:text-xl">
              I have a passion for creating visually appealing and functional
              web applications,i am dedicated to delivering high-quality work
              that meets client needs and exceeds expectations.My expertise lies
              in HTML, CSS, and JavaScript, and i have experience in developing
              responsive and interactive web pages.I have also worked with
              popular frontend frameworks such as React, Typescript, Tailwind,
              MUI and Next Js, allowing me to build dynamic and scalable web
              applications.
            </p>
          </div>
        </div>
        <div className="mt-20 xl:mt-44 h-full w-full md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
          <div className="relative w-full">
            <div className="border border-navyblue border-t-0 shadow-xl  pt-20">
              <div>
                {selectedTab === 1 ? (
                  <AnimatePresence onExitComplete={() => {}}>
                    <motion.div
                      key={selectedTab ? 2 : "empty"}
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -300, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col gap-6 md:gap-12 lg:gap-16 py-4 md:px-0"
                    >
                      <div className="flex flex-col md:flex-row gap-6 lg:gap-16  items-center md:justify-center">
                        <div className="text-sm text-gray-500 flex items-center  w-full    gap-12 border-b border-gray-600 px-8 py-1 mx-8">
                          <h1 className="text-lg font-semibold">Name:</h1>
                          <div className="bg-transparent text-base text-gray-800 font-medium ">
                            Reshma Poudel
                          </div>
                        </div>
                        <div className="text-sm text-gray-500 flex items-center  w-full gap-12 border-b border-gray-600 px-8 py-1 mx-8  ">
                          <h1 className="text-lg font-semibold">Age:</h1>
                          <div
                            placeholder="Enter your email address"
                            className="bg-transparent text-base text-gray-800 font-medium  md:w-48 lg:w-60 xl:w-72 2xl:w-96"
                          >
                            23
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row gap-6 lg:gap-16  items-center md:justify-center">
                        <div className="text-sm text-gray-500 flex items-center  w-full    gap-12 border-b border-gray-600 px-8 py-1 mx-8">
                          <h1 className="text-lg font-semibold">Email:</h1>
                          <div className="bg-transparent text-base text-gray-800 font-medium ">
                            reshmapoudel815@gmail.com
                          </div>
                        </div>
                        <div className="text-sm text-gray-500 flex items-center  w-full gap-12 border-b border-gray-600 px-8 py-1 mx-8  ">
                          <h1 className="text-lg font-semibold">Address:</h1>
                          <div
                            placeholder="Enter your email address"
                            className="bg-transparent text-base text-gray-800 font-medium  md:w-48 lg:w-60 xl:w-72 2xl:w-96"
                          >
                            Kathmandu,Nepal
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row gap-6 lg:gap-16  items-center md:justify-center">
                        <div className="text-sm text-gray-500 flex items-center  w-full    gap-12 border-b border-gray-600 px-8 py-1 mx-8">
                          <h1 className="text-lg font-semibold">Phone:</h1>
                          <div className="bg-transparent text-base text-gray-800 font-medium ">
                            98
                          </div>
                        </div>
                        <div className="text-sm text-gray-500 flex items-center  w-full gap-12 border-b border-gray-600 px-8 py-1 mx-8  ">
                          <h1 className="text-lg font-semibold">Freelance:</h1>
                          <div
                            placeholder="Enter your email address"
                            className="bg-transparent text-base text-gray-800 font-medium  md:w-48 lg:w-60 xl:w-72 2xl:w-96"
                          >
                            Available
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                ) : (
                  <></>
                )}
                {selectedTab === 2 ? (
                  <AnimatePresence onExitComplete={() => {}}>
                    <motion.div
                      key={selectedTab ? 2 : "empty"}
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -300, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-full"
                    ></motion.div>
                    <div className="flex items-center w-full justify-evenly">
                      <h1 className="w-1/4 text-2xl font-semibold text-navyblue tracking-widest uppercase">
                        Html
                      </h1>
                      <ProgressBar done={"95"} />
                    </div>
                    <div className="flex items-center w-full justify-evenly">
                      <h1 className="w-1/4 text-2xl font-semibold text-navyblue tracking-widest uppercase">
                        css
                      </h1>
                      <ProgressBar done={"80"} />
                    </div>
                    <div className="flex items-center w-full justify-evenly">
                      <h1 className="w-1/4 text-2xl font-semibold text-navyblue tracking-widest uppercase">
                        react
                      </h1>
                      <ProgressBar done={"80"} />
                    </div>
                    <div className="flex items-center w-full justify-evenly">
                      <h1 className="w-1/4 text-2xl font-semibold text-navyblue tracking-widest uppercase">
                        next js
                      </h1>
                      <ProgressBar done={"80"} />
                    </div>
                    <div className="flex items-center w-full justify-evenly">
                      <h1 className="w-1/4 text-2xl font-semibold text-navyblue tracking-widest uppercase">
                        typescript
                      </h1>
                      <ProgressBar done={"65"} />
                    </div>
                    <div className="flex items-center w-full justify-evenly">
                      <h1 className="w-1/4 text-2xl font-semibold text-navyblue tracking-widest uppercase">
                        Tailwind
                      </h1>
                      <ProgressBar done={"85"} />
                    </div>
                  </AnimatePresence>
                ) : (
                  <></>
                )}

                {selectedTab === 3 ? (
                  <AnimatePresence>
                    <motion.div
                      key={selectedTab ? 2 : "empty"}
                      initial={{ x: 10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -100, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-full flex flex-col items-center gap-4 py-4"
                    >
                      <h1 className="text-2xl text-navyblue font-bold">
                        BSC in Computer Science of Information Technology
                      </h1>
                      <p className="text-xl">
                        Asian College of Higher Secondary
                      </p>
                    </motion.div>
                  </AnimatePresence>
                ) : (
                  <></>
                )}

                {/* <h1>Show thw content</h1>
                <p>
                  I have a passion for creating visually appealing and
                  functional web applications,i am dedicated to delivering
                  high-quality work that meets client needs and exceeds
                  expectations.My expertise lies in HTML, CSS, and JavaScript,
                  and i have experience in developing responsive and interactive
                  web pages.I have also worked with popular frontend frameworks
                  such as React, Typescript, Tailwind, MUI and Next Js, allowing
                  me to build dynamic and scalable web applications.
                </p> */}
              </div>
            </div>
            <div className="absolute w-full -top-12 left-0 right-0 flex flex-row items-center justify-between gap-4   bg-navyblue bg-opacity-50 px-8 py-4 rounded-full">
              <motion.button
                onClick={() => setSelectedTab(1)}
                className={
                  selectedTab === 1
                    ? "border bg-red-500  hover:bg-red-500 shadow-2xl shadow-slate-500  sm:px-4 xl:px-12 rounded-3xl border-navyblue text-white text-base font-semibold tracking-wide  flex items-center gap-4 py-2"
                    : "border  hover:bg-red-500 shadow-2xl shadow-slate-500  sm:px-4 xl:px-12 rounded-3xl border-navyblue text-white text-base font-semibold tracking-wide  flex items-center gap-4 py-2"
                }
              >
                <h1>Biography</h1>
                <hr className="w-8 border"></hr>
                <label>01</label>
              </motion.button>
              <button
                onClick={() => setSelectedTab(2)}
                className={
                  selectedTab === 2
                    ? "border bg-red-500  hover:bg-red-500 shadow-2xl shadow-slate-500  sm:px-4 xl:px-12 rounded-3xl border-navyblue text-white text-base font-semibold tracking-wide  flex items-center gap-4 py-2"
                    : "border  hover:bg-red-500 shadow-2xl shadow-slate-500  sm:px-4 xl:px-12 rounded-3xl border-navyblue text-white text-base font-semibold tracking-wide  flex items-center gap-4 py-2"
                }
              >
                <h1>Skills</h1>
                <hr className="w-8 border"></hr>
                <label>02</label>
              </button>
              <button
                onClick={() => setSelectedTab(3)}
                className={
                  selectedTab === 3
                    ? "border bg-red-500  hover:bg-red-500 shadow-2xl shadow-slate-500  sm:px-4 xl:px-12 rounded-3xl border-navyblue text-white text-base font-semibold tracking-wide  flex items-center gap-4 py-2"
                    : "border  hover:bg-red-500 shadow-2xl shadow-slate-500  sm:px-4 xl:px-12 rounded-3xl border-navyblue text-white text-base font-semibold tracking-wide  flex items-center gap-4 py-2"
                }
              >
                <h1>Education</h1>
                <hr className="w-8 border"></hr>
                <label>03</label>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

{
  /* <p>
          Meet [Name], a highly skilled Frontend Developer with one year of
          experience in the field. With a passion for creating visually
          appealing and functional web applications, [Name] is dedicated to
          delivering high-quality work that meets client needs and exceeds
          expectations.  expertise lies in HTML, CSS, and JavaScript,
          and [they] have experience in developing responsive and interactive
          web pages. [They] have also worked with popular frontend frameworks
          such as React and Angular, allowing [them] to build dynamic and
          scalable web applications. In [their] previous role, [Name] worked
          closely with a team of developers and designers to deliver innovative
          solutions for clients across a range of industries. [They] were
          responsible for developing clean, maintainable, and efficient code
          that adhered to industry best practices and standards. Aside from
          [their] technical skills, [Name] is a great communicator and
          collaborator, always willing to lend [their] expertise to ensure
          projects are completed on time and to the highest standards. Overall,
          [Name] is a highly motivated and talented Frontend Developer who is
          committed to delivering exceptional results. [They] would be an asset
          to any team looking to take their web development projects to the next
          level.
        </p> */
}
