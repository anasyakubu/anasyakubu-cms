"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectCards from "../../components/ProjectCard";
import "./ProjectList.scss";
import { BiLogoSlack } from "react-icons/bi";
import Skeleton from "../../components/Skeleton";

const ProjectList = () => {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 8; // Number of tasks per page

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://anasyakubu-cms-api.onrender.com/projectList")
      .then((result) => {
        const fetchProjects = result.data.map((project) => {
          // Convert createdAt string to a Date object
          const createdAtDate = new Date(project.createdAt);
          const live = project.status;

          // Determine the bgColor based on the status
          const bgColor = live === "Live" ? "text-green-400" : "text-red-600";

          // Options for formatting the date
          const options = {
            weekday: "long", // Full name of the day of the week
            day: "2-digit", // Two-digit day of the month
            month: "long", // Full name of the month
            year: "numeric", // Full year
          };

          // Format the date using Intl.DateTimeFormat
          const formattedDate = new Intl.DateTimeFormat(
            "en-US",
            options
          ).format(createdAtDate);

          // Return the blog object with formatted createdAt
          return {
            ...project,
            createdAt: formattedDate,
            bgColor: bgColor,
          };
        });
        // Reverse the order of blogs after formatting
        const getProjects = fetchProjects;

        // Set the state with formatted and reversed blogs
        setProjects(getProjects);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  // Add empty dependency array to ensure useEffect runs only once

  // Calculate the current projects to display
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const handleDelete = (id) => {
    console.log("deleting...", id);
    if (confirm("Do you want to delete this Projects")) {
      alert("Deleted");
      axios
        .delete("https://anasyakubu-cms-api.onrender.com/deleteProject/" + id)
        .then((res) => {
          console.log(res);
          alert("Project deleted successfully");
          window.location.reload();
        })
        .catch((err) => console.log(err));
    } else {
      alert("Cancel successfully");
    }
  };

  return (
    <div className="ProjectList">
      <div className="py-5 p-32">
        <div className="">
          <h6 className="text-[#f8f8f8] text-3xl">My Projects</h6>
        </div>
        <div className="mt-5">
          <div className="">
            {loading ? (
              <Skeleton />
            ) : (
              <div className="p-1 space-y-2 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
                {currentProjects.map((project) => (
                  <ProjectCards
                    key={project._id}
                    id={project._id}
                    projectImage={project.projectImage}
                    name={project.name}
                    details={project.details}
                    status={project.status}
                    projectLink={project.projectLink}
                    handleDelete={() => handleDelete(project._id)}
                    color={project.bgColor}
                    // createdAt={blog.createdAt}
                  />
                ))}
              </div>
            )}
            {/* <ProjectCards name={} details={} live={}  projectLink={} /> */}
          </div>
          {/* Pagination Controls */}
          <div className="mt-5 flex justify-center">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`px-3 py-1 mx-1 rounded ${
                  index + 1 === currentPage
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
