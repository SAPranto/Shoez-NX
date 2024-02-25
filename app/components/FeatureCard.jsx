import React from "react";



const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="border border-gray-200 p-6 rounded-lg xl:w-1/3 md:w-1/2 shadow-md">
      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
        {Icon && <Icon className="text-2xl" />}
      </div>
      <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
        {title}
      </h2>
      <p className="leading-relaxed text-base">{description}</p>
    </div>
  );
};

export default FeatureCard;
