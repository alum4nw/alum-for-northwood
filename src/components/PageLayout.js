import * as React from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

const PageLayout = ({ pageTitle, bgColor, children }) => {
  return (
    <div className="overflow-hidden flex flex-col h-screen">
      <Navbar bgColor={bgColor} />
      <title>{pageTitle}</title>
      <main className="relative flex-1 overflow-y-auto">
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default PageLayout;
