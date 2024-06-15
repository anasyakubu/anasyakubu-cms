"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import userImage from "../../Assets/user-1.jpg";
import "./TestimonyForm.scss";
import { useRouter } from "next/navigation";
import axios from "axios";
import { storage } from "../../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const TestimonyForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);
  const formRef = useRef(null);

  const handleImageChange = (e) => {
    setImageUpload(e.target.files[0]);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const imageRef = ref(storage, `anasyakubu-cms-images/${uuidv4()}`);
      await uploadBytes(imageRef, imageUpload);

      const imageUrl = await getDownloadURL(imageRef);

      const formData = {
        name: e.target.name.value,
        userTitle: e.target.userTitle.value,
        testimony: e.target.testimony.value,
        userImage: imageUrl,
      };

      console.log(formData);
      const response = await axios.post(
        "https://anasyakubu-cms-api.onrender.com/createTestimony",
        formData
      );

      if (response.data.error) {
        alert(response.data.error);
      } else {
        alert("Testimony added Successfully");
        router.push("/Testimony");
        formRef.current.reset(); // Reset the form here
        window.location.reload();
      }
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="TestimonyForm">
      <div className="py-8 p-32">
        <div className="bg-[#f8f8f8] text-black p-10 rounded-lg shadow-lg">
          <form ref={formRef} onSubmit={handleSubmit}>
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

                <div className="mt-5">
                  <label className="text-md font-light">Name</label>
                  <input
                    type="text"
                    className="mt-3 text-sm p-2 w-full outline-none border border-[#1b1b1b] rounded-lg"
                    placeholder="Eg. Anas Yakubu"
                    name="name"
                  />

                  <div className="mt-3">
                    <label className="text-md font-light">Type of User</label>
                    <input
                      type="text"
                      className="mt-3 text-sm p-2 w-full outline-none border border-[#1b1b1b] rounded-lg"
                      placeholder="Eg. Team Management"
                      name="userTitle"
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
                      name="testimony"
                      id=""
                      rows="10"
                      className="mt-3 text-sm p-2 w-full outline-none border border-[#1b1b1b] rounded-lg"
                      placeholder="Enter a Testimony"
                    ></textarea>
                  </div>
                  <div className="mt-5">
                    <button
                      type="submit"
                      className="btn p-2 text-sm bg-black text-white pr-5 pl-5 outline-none border border-black rounded-lg"
                    >
                      {loading ? "Adding..." : "Add Testimonials"}
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
