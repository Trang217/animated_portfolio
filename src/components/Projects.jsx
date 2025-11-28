"use client";
import React from "react";
import Project from "./Project";

function Projects({ projects }) {
  return (
    <div className="h-full flex flex-col gap-16 lg:flex-row lg:flex-wrap lg:justify-evenly">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Projects;
