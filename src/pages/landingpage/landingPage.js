import React from "react";
import { NavBar } from "../../component/navbar/navbar";
import line from "./Vector.svg";
import { SearchBar } from "../../component/searchBar/searchBar";
import next from "./next.svg";
import { Link } from "react-router-dom";
import design from "./design.svg";
import nextblack from "./nextblack.svg";
import salesIcon from "./salesIcon.svg";
import marketingIcon from "./marketingIcon.svg";
import financeIcon from "./fianceIcon.svg";
import techIcon from "./teknolojiIcon.svg";
import engineeringIcon from "./engineering.svg";
import businessIcon from "./business.svg";
import hrIcon from "./human.svg";
import { Footer } from "../../component/footer/footer";

const sections = [
  { title: "Design", jobs: "235 jobs available", icon: design },
  { title: "Sales", jobs: "145 jobs available", icon: salesIcon },
  { title: "Marketing", jobs: "210 jobs available", icon: marketingIcon },
  { title: "Finance", jobs: "190 jobs available", icon: financeIcon },
  { title: "Technology", jobs: "300 jobs available", icon: techIcon },
  { title: "Engineering", jobs: "280 jobs available", icon: engineeringIcon },
  { title: "Business", jobs: "220 jobs available", icon: businessIcon },
  { title: "Human Resource", jobs: "160 jobs available", icon: hrIcon },
];

export function LandingPage() {
  return (
    <div className="bg-[#25324B] min-h-screen p-4 xl:px-32 md:px-5">
      <NavBar />	

      {/* Main Heading Section */}	
      <div className="mt-5 sm:mt-10 flex flex-col gap-3 sm:gap-5">	
        <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-snug">	
          Discover <br />	
          More than <br />	
        </h1>	
        <h1 className="text-blue-500 text-3xl sm:text-5xl md:text-6xl lg:text-7xl">	
          1000+ jobs	
        </h1>	
        <img	
          className="bg-[#25324B] w-1/2 sm:w-[35%] sm:mt-3 " // Centering the image	
          src={line}	
          alt="Decorative line"	
        />	
      </div>	

      {/* Subtitle Section */}
      <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10">
        <h4 className="text-gray-400 font-medium text-lg sm:text-xl lg:text-2xl">
          Great platform for job seekers searching for{" "}
          <br className="hidden sm:block" />
          new career heights and passionate about startups.
        </h4>
      </div>

      {/* Search Bar Component */}
      <SearchBar />

      <div className="mt-16 flex flex-row justify-between items-center h-[53px]">
        <h1 className="flex flex-row gap-1 sm:text-5xl text-2xl font-normal text-white">
          Explore by
          <span className="text-[#26A4FF]"> category</span>
        </h1>
        <div className="h-full">
          <Link className="flex gap-4 h-full sm:items-end items-center">
            <h4 className="text-[#4640DE] font-semibold">Show all jobs</h4>
            <img src={next} alt="Next" />
          </Link>
        </div>
      </div>

      {/* Sections Grid */}
      <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sections.map((section, index) => (
          <div
            key={index}
            className="flex flex-col bg-white sm:w-[274px] sm:h-[214px] p-8 hover:cursor-pointer transition-transform transform hover:scale-105 "
          >
            <img
              className="h-12 w-12 mx-auto" // Centering the icon
              src={section.icon}
              alt={`${section.title} icon`}
            />
            <h3 className="text-[#25324B] text-xl sm:text-2xl sm:mt-4 text-center">
              {section.title}
            </h3>
            <div className="flex gap-4 items-center mt-3 justify-center">
              <h3 className="text-[#7C8493] text-lg text-center">
                {section.jobs}
              </h3>
              <img src={nextblack} alt="Next" className="h-5" />
              {/* Set a height for the next icon */}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
