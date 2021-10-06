import * as React from "react";
import Button from "./Button";
import Illustration from "../svg/heroIllustration.svg";
import Clouds from "../svg/clouds.svg";

const Hero = () => {
  return (
    <div className="bg-blue-light">
      <div className="relative">
        <div className="flex flex-col items-center">
          <Clouds className="xl:w-full" />
        </div>
        <div className="absolute inset-0 text-center flex flex-col items-center justify-center">
          <h1 className="font-header font-bold text-h1 pb-6 pt-36">
            ALUM for Northwood
          </h1>
          <h3 className="font-body text-h4 pb-14">
            Building a community through alumni mentorship.
          </h3>
          <Button
            padding="py-4 px-6"
            textSize="text-h4"
            description="Find a mentor!"
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Illustration className="xl:w-full" />
      </div>
    </div>
  );
};

export default Hero;
