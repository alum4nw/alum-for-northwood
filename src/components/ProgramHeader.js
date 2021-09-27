import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import ArrowIcon from "../svg/arrowIcon.svg";

const ProgramHeader = () => {
  return (
    <div className="bg-blue-lightest py-16">
      <h2 className="font-header text-h2 text-center">Program</h2>
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col w-5/12 pr-16">
          <h3 className="text-h3 font-header pb-4">Logistics</h3>
          <p className="font-body text-body pb-6">
            Our mentorship program runs for 6 weeks during the summer. Before
            the program starts, each mentee and mentor will be placed in a group
            that reflects the career pathway they are interested in pursuing:
            engineering, pre-health, or business. During the program, each
            mentee will have three 1-on-1 sessions with their mentor and three
            group events with everyone in their pathway.
          </p>
          <div className="flex flex-row items-center pb-9">
            <ArrowIcon />
            <Link
              className="font-body font-bold pl-2 text-blue-dark hover:text-blue"
              to="/blog"
            >
              Our first program
            </Link>
          </div>
          <h3 className="text-h3 font-header pb-4">Goal</h3>
          <p className="font-body text-body">
            Our goal is for mentees to build personal and professional
            connections to alumni who come from their community and go on to
            become mentors for life.
          </p>
        </div>
        <StaticImage src="../images/pathwaysWolf.png" className="w-3/10" />
      </div>
    </div>
  );
};

export default ProgramHeader;
