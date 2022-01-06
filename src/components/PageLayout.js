import * as React from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
import { useEffect, useState } from "react";
import * as classnames from "classnames";
import favicon from "../images/favicon.ico";
import Helmet from "react-helmet";

const PageLayout = ({ pageTitle, bgColor, children }) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const changeNavColor = () => {
    if (window.scrollY >= 1) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavColor, { passive: true });
    return () => {
      window.removeEventListener("scroll", changeNavColor);
    };
  }, []);

  return (
    <div className="flex flex-col" id="root">
      <Helmet>
        <title>{pageTitle}</title>
        <link rel="icon" href={favicon} />
      </Helmet>
      <div
        className={classnames(
          "fixed z-30 w-full border-black border-opacity-30",
          {
            "border-b": isScrolling,
          }
        )}
      >
        <Navbar bgColor={isScrolling ? "bg-white" : bgColor} />
      </div>
      <main className="overflow-x-hidden pt-16">{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
