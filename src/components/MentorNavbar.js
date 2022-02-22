import * as React from "react";
import * as classnames from "classnames";

const MentorNavbar = ({ bgColor }) => {
  const textHover =
    bgColor === "bg-white" || bgColor === "bg-blue-lightest"
      ? "hover:text-blue"
      : "hover:text-white";
  const borderHover =
    bgColor === "bg-white" || bgColor === "bg-blue-lightest"
      ? "hover:border-blue"
      : "hover:border-white";

  return (
    <li className="md:inline-block md:pr-9 text-center md:text-left">
      <a
        href="https://mentorcenter.us/program/alum-for-northwood"
        className={classnames(
          "text-black font-body flex flex-row justify-center items-center",
          textHover
        )}
        target="_blank"
        rel="noreferrer noopener"
        activeClassName={classnames("border-b-2 border-black", borderHover)}
      >
        Mentors
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-1 ml-1 stroke-current"
        >
          <path
            d="M1 10L10 1M10 1H3.36842M10 1V7.63158"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </li>
  );
};

export default MentorNavbar;
