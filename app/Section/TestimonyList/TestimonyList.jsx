"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import TestimonyListCard from "../../components/TestimonyListCard";
import "./TestimonyList.scss";
import { BiLogoSlack } from "react-icons/bi";
import SkeletonTestimony from "../../components/SkeletonTestimony";

const TestimonyList = () => {
  const [loading, setLoading] = useState(false);
  const [testimonys, setTestimonys] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const testimonyPerPage = 6; // Number of tasks per page

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://anasyakubu-cms-api.onrender.com/testimonyList")
      .then((result) => {
        const fetchTestimonys = result.data.map((testimony) => {
          // Convert createdAt string to a Date object
          const createdAtDate = new Date(testimony.createdAt);

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

          // Return the testimony object with formatted createdAt
          return {
            ...testimony,
            createdAt: formattedDate,
          };
        });
        // Reverse the order of testimonys after formatting
        const getTestimonys = fetchTestimonys;

        // Set the state with formatted and reversed testimonys
        setTestimonys(getTestimonys);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  // Add empty dependency array to ensure useEffect runs only once

  // Calculate the current projects to display
  const indexOfLastProject = currentPage * testimonyPerPage;
  const indexOfFirstProject = indexOfLastProject - testimonyPerPage;
  const currentTestimony = testimonys.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(testimonys.length / testimonyPerPage);

  const handleDelete = (id) => {
    console.log("deleting...", id);
    if (confirm("Do you want to delete this Testimony")) {
      alert("Deleted");
      axios
        .delete("https://anasyakubu-cms-api.onrender.com/deleteTestimony/" + id)
        .then((res) => {
          console.log(res);
          alert("Testimony deleted successfully");
          window.location.reload();
        })
        .catch((err) => console.log(err));
    } else {
      alert("Cancel successfully");
    }
  };

  return (
    <div className="TestimonyList">
      <div className="py-5 p-32">
        <div className="">
          <h6 className="text-[#f8f8f8] text-3xl">People Testimonials</h6>
        </div>

        <div className="mt-10">
          {loading ? (
            <div className="p-1 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
              <SkeletonTestimony />
              <SkeletonTestimony />
            </div>
          ) : (
            <div className="p-1 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
              {currentTestimony.map((testimony) => (
                <TestimonyListCard
                  key={testimony._id}
                  userImage={testimony.userImage}
                  name={testimony.name}
                  userTitle={testimony.userTitle}
                  testimony={testimony.testimony}
                  id={testimony._id}
                  handleDelete={() => handleDelete(testimony._id)}
                  // createdAt={blog.createdAt}
                />
              ))}
            </div>
          )}
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

export default TestimonyList;
