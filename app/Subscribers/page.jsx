import React from "react";
import Nav from "../components/Nav";
import TableSubscribers from "../Section/TableSubscribers/TableSubscribers";
import Footer from "../Section/Footer/Footer";

const Subscribers = () => {
  return (
    <div className="Subscribers bg-[#1b1b1b] text-[#aeaeae] font-nunito-eb">
      <Nav />
      <TableSubscribers />
      <Footer />
    </div>
  );
};

export default Subscribers;
