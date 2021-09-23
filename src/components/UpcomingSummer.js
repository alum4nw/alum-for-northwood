import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const UpcomingSummer = () => {
  const Subtitle = ({ children }) => {
    return (
      <p className="font-body text-h4 text-blue font-bold px-2">{children}</p>
    );
  };

  return (
    <div className="bg-white text-center flex flex-col items-center justify-center">
      <h1 className="font-header text-h2 pt-16 pb-5">Summer 2022</h1>
      <div className="flex flex-row">
        <Subtitle>3 mentor meetings.</Subtitle>
        <Subtitle>3 group sessions.</Subtitle>
        <Subtitle>6 weeks.</Subtitle>
      </div>
      <div className="flex flex-row pt-12 pb-14 items-center">
        <StaticImage
          src="../images/mentorMeetings.png"
          alt="mentor-mentee"
          height="274"
        />
        <div className="flex flex-col items-center space-y-4 max-w-md">
          <h3 className="font-header text-h3">Mentor Meetings</h3>
          <p className="font-body text-body w-3/4 text-left">
            Receive guidance about high school, college, and beyond from a
            personal mentor in 1-on-1 sessions. Build a relationship that will
            last you a lifetime!
          </p>
        </div>
      </div>
      <div className="flex flex-row pb-14 items-center">
        <div className="flex flex-col items-center space-y-4 max-w-md">
          <h3 className="font-header text-h3">Group Sessions</h3>
          <p className="font-body text-body w-5/6 text-left">
            Learn about the career pathway you’re interested in through
            specialized group sessions. Gain practical skills through workshops
            and hear from a variety of mentors about their experiences.
          </p>
        </div>
        <StaticImage
          src="../images/groupSessions.png"
          alt="mentor-mentee"
          width="433"
          height="274"
        />
      </div>
    </div>
  );
};

export default UpcomingSummer;
