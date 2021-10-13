import * as React from "react";
import AboutCard from "./AboutCard";
import { StaticImage } from "gatsby-plugin-image";

const LearnMore = () => {
  return (
    <div className="bg-white text-center flex flex-col items-center justify-center space-y-11 pb-16">
      <h2 className="font-header text-mh2 md:text-h2 pt-10 md:pt-16 md:pb-5">
        Learn more about...
      </h2>
      <div className="flex flex-col items-center justify-center md:flex-row space-y-8 md:space-y-0 md:pb-10 md:space-x-9">
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
          linkTo="https://mentorcenter.us/"
          isInternal={false}
        />
      </div>
    </div>
  );
};

export default LearnMore;
