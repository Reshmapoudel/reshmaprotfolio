import React from "react";

const Experience = () => {
  return (
    <div className="bg-gradient-to-t from-yellow-50 to-blue-150 px-8 md:px-12 lg:px-24 xl:px-28">
      <h1 className="text-red-500 text-2xl font-semibold pt-4 sm:py-16 sm:text-3xl md:text-5xl text-center">
        Experience(){" "}
      </h1>{" "}
      <div className="flex justify-evenly">
        <div className="pt-14 w-1/2 text-navyblue">
          <i className="text-navyblue text-base font-extralight ">
            <span className="font-thin text-sm">2023-04</span> to current
          </i>
          <div className="px-4 pt-2 text-navyblue">
            <strong>Front End Developer -</strong>{" "}
            <span> &nbsp; Bookmundi Aps</span>
            <p className="py-2  text-justify tracking-normal text-xs text-navyblue sm:text-sm md:text-md">
              Proficiently mastered the Vue.js framework along with the
              cutting-edge Nuxt 3. Demonstrated expertise by crafting responsive
              web pages for Bookmundi's home and search sections, employing Vue
              3 and Nuxt 3 for an optimized user experience.
            </p>
          </div>
        </div>
        <div className="border bg-navyblue h-[40rem] sm:h-[36rem] md:h-[30rem] relative w-1">
          <div className="absolute bg-navyblue h-4 w-4 rounded-full border border-white -left-[0.42rem] right-0 top-7"></div>

          <div className="absolute  -left-[0.42rem] right-0 top-7 flex flex-col justify-evenly h-full">
            <div className=" bg-navyblue h-4 w-4 rounded-full border border-white md:hidden"></div>
            <div className=" bg-navyblue h-4 w-4 rounded-full border border-white md:hidden "></div>{" "}
            <div className=" bg-navyblue h-4 w-4 rounded-full border border-white xl:hidden"></div>{" "}
            <div className=" bg-navyblue h-4 w-4 rounded-full border border-white "></div>{" "}
            <div className=" bg-navyblue h-4 w-4 rounded-full border border-white "></div>{" "}
            <div className=" bg-navyblue h-4 w-4 rounded-full border border-white "></div>
          </div>
          {/* <div className="absolute bg-navyblue h-4 w-4 rounded-full border border-white -left-[0.42rem] right-0 top-7"></div>
          <div className="absolute bg-navyblue h-4 w-4 rounded-full border border-white -left-[0.42rem] right-0 top-[7rem]"></div>
          <div className="absolute bg-navyblue h-4 w-4 rounded-full border border-white -left-[0.42rem] right-0 top-[13rem]"></div>
          <div className="absolute bg-navyblue h-4 w-4 rounded-full border border-white -left-[0.42rem] right-0 top-[19rem]"></div> */}
        </div>
        <div className=" w-1/2 text-navyblue pl-6">
          <div className="px-4 pt-2 text-navyblue">
            <div>
              <i className="text-navyblue text-base font-extralight ">
                <span className="font-thin text-sm">2022-06 to 2023-04</span>
              </i>{" "}
              <br />
              <strong>Front End Developer -</strong>{" "}
              <span> &nbsp; Web & App </span>
              <p className="py-2  text-justify tracking-normal text-xs text-navyblue sm:text-sm md:text-md">
                Planned website development, converting mock-ups into usable web
                presence with HTML,CSS, React JS , Next js, Typescript and
                Tailwind. Developed Ecommerce website from figma design using
                next js framework. Worked on integrating Api using react
                redux-toolkit.
              </p>
            </div>
            <div className="pt-4">
              <i className="text-navyblue text-base font-extralight ">
                <span className="font-thin text-sm">2021-9 to 2022-03</span>
              </i>{" "}
              <br />
              <strong>Junior Front End Developer -</strong>{" "}
              <span> &nbsp; Prabhidi Labs </span>
              <p className="py-2  text-justify tracking-normal text-xs text-navyblue sm:text-sm md:text-md">
                Developed and implemented HTML/CSS code for website redesigns,
                ensuring cross-browser compatibility and adherence to design
                specs. Collaborated in HTML, CSS and wordpress to develop
                features for both mobile and desktop platforms. Partnered with
                the team of senior developers to troubleshoot coding issues and
                optimize code for performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
