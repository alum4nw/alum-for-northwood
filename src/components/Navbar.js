import * as React from "react";
import NavbarItem from "./NavbarItem";
import Logo from "../images/navbarLogo.svg";
import MentorArrow from "../images/mentorArrow.svg";
import { Link } from "gatsby";
import ButtonDark from "./ButtonDark";

const Navbar = () => {
  return (
    <nav className="bg-blue-light">
      <div className="px-14">
        <div className="flex justify-between h-16">
          {/* site title */}
          <Link to="/" className="group">
            <Logo className="pt-2 h-14" />
          </Link>

          {/* nav items */}
          <ul className="text-black sm:self-center text-base border-t sm:border-none">
            <NavbarItem pageLink="/" pageTitle="Home"></NavbarItem>
            <NavbarItem pageLink="/about" pageTitle="About"></NavbarItem>
            <NavbarItem pageLink="/program" pageTitle="Program"></NavbarItem>
            <NavbarItem pageLink="/blog" pageTitle="Blog"></NavbarItem>
            <li className="sm:inline-block group">
              <a
                href="https://mentorcenter.us/"
                className="text-black group-hover:text-white font-body text-base flex flex-row items-center justify-center"
              >
                Mentors
                <MentorArrow className="ml-1 mt-1" />
              </a>
            </li>
            <li className="sm:inline-block pl-9">
              <ButtonDark
                padding="py-2 px-5"
                textSize="text-body"
                description="Register"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
