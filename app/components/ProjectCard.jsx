// import React from 'react'
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
// import ProjectImage from "../Assets/invoice.png";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ProjectCards = ({
  projectImage,
  name,
  details,
  status,
  projectLink,
  handleDelete,
  id,
  color,
}) => {
  return (
    <div className="ProjectCards">
      <div className="p-2 m-2">
        <div className="">
          <Image
            className="rounded-md"
            src={projectImage}
            alt="Project Image"
            width="1000"
            height="1000"
          />
          <div className="">
            <h6 className="mt-3">{name}</h6>
            <p className="mt-3 text-sm">{details}</p>
            <div className="mt-3 flex justify-between">
              <div
                className={`text-[10px] min-w-[50px] px-[8px] py-1 rounded-[30px] ${color} text-white ppR flex items-center justify-between gap-2`}
              >
                {status}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  className={`${color}`}
                  height="8"
                  width="8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8"></circle>
                </svg>
              </div>
              <Link
                href={projectLink}
                target="_blank"
                className="text-sm flex gap-2"
              >
                <span>Vist</span>
                <span>
                  <FiExternalLink />
                </span>
              </Link>
            </div>
            <div className="mt-3 flex justify-between">
              <button className="">
                <Link className="text-white" href={`${id}`}>
                  <FaEdit />
                </Link>
              </button>
              <button onClick={handleDelete} className="text-white">
                <MdDelete />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
