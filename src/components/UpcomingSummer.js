import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const UpcomingSummer = () => {
  const Subtitle = ({ children }) => {
    return (
      <p className="font-body text-mh4 lg:text-h4 text-blue font-bold px-2">
        {children}
      </p>
    );
  };

  return (
    <div className="bg-white text-center flex flex-col items-center justify-center pt-10 pb-11 lg:py-16 ">
      <h1 className="font-header text-mh2 lg:text-h2 pb-4">Summer 2022</h1>
      <div className="flex flex-col md:flex-row md:justify-center">
        <Subtitle>3 mentor meetings.</Subtitle>
        <Subtitle>3 group sessions.</Subtitle>
        <Subtitle>6 weeks.</Subtitle>
      </div>
      <div
        className="pt-10 grid grid-cols-1 md:grid-cols-2 
        md:gap-x-8 md:gap-y-12 lg:gap-y-14
      w-72 md:w-auto md:max-w-2xl lg:max-w-4xl"
      >
        <div className="pb-6 justify-center flex flex-col space-y-3">
          <h3 className="font-header text-mh3 lg:text-h3">Mentor Meetings</h3>
          <p className="font-body text-body text-left hidden md:block">
            Receive guidance about high school, college, and beyond from a
            personal mentor in 1-on-1 sessions. Build a relationship that will
            last you a lifetime!
          </p>
        </div>
        <StaticImage
          src="../images/mentorMeetings.png"
          alt="mentor-mentee"
          className="md:order-first"
        />
        <p className="font-body text-body pt-5 text-left md:hidden">
          Receive guidance about high school, college, and beyond from a
          personal mentor in 1-on-1 sessions. Build a relationship that will
          last you a lifetime!
        </p>
        <div className="pt-10 pb-6 justify-center flex flex-col space-y-3">
          <h3 className="font-header text-mh3 lg:text-h3">Group Sessions</h3>
          <p className="font-body text-body text-left hidden md:block">
            Learn about the career pathway you're interested in through
            specialized group sessions. Gain practical skills through workshops
            and hear from a variety of mentors about their experiences.
          </p>
        </div>
        <StaticImage src="../images/groupSessions.png" alt="mentor-mentee" />
        <p className="font-body text-body text-left pt-5 md:hidden">
          Learn about the career pathway you're interested in through
          specialized group sessions. Gain practical skills through workshops
          and hear from a variety of mentors about their experiences.
        </p>
      </div>
    </div>
  );
};

export default UpcomingSummer;
