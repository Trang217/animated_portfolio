"use client";
import Projects from "@/components/Projects";
import ProjectsCategories from "@/components/ProjectsCategories";
import { motion } from "framer-motion";
import { projects_data } from "@/data/projects";
import React, { useState } from "react";

function PortfolioPage() {
  const [projects, setProjects] = useState(projects_data);
  console.log("projects", projects);
  return (
    <motion.div
      className="h-full overflow-scroll"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className=" flex flex-col gap-4 p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48">
        <h1 className="uppercase font-bold text-2xl text-slate-700">
          Recent projects
        </h1>
        <p className="text-xl font-semibold text-slate-700">
          Check out some of mini projects I recently work on in order to develop
          my skills.
        </p>

        <div className="flex flex-col px-4 gap-16">
          <ProjectsCategories projects={projects} />
          <Projects projects={projects} />
        </div>
      </div>
    </motion.div>
  );
}

export default PortfolioPage;
