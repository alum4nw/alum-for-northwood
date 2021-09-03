import * as React from "react";
import Navbar from "./Navbar";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="m-auto font-sans">
      <Navbar />
      <title>{pageTitle}</title>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
