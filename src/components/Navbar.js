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
import DonateButton from "./DonateButton";
import MentorNavbar from "./MentorNavbar";

const Navbar = ({ bgColor }) => {
  const [isHamActive, setIsHamActive] = useState(false);
  const toggleClass = () => {
    setIsHamActive((prev) => !prev);
  };

  return (
    <nav className={classnames(bgColor, "py-2 pr-5 pl-6 md:px-10 lg:px-16")}>
      <div className="flex justify-between">
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
          onClick={toggleClass}
        >
          <Hamburger />
          <h4 className="font-body text-mh4 mb-1">Menu</h4>
        </button>
        <button
          className={classnames("flex flex-row items-center md:hidden", {
            hidden: !isHamActive,
          })}
          onClick={toggleClass}
        >
          <Close />
        </button>
        <ul className="text-black self-center text-base border-t border-none md:inline-block hidden list-none">
          <NavbarItem pageLink="/" pageTitle="Home" bgColor={bgColor} />
          <NavbarItem pageLink="/about" pageTitle="About" bgColor={bgColor} />
          <NavbarItem
            pageLink="/program"
            pageTitle="Program"
            bgColor={bgColor}
          />
          <NavbarItem pageLink="/blog" pageTitle="Blog" bgColor={bgColor} />
          <MentorNavbar bgColor={bgColor} />
          <li className="md:inline-block md:pr-3">
            <DonateButton bgColor={bgColor} />
          </li>
          <li className="md:inline-block">
            <a
              href={process.env.REGISTER_CTA_URL}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button
                padding="py-2 px-5"
                textSize="text-body"
                description="Register"
              />
            </a>
          </li>
        </ul>
      </div>
      <div
        className={classnames(
          bgColor,
          "flex flex-col items-center md:hidden pt-8 h-screen",
          {
            hidden: !isHamActive,
            block: isHamActive,
          }
        )}
      >
        <ul className="text-black text-mh4 space-y-10 border-t border-none pb-14 list-none text-center">
          <NavbarItem pageLink="/" pageTitle="Home" bgColor={bgColor} />
          <NavbarItem pageLink="/about" pageTitle="About" bgColor={bgColor} />
          <NavbarItem
            pageLink="/program"
            pageTitle="Program"
            bgColor={bgColor}
          />
          <NavbarItem pageLink="/blog" pageTitle="Blog" bgColor={bgColor} />
          <MentorNavbar bgColor={bgColor} />
          <li>
            <DonateButton bgColor={bgColor} />
          </li>
          <li>
            <a
              href={process.env.REGISTER_CTA_URL}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button
                padding="py-3 px-5"
                textSize="text-mh4"
                description="Register"
              />
            </a>
          </li>
        </ul>
        <WolfWink className="h-32 w-36" />
      </div>
    </nav>
  );
};

export default Navbar;
