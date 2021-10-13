import * as React from "react";
import Button from "./Button";
import School from "../svg/school.svg";
import Clouds from "../svg/clouds.svg";

const Hero = () => {
  return (
    <div className="bg-blue-light">
      <div className="relative">
        <div className="flex flex-col items-center">
          <Clouds className="w-full" />
        </div>
        <div className="absolute inset-0 text-center flex flex-col items-center justify-center">
          <h1 className="font-header font-bold text-sh1 px-3 md:text-h1 pb-6 pt-36">
            ALUM for Northwood
          </h1>
          <h3 className="font-body text-mh4 md:text-h4 pb-7 md:pb-14 px-11">
            Building a community through alumni mentorship.
          </h3>
          <Button
            padding="py-4 px-6"
            textSize="text-mh4 md:text-h4"
            description="Find a mentor!"
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <School />
      </div>
    </div>
  );
};

export default Hero;
