"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import userImage from "../../Assets/user-1.jpg";
import "./TestimonyForm.scss";

const TestimonyForm = () => {
  const [file, setFile] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);

  const handleImageChange = (e) => {
    setImageUpload(e.target.files[0]);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="TestimonyForm">
      <div className="py-8 p-32">
        <div className="bg-[#f8f8f8] text-black p-10 rounded-lg shadow-lg">
          <form>
            <div className="p-1 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
              {/*  */}
              <div className="">
                <div className="">
                  <Image
                    className="w-20 rounded-full"
                    src={userImage}
                    alt="User Image"
                  />
                </div>
                <div className="mt-5">
                  <label className="text-md font-light">Name</label>
                  <input
                    type="text"
                    className="mt-3 text-sm p-2 w-full outline-none border border-[#1b1b1b] rounded-lg"
                    placeholder="Eg. Anas Yakubu"
                  />

                  <div className="mt-3">
                    <label className="text-md font-light">Type of User</label>
                    <input
                      type="text"
                      className="mt-3 text-sm p-2 w-full outline-none border border-[#1b1b1b] rounded-lg"
                      placeholder="Eg. Team Management"
                    />
                  </div>
                </div>
              </div>
              {/* image */}
              <div className="mt-3">
                <div className="">
                  <div className="mt-3">
                    <label className="text-md font-light">Testimony</label>
                    <textarea
                      name=""
                      id=""
                      rows="10"
                      className="mt-3 text-sm p-2 w-full outline-none border border-[#1b1b1b] rounded-lg"
                      placeholder="Enter a Testimony"
                    ></textarea>
                  </div>
                  <div className="mt-5">
                    <button className="btn p-2 text-sm bg-black text-white pr-5 pl-5 outline-none border border-black rounded-lg">
                      Add Testimonials
                    </button>
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

export default TestimonyForm;
