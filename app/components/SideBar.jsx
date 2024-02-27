import Link from "next/link";
import React from "react";
import { MdAdminPanelSettings, MdSettings } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { GiCardboardBoxClosed } from "react-icons/gi";

const SideBar = () => {
  const inactiveLink = "flex gap-3 items-center";
  const activeLink =
    inactiveLink + "bg-white text-black rounded-l-xl px-4 py-3";
  return (
    <div className="py-5 ps-2 flex flex-col gap-6">
      <Link href={"/"} className="bg-white text-black rounded-l-xl px-4 py-3">
        <MdAdminPanelSettings />
        <span>Dashboard</span>
      </Link>
      <Link href={"/"} className={inactiveLink}>
        <FaCartPlus />
        <span>Products</span>
      </Link>
      <Link href={"/"} className={inactiveLink}>
        <GiCardboardBoxClosed />
        <span>Orders</span>
      </Link>
      <Link href={"/"} className={inactiveLink}>
        <MdSettings />
        <span>Settings</span>
      </Link>
    </div>
  );
};

export default SideBar;
