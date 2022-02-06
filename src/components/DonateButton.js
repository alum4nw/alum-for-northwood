import * as React from "react";
import * as classnames from "classnames";

const DonateButton = ({ bgColor }) => {
  const buttonBg = bgColor === "bg-white" ? "bg-blue-lightest" : "bg-white";
  return (
    <a
      href="https://givebutter.com/donate-alum"
      target="_blank"
      rel="noreferrer noopener"
    >
      <button
        className={classnames(
          "py-3 px-5 text-black rounded-lg font-body text-mh4 md:py-2 md:text-body",
          "hover:bg-blue hover:text-white hover:-translate-x-1 hover:-translate-y-1 hover:shadow-custom transform",
          buttonBg
        )}
      >
        Donate
      </button>
    </a>
  );
};

export default DonateButton;
