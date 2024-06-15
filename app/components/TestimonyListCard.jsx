// import React from 'react'
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
// import UserImage from "../Assets/user-1.jpg";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TestimonyListCard = ({
  userImage,
  name,
  userTitle,
  testimony,
  id,
  handleDelete,
}) => {
  return (
    <div className="TestimonyListCard">
      <div className="p-5 mt-5 m-2 bg-white text-black rounded-lg shadow-sm shadow-slate-50">
        <div className="flex gap-5">
          <div className="">
            <Image
              className="w-14 rounded-full"
              src={userImage}
              alt="User"
              width="1000"
              height="1000"
            />
          </div>
          <h6 className="">
            {name} <br /> <span>{userTitle}</span>
          </h6>
        </div>
        <div className="mt-3">
          <p className="text-sm" style={{ fontSize: "12px" }}>
            {testimony}
          </p>
        </div>
        <div className="mt-5 flex gap-3">
          <button className="text-xl text-blue-600">
            <Link href={`${id}`}>
              <FaEdit />
            </Link>
          </button>

          <button onClick={handleDelete} className="text-xl text-red-600">
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonyListCard;
