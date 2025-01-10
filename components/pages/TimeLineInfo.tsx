"use client";
import React from "react";
import { Timeline } from "../ui/timeline";

const ExperienceTimeLine = () => {
  const experienceData = [
    {
      heading: "Full-Stack Developer",
      year: "2023",
      description: "Started working as a Full-Stack Developer, building dynamic web apps.",
    },
    {
      heading: "Frontend Developer",
      year: "2022",
      description: "Enhanced frontend skills by crafting responsive designs with React.",
    },
    {
      heading: "Web Designer Intern",
      year: "2021",
      description: "Interned as a Web Designer, creating visually appealing user interfaces.",
    },
    {
      heading: "Learning Basics",
      year: "2020",
      description: "Began my journey into coding, learning HTML, CSS, and JavaScript.",
    },
    {
      heading: "Learning Basics",
      year: "2020",
      description: "Began my journey into coding, learning HTML, CSS, and JavaScript.",
    },
  ];


  return (
    <div className="container relative max-w-[1200px] mt-24 area">

      <div className="">
			<ul className="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
      <Timeline data={experienceData} />
    </div>

  );
};

export default ExperienceTimeLine;
