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
    <div className="bg-white grid grid-cols-1 md:justify-between font-body border-t border-black border-opacity-30 pt-6 pb-9">
      <div className="text-center md:text-right text-body md:justify-between md:py-3 space-y-1">
        <FooterLink href="mailto:contact@alumfornorthwood.org">
          contact@alumfornorthwood.org
        </FooterLink>
        <div className="space-x-5 md:space-x-10">
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
      <div className="text-small text-center px-12 pt-5">
        <p>ALUM is a registered 501c3 nonprofit corporation</p>
        <FooterLink href="https://www.ca.gov/">
          Articles of Incorporation & Determination Letter
        </FooterLink>
        <p className="py-4">
          © 2021 Alumni Leaders and
          <br className="md:hidden" />
          Undergraduate Mentors (ALUM)
        </p>
        <p>Not affiliated with Northwood High School</p>
      </div>
    </div>
  );
};

export default Footer;
