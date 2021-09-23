import * as React from "react";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

const PageLayout = ({ pageTitle, children }) => {
  return (
    <div>
      <Navbar />
      <title>{pageTitle}</title>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
