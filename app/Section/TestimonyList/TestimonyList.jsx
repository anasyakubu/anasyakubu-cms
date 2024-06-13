import React from "react";
import TestimonyListCard from "../../components/TestimonyListCard";
import "./TestimonyList.scss";

const TestimonyList = () => {
  return (
    <div className="TestimonyList">
      <div className="py-5 p-32">
        <div className="">
          <h6 className="text-[#f8f8f8] text-3xl">People Testimonials</h6>
        </div>
        <div className="mt-5">
          <div className="p-1 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            <TestimonyListCard />
            <TestimonyListCard />
            <TestimonyListCard />
            <TestimonyListCard />
            <TestimonyListCard />
            <TestimonyListCard />
            <TestimonyListCard />
            <TestimonyListCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonyList;
