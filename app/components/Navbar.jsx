"use client";
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu, GiCancel, GiSmartphone } from "react-icons/gi";
import { FaMailBulk } from "react-icons/fa";
import Image from "next/image";
import Button from "./Button"; // Import the Button component
import Link from "next/link";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [navMove, setNavMove] = useState(false);

  const onNavClick = () => {
    setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen);
  };

  const setStickyOn = () => {
    setSticky(window.scrollY >= 300);
  };

  const setNavMoved = () => {
    setNavMove(window.scrollY >= 50 && window.scrollY <= 600);
  };

  useEffect(() => {
    window.addEventListener("scroll", setStickyOn);

    // Cleanup function for removing the event listener
    return () => {
      window.removeEventListener("scroll", setStickyOn);
    };
  }, []); // Empty dependency array means it will only run once on mount

  useEffect(() => {
    window.addEventListener("scroll", setNavMoved);

    // Cleanup function for removing the event listener
    return () => {
      window.removeEventListener("scroll", setNavMoved);
    };
  }, []); // Empty dependency array means it will only run once on mount

  return (
    <>
      <section className="top-notice-bar">
        <div className="container notice-bar">
          <div className="horizontal gap-4">
            <div className="horizontal gap-2">
            <FaMailBulk className="icon" />
              <div className="text-xs uppercase">
                This is some text inside of a div block.
              </div>
            </div>
            <div className="horizontal gap-2">
            <GiSmartphone className="icon" />
              <div className="text-xs uppercase">
                This is some text inside of a div block.
              </div>
            </div>
          </div>
          <div className="text-xs uppercase">
            UP TO 40% OFF BEST-SELLING FURNITURE.{" "}
            <a href="#" className="custom-link">
              SHOP NOW
            </a>
          </div>
        </div>
      </section>
      <nav
        className={`mt-5 py-5 w-full transition-all duration-300 ease sticky top-0 ${
          sticky ? "bg-black lg:text-white" : ""
        } ${navMove ? "lg:-translate-y-full" : "lg:-translate-y-0"}`}
      >
        <div className="container flex justify-between items-center">
          <div>
            <Image src="/logo.png" width={120} height={10} alt="Site Logo" />
          </div>
          <div
            className={`text-center bg-slate-300 absolute top-0 right-0 px-24 py-14 h-[100vh] lg:h-full transform transition-transform duration-300 ease-out ${
              isNavOpen
                ? "translate-x-0 lg:transform-none"
                : "translate-x-full lg:transform-none"
            } lg:block lg:relative lg:bg-transparent lg:py-0 lg:px-0`}
          >
            <ul className="flex uppercase flex-col items-center gap-10 lg:flex-row">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/">Career</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <Button buttonText="User Login" />
            </ul>
            <GiCancel
              className="absolute top-4 right-4 cursor-pointer lg:hidden"
              onClick={onNavClick}
            />
          </div>
          <GiHamburgerMenu
            className={`cursor-pointer lg:hidden ${sticky ? "text-white" : ""}`}
            onClick={onNavClick}
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;