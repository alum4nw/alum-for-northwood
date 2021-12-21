import * as React from "react";
import AboutCard from "./AboutCard";
import { StaticImage } from "gatsby-plugin-image";

const LearnMore = () => {
  return (
    <div className="bg-white text-center flex flex-col items-center justify-center space-y-11 pt-10 pb-12 lg:pt-16">
      <h2 className="font-header text-mh2 lg:text-h2">Learn more about...</h2>
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-5 lg:space-x-9">
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
          linkTo="/program"
          isInternal={true}
        />
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
          linkTo="/about"
          isInternal={true}
        />
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
          linkTo="https://mentorcenter.us/program/alum-for-northwood"
          isInternal={false}
        />
      </div>
    </div>
  );
};

export default LearnMore;
