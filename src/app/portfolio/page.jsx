"use client";
import Projects from "@/components/Projects";
import ProjectsCategories from "@/components/ProjectsCategories";
import { motion } from "framer-motion";
import React from "react";

function PortfolioPage() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div>
        <h2>Recent projects</h2>
        <p>
          Check out some of mini projects I recently work on in order to develop
          my skills. Please use the buttons to toggle the different categories.
        </p>

        <div className="">
          <ProjectsCategories />
          <Projects />
        </div>
      </div>
    </motion.div>
  );
}

export default PortfolioPage;
