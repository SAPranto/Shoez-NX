import React from "react";
import TitleBlock from "../components/TitleBlock";
import FeatureCard from "../components/FeatureCard";
import { MdVerified } from "react-icons/md";

const FeatureSection = () => {
  return (
    <section className="section">
      <div className="container">
        <TitleBlock
          heading={"Shop Features"}
          paragraph={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          }
        ></TitleBlock>
        <div className="flex gap-4">
          <FeatureCard
            icon={MdVerified} // Pass the icon component
            title="Shooting Stars"
            description="Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm."
          />
          <FeatureCard
            icon={MdVerified} // Pass the icon component
            title="Shooting Stars"
            description="Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm."
          />
          <FeatureCard
            icon={MdVerified} // Pass the icon component
            title="Shooting Stars"
            description="Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm."
          />
        </div>
        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button>
      </div>
    </section>
  );
};

export default FeatureSection;
