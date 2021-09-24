import * as React from "react";

const AboutCard = ({ image, titleText, bodyText }) => {
  return (
    <div className="container w-80 group">
      <div className="bg-white flex flex-col text-left border border-black rounded-xl p-6 hover:shadow-custom">
        {image}
        <h4 className="text-blue-dark font-body text-h4 group-hover:text-blue pt-5 pb-2">
          {titleText}
        </h4>
        <p className="font-body text-body h-16">{bodyText}</p>
      </div>
    </div>
  );
};

export default AboutCard;
