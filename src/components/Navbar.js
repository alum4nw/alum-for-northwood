import * as React from "react";
import NavbarItem from "./NavbarItem";
import logo from "../images/navbarLogo.svg";
import arrow from "../images/mentorArrow.svg";
import { Link } from "gatsby";
import ButtonLight from "./ButtonLight";

const Navbar = () => {
  return (
    <nav class="bg-blue-light">
      <div class="container w-full">
        <div class="flex justify-between h-16">
          {/* site title */}
          <Link to="/">
            <img
              src={logo}
              alt="navbar-logo"
              width="50"
              class="pt-2 ml-14"
            ></img>
          </Link>

          {/* nav items */}
          <ul class="text-black sm:self-center text-base border-t sm:border-none">
            <NavbarItem pageLink="/" pageTitle="Home"></NavbarItem>
            <NavbarItem pageLink="/about" pageTitle="About"></NavbarItem>
            <NavbarItem pageLink="/program" pageTitle="Program"></NavbarItem>
            <NavbarItem pageLink="/blog" pageTitle="Blog"></NavbarItem>
            <li class="sm:inline-block">
              <a
                href="https://mentorcenter.us/"
                class="text-black hover:text-blue-dark font-body text-base flex flex-row items-center justify-center"
              >
                Mentors
                <img src={arrow} alt="mentor-arrow" class="p-2"></img>
              </a>
            </li>
            <li class="sm:inline-block pl-7">
              <ButtonLight>Register</ButtonLight>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
