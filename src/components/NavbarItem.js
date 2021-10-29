import * as React from "react";
import { Link } from "gatsby";

const NavbarItem = ({ pageLink, pageTitle }) => {
  return (
    <li className="md:inline-block md:pr-9 text-center md:text-left">
      <Link
        to={pageLink}
        className="text-black hover:text-white font-body"
        activeClassName="border-b-2 border-black hover:border-white"
      >
        {pageTitle}
      </Link>
    </li>
  );
};

export default NavbarItem;
