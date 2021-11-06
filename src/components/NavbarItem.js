import * as React from "react";
import { Link } from "gatsby";
import * as classnames from "classnames";

const NavbarItem = ({ pageLink, pageTitle, bgColor }) => {
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
      <Link
        to={pageLink}
        className={classnames("text-black font-body", textHover)}
        activeClassName={classnames("border-b-2 border-black", borderHover)}
      >
        {pageTitle}
      </Link>
    </li>
  );
};

export default NavbarItem;
