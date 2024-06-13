// import React from 'react'
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import UserImage from "../Assets/user-1.jpg";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TestimonyListCard = () => {
  return (
    <div className="TestimonyListCard">
      <div className="p-5 mt-5 m-2 bg-white text-black rounded-lg shadow-sm shadow-slate-50">
        <div className="flex gap-5">
          <div className="">
            <Image className="w-14 rounded-full" src={UserImage} alt="User" />
          </div>
          <h6 className="">
            Anas Yakubu <br /> <span>Software Engineer</span>
          </h6>
        </div>
        <div className="mt-3">
          <p className="text-sm" style={{ fontSize: "12px" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem,
            magni velit quaerat dolorem blanditiis voluptate amet? Ullam
            temporibus placeat harum sapiente animi, asperiores numquam
            architecto consectetur. Dignissimos voluptatum recusandae laboriosam
            enim praesentium ad incidunt, qui in, laudantium sequi nesciunt nemo
            odit porro, ab aut commodi? Repudiandae numquam quam ipsam eveniet?
          </p>
        </div>
        <div className="mt-5 flex gap-3">
          <button className="text-xl text-blue-600">
            <Link href="/">
              <FaEdit />
            </Link>
          </button>

          <button className="text-xl text-red-600">
            <Link href="/">
              <MdDelete />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonyListCard;
