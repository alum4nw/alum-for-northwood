import * as React from "react";

const Footer = () => {
  const FooterLink = ({ href, children }) => {
    return (
      <a
        className="text-blue-dark hover:text-blue"
        href={href}
        target="_blank"
        rel="noreferrer noopener"
      >
        {children}
      </a>
    );
  };

  return (
    <div className="bg-white flex justify-between font-body px-16 py-6 border-t border-black border-opacity-30">
      <div className="text-small">
        <p>ALUM is a registered 501c3 nonprofit corporation</p>
        <FooterLink href="https://www.ca.gov/">
          Articles of Incorporation & Determination Letter
        </FooterLink>
        <p className="pt-4">
          © 2021 Alumni Leaders and Undergraduate Mentors (ALUM)
        </p>
        <p>Not affiliated with Northwood High School</p>
      </div>
      <div className="text-right text-body flex flex-col justify-between py-3">
        <FooterLink href="mailto:contact@alumfornorthwood.org">
          contact@alumfornorthwood.org
        </FooterLink>
        <div className="flex flex-row space-x-10">
          <FooterLink href="https://www.facebook.com/alumfornorthwood">
            Facebook
          </FooterLink>
          <FooterLink href="https://www.instagram.com/alumfornorthwood/">
            Instagram
          </FooterLink>
          <FooterLink href="https://www.linkedin.com/company/alumfornorthwood/">
            LinkedIn
          </FooterLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
