import * as React from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

const PageLayout = ({ pageTitle, bgColor, children }) => {
  return (
    <div className="overflow-hidden flex flex-col">
      <title>{pageTitle}</title>
      <Navbar bgColor={bgColor} className="sticky top-0 z-50" />
      <main className="relative flex-1 overflow-y-auto overflow-x-hidden">
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default PageLayout;
