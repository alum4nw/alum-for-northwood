import * as React from "react";
import { Link } from "gatsby";

const AboutCard = ({ image, titleText, bodyText, linkTo, isInternal }) => {
  const CardContent = () => {
    return (
      <div
        className="bg-white flex flex-col text-left border border-black rounded-xl pt-6 px-6 
      hover:shadow-custom transform hover:-translate-x-1 hover:-translate-y-1 md:h-72 md:w-60 lg:h-96 lg:w-80"
      >
        {image}
        <h4 className="text-blue-dark font-body text-mh4 lg:text-h4 group-hover:text-blue pt-3 md:pt-5 pb-2">
          {titleText}
        </h4>
        <p className="font-body text-body md:text-tbody lg:text-body pb-3 md:h-24 md:pb-0">
          {bodyText}
        </p>
      </div>
    );
  };

  if (isInternal) {
    return (
      <div className="container w-72 md:w-60 group">
        <Link to={linkTo}>
          <CardContent />
        </Link>
      </div>
    );
  } else {
    return (
      <div className="container w-72 md:w-60 group">
        <a href={linkTo} target="_blank" rel="noreferrer noopener">
          <CardContent />
        </a>
      </div>
    );
  }
};

export default AboutCard;
