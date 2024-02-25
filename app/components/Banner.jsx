import Link from "next/link";
import React from "react";



const Banner = ({ PageTitle }) => {
  return (
    <section className="h-60 lg:h-80 w-full bg-black flex items-center">
      <div className="container flex flex-col items-center">
        <h1 className="text-white">{PageTitle}</h1>
        <div className="text-white flex gap-2">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>{PageTitle}</span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
