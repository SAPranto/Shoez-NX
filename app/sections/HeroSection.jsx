import React from 'react'
import Image from "next/image";
import Button from "../components/Button";
import SecondaryButton from "../components/SecondaryButton";

const HeroSection = () => {
  return (
    <section className="">
    <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1>Online Shoe Shop</h1>
        <p className="mb-8">
          Copper mug try-hard pitchfork pour-over freegan heirloom neutra
          air plant cold-pressed tacos poke beard tote bag. Heirloom echo
          park mlkshk tote bag selvage hot chicken authentic tumeric
          truffaut hexagon try-hard chambray.
        </p>
        <div className="flex justify-center gap-4">
          <Button buttonText="View Products" href="./products" />
          <SecondaryButton buttonText="Contact Now" href="./contact" />
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image
          className="object-cover object-center rounded"
          alt="hero"
          src="/shoe.webp"
          width={500}
          height={400}
        />
      </div>
    </div>
  </section>
  )
}

export default HeroSection