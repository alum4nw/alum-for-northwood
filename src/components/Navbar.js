import * as React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex list-none pl-0">
        <li className="pr-8">
          <Link to="/" className="text-black">
            Home
          </Link>
        </li>
        <li className="pr-8">
          <Link to="/about" className="text-black">
            About
          </Link>
        </li>
        <li className="pr-8">
          <Link to="/program" className="text-black">
            Program
          </Link>
        </li>
        <li className="pr-8">
          <Link to="/blog" className="text-black">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
