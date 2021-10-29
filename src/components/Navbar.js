import * as React from "react";
import NavbarItem from "./NavbarItem";
import Logo from "../svg/navbarLogo.svg";
import Hamburger from "../svg/hamburger.svg";
import WolfWink from "../svg/wolfWink.svg";
import Close from "../svg/close.svg";
import { Link } from "gatsby";
import Button from "./Button";
import { useState } from "react";
import * as classnames from "classnames";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const Navbar = () => {
  const [isHamActive, setIsHamActive] = useState("false");
  const ToggleClass = () => {
    setIsHamActive(!isHamActive);
  };

  isHamActive ? disableBodyScroll(document) : enableBodyScroll(document);

  return (
    <nav
      className={classnames("md:bg-blue-light", {
        "bg-blue-lightest": isHamActive,
        "bg-blue-light": !isHamActive,
        "overscroll-y-none": isHamActive,
      })}
    >
      <div className="pt-2 md:px-14">
        <div className="pr-5 pl-6 flex justify-between h-16">
          <Link to="/" className="group">
            <Logo className="h-14" />
          </Link>
          <button
            className={classnames(
              "flex flex-row items-center space-x-2 md:hidden",
              {
                hidden: isHamActive,
              }
            )}
            onClick={ToggleClass}
          >
            <Hamburger />
            <h4 className="font-body text-mh4 mb-1">Menu</h4>
          </button>
          <button
            className={classnames(
              "flex flex-row items-center space-x-2 md:hidden",
              {
                hidden: !isHamActive,
              }
            )}
            onClick={ToggleClass}
          >
            <Close />
          </button>
          <ul className="text-black self-center text-base border-t border-none md:inline-block hidden">
            <NavbarItem pageLink="/" pageTitle="Home"></NavbarItem>
            <NavbarItem pageLink="/about" pageTitle="About"></NavbarItem>
            <NavbarItem pageLink="/program" pageTitle="Program"></NavbarItem>
            <NavbarItem pageLink="/blog" pageTitle="Blog"></NavbarItem>
            <li className="md:inline-block">
              <Button
                padding="py-2 px-5"
                textSize="text-body"
                description="Find a mentor"
              />
            </li>
          </ul>
        </div>
        <div
          className={classnames(
            "flex flex-col items-center md:hidden h-screen pt-8 bg-blue-lightest",
            {
              hidden: !isHamActive,
            }
          )}
        >
          <ul className="text-black text-mh4 space-y-10 border-t border-none pb-14">
            <NavbarItem pageLink="/" pageTitle="Home"></NavbarItem>
            <NavbarItem pageLink="/about" pageTitle="About"></NavbarItem>
            <NavbarItem pageLink="/program" pageTitle="Program"></NavbarItem>
            <NavbarItem pageLink="/blog" pageTitle="Blog"></NavbarItem>
            <li>
              <Button
                padding="py-3 px-5"
                textSize="text-mh4"
                description="Find a mentor!"
              />
            </li>
          </ul>
          <WolfWink />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
