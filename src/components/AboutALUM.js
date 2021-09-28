import * as React from "react";
import { Link } from "gatsby";
import ArrowIcon from "../svg/arrowIcon.svg";
import LeftPole from "../svg/leftPole.svg";
import RightPole from "../svg/rightPole.svg";

const AboutALUM = () => {
  return (
    <div className="bg-blue-lightest pt-16">
      <h2 className="font-header text-h2 text-center">About ALUM</h2>
      <div className="flex flex-row items-center justify-center">
        <LeftPole />
        <div className="w-1/2 px-14 space-y-6 mb-14">
          <p className="font-body text-body">
            Hey there! We’re ALUM. In March 2020, we were just a few college
            students that had to pack up our dorm rooms and head home to Irvine
            for the rest of the year. We started catching up with each other on
            Zoom, talking about our college experiences and reminiscing over
            high school memories. There were similarities across the board:
            everyone had a difficult time adjusting to college life at the
            beginning. We discovered that everyone had either been a part of a
            mentorship program on campus or had a personal mentor in their
            lives. Someone said out loud what everyone was thinking: "I wish we
            had something like that in high school."
          </p>
          <p className="font-body text-body">
            Over the next few weeks, we had conversations with people we hadn’t
            seen in years and pitched the idea of a mentorship program that
            connected Northwood High School students with alumni: from
            Northwood, for Northwood. Daily brainstorming sessions turned into
            fervent marketing discussions as the months rolled on and on April
            19, ALUM was born! We hosted our first ever summer program that year
            and haven’t looked back since.
          </p>
          <div className="flex flex-row items-center justify-center">
            <ArrowIcon />
            <Link
              className="font-body font-bold pl-2 text-blue-dark hover:text-blue"
              to="/blog"
            >
              Our first program
            </Link>
          </div>
          <p className="font-body text-body">
            ALUM is now a registered 501c3 non-profit organization, but it means
            much more than that. To us, it’s a community of amazing people
            united by our shared experiences. Go T-wolves!
          </p>
        </div>
        <RightPole />
      </div>
    </div>
  );
};

export default AboutALUM;
