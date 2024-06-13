import React from "react";
import Nav from "../../app/components/Nav";
import ProjectForm from "../Section/ProjectForm/ProjectForm";
import ProjectList from "../Section/ProjectList/ProjectList";
import Footer from "../Section/Footer/Footer";

const Projects = () => {
  return (
    <div className="Projects bg-[#1b1b1b] text-[#aeaeae] font-nunito-eb">
      <Nav />
      <ProjectForm />
      <ProjectList />
      <Footer />
    </div>
  );
};

export default Projects;
