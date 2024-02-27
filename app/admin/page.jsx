import React from "react";
import SideBar from "../components/SideBar";

const admin = () => {
  return (
    <div className="bg-black text-white h-screen py-5">
      <div className="container flex">
        <SideBar className />
        <div className="bg-white rounded-xl text-black flex-grow h-screen py-5 ps-10">
          Contents
        </div>
      </div>
    </div>
  );
};

export default admin;
