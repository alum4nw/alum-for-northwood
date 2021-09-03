import * as React from "react";
import illustration from "../images/heroIllustration.svg";

const Hero = () => {
  return (
    <div className="bg-blue-light">
      <img src={illustration} alt="hero-illustration"></img>
      <h1>ALUM for Northwood</h1>
      <h3>Short catchphrase about this long</h3>
      <button>Register now!</button>
    </div>
  );
};

export default Hero;
