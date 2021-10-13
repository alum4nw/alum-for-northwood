import * as React from "react";
import { Link } from "gatsby";

const AboutCard = ({ image, titleText, bodyText, linkTo, isInternal }) => {
  if (isInternal) {
    return (
      <div className="container w-3/4 md:w-80 group">
        <Link to={linkTo}>
          <div
            className="bg-white flex flex-col text-left border border-black rounded-xl p-6 
      hover:shadow-custom transform hover:-translate-x-1 hover:-translate-y-1"
          >
            {image}
            <h4 className="text-blue-dark font-body text-mh4 md:text-h4 group-hover:text-blue pt-5 pb-2">
              {titleText}
            </h4>
            <p className="font-body text-body h-16">{bodyText}</p>
          </div>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="container w-3/4 md:w-80 group">
        <a href={linkTo} target="_blank" rel="noreferrer noopener">
          <div
            className="bg-white flex flex-col text-left border border-black rounded-xl p-6 
      hover:shadow-custom transform hover:-translate-x-1 hover:-translate-y-1"
          >
            {image}
            <h4 className="text-blue-dark font-body text-mh4 md:text-h4 group-hover:text-blue pt-5 pb-2">
              {titleText}
            </h4>
            <p className="font-body text-body h-16">{bodyText}</p>
          </div>
        </a>
      </div>
    );
  }
};

export default AboutCard;
