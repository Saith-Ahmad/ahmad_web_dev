import { AboutMe, skills, slugs } from "@/constants";
import React from "react";
import IconCloud from "../ui/icon-cloud";
import { BorderBeam } from "../ui/border-beam";
import { CodeBlock } from "../ui/code-block";

function AboutGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-10">
            {/* First Row */}
            <div className="md:col-span-7 syntax_highlighter p-1 relative">
                <BorderBeam size={270} borderWidth={3} duration={10} />

            </div>
            <div className="md:col-span-5 p-10 syntax_highlighter  flex justify-center items-center h-96 relative overflow-hidden">
                <IconCloud iconSlugs={slugs} />
                <BorderBeam size={170} borderWidth={3} duration={10} />
            </div>

            {/* Second Row */}
            <div className="md:col-span-5 syntax_highlighter relative">
            <BorderBeam size={200} borderWidth={3}  duration={6} />
                <CodeBlock
                    language="jsx"
                    filename="My Skills"
                    highlightLines={[3, 4, 5, 6, 7, 8, 9, 10]}
                    code={skills}
                />
            </div>
            <div className="md:col-span-7 syntax_highlighter relative">
            <BorderBeam size={70} borderWidth={3}  duration={4} />
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
