import * as React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <Navbar />
      <title>{pageTitle}</title>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
