// import React from 'react'
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import ProjectImage from "../Assets/invoice.png";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ProjectCards = () => {
  return (
    <div className="ProjectCards">
      <div className="p-2 m-2">
        <div className="">
          <Image
            className="rounded-md"
            src={ProjectImage}
            alt="Project Image"
          />
          <div className="">
            <h6 className="mt-3">Daily Invoice</h6>
            <p className="mt-3 text-sm">
              A webapp for share invoice and recive payment all around the world
            </p>
            <div className="mt-3 flex justify-between">
              <div
                className={`text-[10px] min-w-[50px] px-[8px] py-1 rounded-[30px] bg-green-600 text-white ppR flex items-center justify-between gap-2`}
              >
                Live
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  className="text-green-400"
                  height="8"
                  width="8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8"></circle>
                </svg>
              </div>
              <Link href="/" target="_blank" className="text-sm flex gap-2">
                <span>Vist</span>
                <span>
                  <FiExternalLink />
                </span>
              </Link>
            </div>
            <div className="mt-3 flex justify-between">
              <button className="">
                <Link className="text-white" href="/">
                  <FaEdit />
                </Link>
              </button>
              <button className="">
                <Link className="text-white" href="/">
                  <MdDelete />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
