import * as React from "react";
import ButtonDark from "./ButtonDark";
import illustration from "../images/heroIllustration.svg";
import clouds from "../images/clouds.svg";

const Hero = () => {
  return (
    <div class="bg-blue-light">
      <div class="relative">
        <img src={clouds} alt="clouds"></img>
        <div class="absolute inset-0 text-center flex flex-col items-center justify-center">
          <h1 class="font-header font-bold text-6xl pb-6 pt-36">
            ALUM for Northwood
          </h1>
          <h3 class="font-body text-xl pb-14">
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
