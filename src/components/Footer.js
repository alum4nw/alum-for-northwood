import * as React from "react";

const Footer = () => {
  return (
    <div className="bg-white flex justify-between font-body px-16">
      <div className="text-small py-6">
        <p>ALUM is a registered 501c3 nonprofit corporation</p>
        <p className="pb-4 text-blue-dark">
          Articles of Incorporation & Determination Letter
        </p>
        <p>© 2021 Alumni Leaders and Undergraduate Mentors (ALUM)</p>
        <p>Not affiliated with Northwood High School</p>
      </div>
      <div className="text-right text-body py-8">
        <p className="pb-2 text-blue-dark">contact@alumfornorthwood.org</p>
        <div className="flex flex-row space-x-10">
          <a className="text-blue-dark">Facebook</a>
          <a className="text-blue-dark">Instagram</a>
          <a className="text-blue-dark">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
