import * as React from "react";
import Button from "./Button";
import School from "../svg/school.svg";
import Clouds from "../svg/clouds.svg";

const Hero = () => {
  return (
    <div className="bg-blue-light pt-8">
      <div className="relative">
        <div className="flex flex-col items-center">
          <Clouds className="lg:w-full" />
        </div>
        <div className="absolute inset-0 text-center flex flex-col items-center justify-center pt-32 md:pt-36">
          <h1 className="font-header font-bold text-sh1 px-3 md:text-th1 md:font-bold lg:text-h1 pb-6 leading-tight md:leading-none">
            ALUM for Northwood
          </h1>
          <h3 className="font-body text-mh4 lg:text-h4 pb-7 md:pb-14 px-11 pt-8 md:pt-0">
            Building a community through alumni mentorship.
          </h3>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd-wcbL7hizju4D1MO2jHZd9X9iVPdV2-WhfHgCLeEDSyuj9Q/viewform?usp=sf_link"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button
              padding="py-4 px-6"
              textSize="text-mh4 lg:text-h4"
              description="Register for Beta Testing!"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <School />
      </div>
    </div>
  );
};

export default Hero;
