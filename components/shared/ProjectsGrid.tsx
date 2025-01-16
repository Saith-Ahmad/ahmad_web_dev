"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Button } from "../ui/button";
import { ExternalLink, Github } from "lucide-react";
import { } from "@/constants";
import { projects } from "@/constants/projects";


export function ProjectsGrid() {
    const [filter, setFilter] = useState("fullstack");
    const filteredProjects = projects.filter((project) => project.category === filter);
    return (
        <div className="flex flex-col">
            <div className="flex gap-3 mb-2 justify-center items-center flex-wrap">
                {[ "fullstack", "frontend", "webflow", "wordpress"].map(
                    (category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-4 py-1 rounded-full text-white ${filter === category
                                ? "active"
                                : "filter_btn hover:scale-105"
                                }`}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    )
                )}
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-5 flex-wrap">
                {filteredProjects.map((item, index) => (
                    <div key={index}>
                        <CardContainer className="p-0">
                            <CardBody className="min-h-[480px] project_card_class relative group/card  w-auto sm:w-[30rem] h-auto rounded-xl p-3">
                                <CardItem
                                    translateZ="70"
                                    rotateX={20}
                                    rotateZ={-6}
                                    className="w-full"
                                >
                                    <Image
                                        src={item.image}
                                        height="1000"
                                        width="1000"
                                        className="h-30 w-full object-cover rounded-xl shadow-lg  shadow-[#cec2de3a]"
                                        alt="thumbnail"
                                    />
                                </CardItem>
                                <div className="p-3 mt-2">
                                    <CardItem
                                        translateZ="30"
                                        className="text-xl font-bold text-neutral-600 dark:text-white"
                                    >
                                        {item.title}
                                    </CardItem>
                                    <CardItem
                                        as="p"
                                        translateZ="30"
                                        className="text-neutral-500 text-base max-w-sm mt-2 dark:text-neutral-300"
                                    >
                                        {item.description}
                                    </CardItem>
                                    <CardItem translateZ="10" rotateX="-5" className="my-4" >
                                        <div className="flex flex-row gap-2 flex-wrap">
                                            {item.tech.map((data, index) => (
                                                <button key={index} className="tech_btn">{data}</button>
                                            ))}
                                        </div>
                                    </CardItem>
                                    <CardItem
                                        translateZ="10">
                                        {item.github && <a href={item.github} target="_blank">
                                            <Button className="bg-transparent border-2 border-[#4A148C] dark:text-white text-primary hover:bg-[#4A148C]">
                                                <span className="">Github Repo</span>
                                                <Github fill="none" />
                                            </Button>
                                        </a>}
                                        <a href={item.liveDemo} target="_blank">
                                            <Button className="ms-2 dark:bg-gray-300 bg-d_bg_purple_dark  dark:text-[#2C0735] text-white hover:text-primary hover:bg-gray-200">
                                                <span className="">Live Demo</span>
                                                <ExternalLink fill="none" />
                                            </Button>
                                        </a>
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    </div>
                ))}
            </div>
        </div>
    );
}
