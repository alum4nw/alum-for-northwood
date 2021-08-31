import * as React from "react";
import Navbar from "./Navbar";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="m-auto max-w-lg font-sans">
      <Navbar />
      <title>{pageTitle}</title>
      <main>
        <h1 className="text-purple-700 text-xl">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
