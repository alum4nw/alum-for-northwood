import * as React from "react";
import NavbarItem from "./NavbarItem";
import logo from "../images/navbarLogo.svg";
import arrow from "../images/mentorArrow.svg";
import { Link } from "gatsby";
import ButtonLight from "./ButtonLight";

const Navbar = () => {
  return (
    <nav className="bg-blue-light">
      <div className="px-14">
        <div className="flex justify-between h-16">
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
                className="text-black hover:text-blue-dark font-body text-base flex flex-row items-center justify-center"
              >
                Mentors
                <img
                  src={arrow}
                  alt="mentor-arrow"
                  className="p-2 hover:text-blue-dark"
                ></img>
              </a>
            </li>
            <li className="sm:inline-block pl-7">
              <ButtonLight>Register</ButtonLight>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
