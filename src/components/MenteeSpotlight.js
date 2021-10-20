import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import PencilPaperclip from "../svg/pencilPaperclip.svg";
import Gavel from "../svg/gavel.svg";

const MenteeSpotlight = () => {
  return (
    <div className="bg-blue-lightest flex flex-col py-10 md:pb-11 lg:py-16 justify-center items-center">
      <h2 className="text-mh2 lg:text-h2 font-header lg:pb-11">
        Meet Mentee Mia Lee!
      </h2>
      <div className="lg:py-11 flex flex-row justify-center items-center h-72">
        <PencilPaperclip className="hidden md:block md:w-1/6 md:mr-11" />
        <div className="w-60 lg:w-80">
          <StaticImage
            src="../images/menteeSpotlight.png"
            alt="mentee-spotlight"
          />
        </div>
        <Gavel className="hidden md:block md:w-1/6 md:ml-11" />
      </div>
      <p className="font-body text-body w-4/5 max-w-xs md:w-auto md:max-w-sm lg:max-w-lg pt-5 lg:pt-10">
        "I initially joined ALUM because it seemed like an interesting
        organization, and I wished to garner as much support as possible while
        entering high school. I never expected for it to be such a wholesome
        community, and I am extremely grateful for my mentor Fiona and all she
        has taught me!"
      </p>
    </div>
  );
};

export default MenteeSpotlight;
