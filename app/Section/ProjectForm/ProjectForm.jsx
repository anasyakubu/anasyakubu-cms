"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ProductImage from "../../Assets/file1.svg";
import "./ProjectForm.scss";

const ProjectForm = () => {
  const [file, setFile] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);

  const handleImageChange = (e) => {
    setImageUpload(e.target.files[0]);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="ProjectForm">
      <div className="py-8 p-32">
        <div className="bg-[#f8f8f8] text-black p-10 rounded-lg shadow-lg">
          <form>
            <div className="p-1 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
              {/*  */}
              <div className="">
                <div className="">
                  <label className="text-md font-light">Name</label>
                  <input
                    type="text"
                    className="mt-3 text-sm p-2 w-full outline-none border border-[#1b1b1b] rounded-lg"
                    placeholder="Enter the Project Name"
                  />
                </div>
                <div className="mt-3">
                  <label className="text-md font-light">Details</label>

                  <textarea
                    name=""
                    id=""
                    rows="5"
                    className="mt-3 text-sm p-2 w-full outline-none border border-[#1b1b1b] rounded-lg"
                    placeholder="Enter the Project Name"
                  ></textarea>
                </div>
                <div className="mt-3">
                  <label className="text-md font-light">Status</label>
                  <select
                    className="mt-3 text-sm p-2 w-full outline-none border border-[#1b1b1b] rounded-lg"
                    name=""
                    id=""
                  >
                    <option disabled>Select an option</option>
                    <option>Live</option>
                    <option>Not-Live</option>
                  </select>
                </div>
              </div>
              {/* image */}
              <div className="py-5">
                <div className="flex justify-center text-center">
                  <div className="">
                    <div className="">
                      <div className="">
                        <input
                          type="file"
                          className="sr-only"
                          onChange={handleFileChange}
                        />
                        <label className="cursor-pointer bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                          <input type="file" onChange={handleImageChange} />
                          {file ? <span>{file.name}</span> : []}
                        </label>
                      </div>
                      {/* Display Image */}
                      <div className="mt-5">
                        <div
                          role="status"
                          className="mt-10 space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
                        >
                          <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                            <svg
                              className="w-10 h-10 text-gray-200 dark:text-gray-600"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 18"
                            >
                              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <button className="btn p-2 text-sm bg-black text-white pr-5 pl-5 outline-none border border-black rounded-lg">
                        Add Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
