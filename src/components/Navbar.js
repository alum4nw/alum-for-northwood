import * as React from "react";
import NavbarItem from "./NavbarItem";
import logo from "../images/navbarLogo.svg";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <nav className="bg-blue-light">
      <div className="container mx-auto">
        <div className="sm:flex justify-around h-16">
          {/* site title */}
          <Link to="/">
            <img src={logo} alt="navbar-logo" width="50" className="pt-2"></img>
          </Link>

          {/* nav items */}
          <ul className="text-black sm:self-center text-base border-t sm:border-none">
            <NavbarItem pageLink="/" pageTitle="Home"></NavbarItem>
            <NavbarItem pageLink="/about" pageTitle="About"></NavbarItem>
            <NavbarItem pageLink="/program" pageTitle="Program"></NavbarItem>
            <NavbarItem pageLink="/blog" pageTitle="Blog"></NavbarItem>
            <li className="sm:inline-block">
              <a
                href="https://mentorcenter.us/"
                className="text-black hover:text-blue-dark text-base"
              >
                Mentors
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
