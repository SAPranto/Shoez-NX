"use client";
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu, GiCancel, GiSmartphone } from "react-icons/gi";
import { FaMailBulk } from "react-icons/fa";
import Image from "next/image";
import Button from "./Button";
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
      <section className="hidden lg:block uppercase bg-white py-3 border-b-[#ebeeee] border-b border-solid">
        <div className="container horizontal">
          <div className="horizontal gap-4">
            <div className="horizontal gap-1">
              <FaMailBulk className="icon" />
              <span className="text-xs uppercase">sa.pranto16@gmail.com</span>
            </div>
            <div className="horizontal gap-1">
              <GiSmartphone className="icon" />
              <span className="text-xs uppercase">01631327542</span>
            </div>
          </div>
          <div className="text-xs">
            UP TO 40% OFF ON SHOES.{" "}
            <Link href="#" className="custom-link">
              SHOP NOW
            </Link>
          </div>
        </div>
      </section>
      <nav
        className={`py-5 w-full transition-all duration-300 ease sticky top-0 ${
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
              <Button buttonText="User Login" href="./contact" />
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
