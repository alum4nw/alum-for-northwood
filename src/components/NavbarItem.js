import * as React from "react";
import { Link } from "gatsby";

const NavbarItem = (props) => {
  return (
    <li className="sm:inline-block">
      <Link
        to={props.pageLink}
        className="text-black hover:text-blue-dark pr-9 font-body"
        activeclassName="underline"
      >
        {props.pageTitle}
      </Link>
    </li>
  );
};

export default NavbarItem;
