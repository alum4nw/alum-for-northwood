import * as React from "react";
import Button from "./Button";
import School from "../svg/school.svg";
import Clouds from "../svg/clouds.svg";

const Hero = () => {

  //clouds go offscreen; this makes overflow invisible
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    const initial_clouds = document.getElementById('initial-clouds');
    const second_clouds = document.getElementById('second-clouds');
    
    //removes the initial wave of clouds once it's permanently offscreen
    initial_clouds.classList.add('hidden');
    initial_clouds.classList.remove('absolute');

    //makes the second wave of clouds visible
    second_clouds.classList.add('absolute');
    second_clouds.classList.remove('hidden');
  }, 30000);

  return (
    <div className="bg-blue-light pt-8">
        <div className="max-w-lg">
          <Clouds className="absolute lg:w-full animate-initialClouds" id="initial-clouds" />
          <Clouds className="absolute lg:w-full animate-clouds" />
          <Clouds className="hidden lg:w-full animate-clouds" id="second-clouds" />
        </div>
      <div className="relative">
        <Clouds className="invisible lg:w-full" />
        <div className="absolute inset-0 text-center flex flex-col items-center justify-center pt-32 md:pt-36 my-[1422px]">
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
              description="Register for Beta Testing"
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
