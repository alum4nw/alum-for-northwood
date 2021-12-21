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
    <div className="bg-white grid grid-cols-1 md:grid-cols-2 font-body border-t border-black border-opacity-30 pt-6 pb-9 md:py-4 lg:py-6 md:px-5 lg:px-16">
      <div className="text-center md:text-right flex flex-col justify-between md:order-last text-body md:py-2 lg:py-3 space-y-1 md:space-y-2">
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
      <div className="text-small text-center px-12 md:px-0 md:pt-0 md:text-left pt-5">
        <p>ALUM is a registered 501c3 nonprofit corporation</p>
        <p>
          <FooterLink href="https://drive.google.com/file/d/1AYszQlF4WemArFsdgNVlnGgQfSkZKNbj/view?usp=sharing">
            Articles of Incorporation
          </FooterLink>
          &nbsp;&&nbsp;
          <FooterLink href="https://drive.google.com/file/d/14B1-5vLTzOyDuzBf3Tar85jLt7n3iEcw/view?usp=sharing">
            Determination Letter
          </FooterLink>
        </p>
        <p className="py-4 md:pt-2 md:pb-0 lg:pt-4">
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
