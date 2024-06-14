import React from "react";

const Layout = (props) => {
  return (
    <div
      className="bg-[#1b1b1b] text-[#aeaeae] font-nunito-eb"
      style={{ height: "100vh" }}
    >
      {" "}
      <div className="">
        {/* <div className="flex justify-center text-center pt-20 items-center w-full none">
          <h1 className="text-white text-4xl">Welcome Back!</h1>
        </div> */}
        <div
          className=" h-full flex justify-center text-center pt-20 items-center w-full"
          // style={{ height: "98.5vh" }}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
