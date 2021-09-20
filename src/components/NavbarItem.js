import * as React from "react";
import { Link } from "gatsby";

const NavbarItem = (props) => {
  return (
    <li className="sm:inline-block pr-9">
      <Link
        to={props.pageLink}
        className="text-black hover:text-white font-body"
        activeClassName="border-b-2 border-black hover:border-white"
      >
        {props.pageTitle}
      </Link>
    </li>
  );
};

export default NavbarItem;
