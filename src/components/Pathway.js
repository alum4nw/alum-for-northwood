import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Pathway = () => {
  return (
    <div className="flex flex-row w-2/3 justify-center items-center py-10">
      <StaticImage src="../images/engPathway.png" className="w-1/4" />
      <div className="w-2/3 pl-28">
        <h4 className="text-h4 font-body pb-3">Engineering Pathway</h4>
        <p className="text-body font-body">
          Interested in designing the next self-driving car or building the next
          iPhone? This is the pathway for you. Learn about what engineering is
          like in college and in industry through guest speakers and leave the
          program with tangible skills in software development.
        </p>
      </div>
    </div>
  );
};

export default Pathway;
