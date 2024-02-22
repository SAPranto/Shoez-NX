import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import Button from "./components/Button";
import SecondaryButton from "./components/SecondaryButton";

export default function Home() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-2 mx-auto lg:gap-8 xl:gap-0 lg:py-4 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7 ">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">
              Online Shoe Store
            </h1>
            <h2 className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              We are the only shoe importer from vietnam. Our Shoes are 100%
              original and we are licensed by lorem ipsum.
            </h2>
            <div className="flex gap-5">
              <Button buttonText="Buy Now" href="./about" />
              <SecondaryButton buttonText="Contact Now" buttonLink="./about" />
            </div>
          </div>
          <div className=" lg:mt-0 lg:col-span-5">
            <Image
              src="/shoe.webp"
              width={500}
              height={200}
              alt="Nexoy"
              className="fade-in-left"
            />
          </div>
        </div>
      </section>
    </>
  );
}
