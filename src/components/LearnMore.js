import * as React from "react";
import AboutCard from "./AboutCard";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const LearnMore = () => {
  return (
    <div className="bg-white text-center flex flex-col items-center justify-center space-y-11 pb-16">
      <h2 className="font-header text-h2 pt-16 pb-5">Learn more about...</h2>
      <div className="flex md:flex-row sm:flex-col pb-10 space-x-9">
        <Link to="/program">
          <AboutCard
            image={
              <StaticImage
                src="../images/ourProgram.png"
                alt="our-program"
                className="border border-black"
              />
            }
            titleText="Our Program"
            bodyText="Get 1-on-1 mentorship and career guidance through our summer program."
          />
        </Link>
        <Link to="/about">
          <AboutCard
            image={
              <StaticImage
                src="../images/ourTeam.png"
                alt="our-program"
                className="border border-black"
              />
            }
            titleText="Our Leadership Team"
            bodyText="Find out how we got started and what we're all about."
          />
        </Link>
        <a
          href="https://mentorcenter.us/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <AboutCard
            image={
              <StaticImage
                src="../images/ourMentors.png"
                alt="our-program"
                className="border border-black"
              />
            }
            titleText="Our Mentors"
            bodyText="Meet an amazing community of alumni and schedule mentorship sessions."
          />
        </a>
      </div>
    </div>
  );
};

export default LearnMore;
