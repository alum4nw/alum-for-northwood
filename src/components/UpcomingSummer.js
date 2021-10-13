import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const UpcomingSummer = () => {
  const Subtitle = ({ children }) => {
    return (
      <p className="font-body text-mh4 md:text-h4 text-blue font-bold px-2">
        {children}
      </p>
    );
  };

  return (
    <div className="bg-white text-center flex flex-col items-center justify-center py-10 md:py-16 ">
      <h1 className="font-header text-mh2 md:text-h2 pb-4">Summer 2022</h1>
      <div className="space-y-10">
        <div className="flex flex-col md:flex-row">
          <Subtitle>3 mentor meetings.</Subtitle>
          <Subtitle>3 group sessions.</Subtitle>
          <Subtitle>6 weeks.</Subtitle>
        </div>
        <div className="grid grid-cols-1 space-y-5 place-items-center">
          <h3 className="font-header text-mh3 md:text-h3">Mentor Meetings</h3>
          <StaticImage
            src="../images/mentorMeetings.png"
            alt="mentor-mentee"
            className="w-3/4"
          />
          <p className="font-body text-body w-4/5 text-left">
            Receive guidance about high school, college, and beyond from a
            personal mentor in 1-on-1 sessions. Build a relationship that will
            last you a lifetime!
          </p>
        </div>
        <div className="grid grid-cols-1 space-y-5 place-items-center">
          <h3 className="font-header text-mh3 md:text-h3">Group Sessions</h3>
          <StaticImage
            src="../images/groupSessions.png"
            alt="mentor-mentee"
            className="w-3/4"
          />
          <p className="font-body text-body w-4/5 text-left">
            Learn about the career pathway you’re interested in through
            specialized group sessions. Gain practical skills through workshops
            and hear from a variety of mentors about their experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSummer;
