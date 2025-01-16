"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  heading: string;
  year: string;
  description: string;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 40%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full  px-6 md:px-10"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {/* Animated Vertical Line */}
        <div
          style={{
            height: height-30 + "px",
          }}
          className="absolute md:left-1/2 left-0 -translate-x-1/2 top-0 overflow-hidden w-[4px] bg-gradient-to-b from-transparent via-neutral-300 dark:via-neutral-700 to-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[4px] bg-gradient-to-b from-purple-500 to-purple-700"
          />
        </div>

        {data.map((item, index) => (
          <div
            key={index}
            className={` relative flex items-center gap-6 py-2 px-0 ${
              index % 2 === 0 ? "md:justify-start justify-center" : "justify-center md:justify-end"
            }`}
          >
            {/* Vertical Line Marker */}
            <div className="md:left-1/2 left-0 absolute  -translate-x-1/2">
              <div className="relative h-8 w-8 bg-purple-500 rounded-full flex items-center justify-center z-10">
                <div className="h-4 w-4 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Card Content */}
            <motion.div
              className={`p-6 max-w-xs custom_card_class shadow-md rounded-lg ${
                index % 2 === 0 ? "md:ml-16 ms-10" : "md:mr-16 ms-10"
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-bold text-d_bg_purple_dark dark:text-white">
                {item.heading}
              </h3>
              <h4 className="text-sm font-semibold text-purple-500">
                {item.year}
              </h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-300">
                {item.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
