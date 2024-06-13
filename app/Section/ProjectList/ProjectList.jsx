import React from "react";
import ProjectCards from "../../components/ProjectCard";
import "./ProjectList.scss";

const ProjectList = () => {
  return (
    <div className="ProjectList">
      <div className="py-5 p-32">
        <div className="">
          <h6 className="text-[#f8f8f8] text-3xl">My Projects</h6>
        </div>
        <div className="mt-5">
          <div className="p-1 space-y-2 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
            <ProjectCards />
            <ProjectCards />
            <ProjectCards />
            <ProjectCards />
            <ProjectCards />
            <ProjectCards />
            <ProjectCards />
            <ProjectCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
