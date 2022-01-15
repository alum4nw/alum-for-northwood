import * as React from "react";
import { Link } from "gatsby";

const AboutCard = ({ image, titleText, bodyText, linkTo, isInternal }) => {
  const CardContent = () => {
    return (
      <div
        className="bg-white flex flex-col text-left border border-black rounded-xl pt-5 md:p-4 px-5 pb-6 lg:p-6
      hover:shadow-custom transform hover:-translate-x-1 hover:-translate-y-1"
      >
        {image}
        <h4 className="text-blue-dark font-body text-mh4 lg:text-h4 group-hover:text-blue pb-0.5 md:pb-1 pt-3 leading-6 lg:leading-7">
          {titleText}
        </h4>
        <p className="font-body text-body md:text-tbody lg:text-body h-16">
          {bodyText}
        </p>
      </div>
    );
  };

  if (isInternal) {
    return (
      <div className="container w-72 md:w-60 lg:w-80 group">
        <Link to={linkTo}>
          <CardContent />
        </Link>
      </div>
    );
  } else {
    return (
      <div className="container w-72 md:w-60 lg:w-80 group">
        <a href={linkTo} target="_blank" rel="noreferrer noopener">
          <CardContent />
        </a>
      </div>
    );
  }
};

export default AboutCard;
