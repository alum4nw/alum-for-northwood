import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import PencilPaperclip from "../svg/pencilPaperclip.svg";
import Gavel from "../svg/gavel.svg";

const MenteeSpotlight = () => {
  return (
    <div className="bg-blue-lightest flex flex-col py-16 justify-center items-center">
      <h2 className="text-h2 font-header">Meet Mentee Mia Lee!</h2>
      <div className="py-11 flex flex-row justify-center items-center ">
        <PencilPaperclip className="w-1/12 h-2/3" />
        <div className="px-11 w-1/4">
          <StaticImage
            src="../images/menteeSpotlight.png"
            alt="mentee-spotlight"
          />
        </div>
        <Gavel className="w-1/12 h-2/3" />
      </div>
      <p className="font-body text-body w-1/3">
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
