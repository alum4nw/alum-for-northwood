import * as React from "react";
import ButtonDark from "./ButtonDark";
import illustration from "../images/heroIllustration.svg";
import clouds from "../images/clouds.svg";

const Hero = () => {
  return (
    <div className="bg-blue-light">
      <div className="relative">
        <img src={clouds} alt="clouds"></img>
        <div className="absolute inset-0 text-center flex flex-col items-center justify-center">
          <h1 className="font-header font-bold text-h1 pb-6 pt-36 ">
            ALUM for Northwood
          </h1>
          <h3 className="font-body text-h4 pb-14">
            Short catchphrase about this long
          </h3>
          <ButtonDark>Register now!</ButtonDark>
        </div>
      </div>
      <img src={illustration} alt="hero-illustration"></img>
    </div>
  );
};

export default Hero;
