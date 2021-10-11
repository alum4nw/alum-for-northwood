import * as React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const Team = ({ data }) => {
  return (
    <div className="bg-white py-10 md:py-16 flex flex-col items-center">
      <h2 className="font-header text-mh2 md:text-h2 text-center md:pb-11">
        Our Team
      </h2>
      <div className="flex flex-col md:grid md:grid-cols-3 md:gap-y-11 md:gap-x-16 items-center justify-center md:w-1/2">
        {data.allContentfulTeamMember.edges.map(({ node, index }) => (
          <div
            className="flex flex-col text-center items-center justify-center pt-8"
            key={index}
          >
            <GatsbyImage
              image={getImage(node.profilePicture)}
              alt={node.name}
            />
            <h4 className="text-mh4 md:text-h4 font-body pt-3 md:pt-5 pb-1">
              {node.name}
            </h4>
            <p className="text-body font-body">{node.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
