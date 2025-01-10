import { AboutMe, skills, slugs } from "@/constants";
import React from "react";
import IconCloud from "../ui/icon-cloud";
import { CodeBlock } from "../ui/code-block";

function AboutGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-10">
            {/* First Row */}
            <div className="md:col-span-7 syntax_highlighter p-1 relative">

            </div>
            <div className="md:col-span-5 p-10 syntax_highlighter  flex justify-center items-center h-96 relative overflow-hidden">
                <IconCloud iconSlugs={slugs} />
            </div>

            {/* Second Row */}
            <div className="md:col-span-5 syntax_highlighter relative">
                <CodeBlock
                    language="jsx"
                    filename="My Skills"
                    highlightLines={[3, 4, 5, 6, 7, 8, 9, 10]}
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
