import * as React from "react";
import { Link } from "gatsby";
import ArrowIcon from "../svg/arrowIcon.svg";
import PathwaysWolf from "../svg/pathwaysWolf.svg";

const ProgramHeader = () => {
  return (
    <div className="bg-blue-lightest py-8 md:pt-10 md:pb-11 lg:py-16">
      <h2 className="font-header text-mh2 md:text-th1 lg:text-h1 md:font-bold text-center">
        Program
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
        <PathwaysWolf className="w-3/4 py-8" />
        <div className="flex flex-col w-4/5 md:w-5/12 md:pr-16">
          <h3 className="text-center md:text-left md:text-h3 text-mh3 font-header pb-4">
            Logistics
          </h3>
          <p className="font-body text-body pb-6">
            Our mentorship program runs for 6 weeks during the summer. Before
            the program starts, each mentee and mentor will be placed in a group
            that reflects the career pathway they are interested in pursuing:
            engineering, pre-health, or business. During the program, each
            mentee will have three 1-on-1 sessions with their mentor and three
            group events with everyone in their pathway.
          </p>
          <div className="flex flex-row justify-center items-center pb-9">
            <ArrowIcon />
            <Link
              className="font-body font-bold pl-2 text-blue-dark hover:text-blue"
              to="/blog"
            >
              Our first program
            </Link>
          </div>
          <h3 className="text-center md:text-left md:text-h3 text-mh3 font-header pb-4">
            Goal
          </h3>
          <p className="font-body text-body">
            Our goal is for mentees to build personal and professional
            connections to alumni who come from their community and go on to
            become mentors for life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgramHeader;
