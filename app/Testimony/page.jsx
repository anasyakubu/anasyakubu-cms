import React from "react";
import Nav from "../components/Nav";
import TestimonyForm from "../Section/TestimonyForm/TestimonyForm";
import TestimonyList from "../Section/TestimonyList/TestimonyList";
import Footer from "../Section/Footer/Footer";

const Testimony = () => {
  return (
    <div className="Testimony bg-[#1b1b1b] text-[#aeaeae] font-nunito-eb">
      <Nav />
      <TestimonyForm />
      <TestimonyList />
      <Footer />
    </div>
  );
};

export default Testimony;
