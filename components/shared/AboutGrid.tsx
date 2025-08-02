import { AboutMe, skills, slugs } from "@/constants";
import React from "react";
import IconCloud from "../ui/icon-cloud";
import { CodeBlock } from "../ui/code-block";
import VideoPlayer from "./VideoPlayer";

function AboutGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-10">
            {/* First Row */}
            <div className="flex justify-center items-center md:col-span-7 syntax_highlighter p-2 relative ]">
                <VideoPlayer />
            </div>
            <div className="md:col-span-5 h-full md:p-10 syntax_highlighter  flex justify-center items-center h-96 relative overflow-hidden">
                <IconCloud iconSlugs={slugs} />
            </div>

            {/* Second Row */}
            <div className="md:col-span-5 syntax_highlighter relative">
                <CodeBlock
                    language="jsx"
                    filename="My Skills"
                    highlightLines={[3, 4, 5, 6, 7, 8, 9, 10, 11]}
                    code={skills}
                />
            </div>
            <div className="md:col-span-7 syntax_highlighter relative">
                <CodeBlock
                    language="jsx"
                    filename="About Me"
                    highlightLines={[]}
                    code={AboutMe}
                />
            </div>

        </div>
    );
}

export default AboutGrid;
