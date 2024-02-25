import React from 'react'
import TitleBlock from "../components/TitleBlock";

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
        <div className="xl:w-1/3 md:w-1/2 p-4">
          <div className="border border-gray-200 p-6 rounded-lg">
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </div>
            <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
              Shooting Stars
            </h2>
            <p className="leading-relaxed text-base">
              Fingerstache flexitarian street art 8-bit waist co, subway tile
              poke farm.
            </p>
          </div>
        </div>
      <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        Button
      </button>
    </div>
  </section>
  )
}

export default FeatureSection