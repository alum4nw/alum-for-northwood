import * as React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const Team = ({ data }) => {
  return (
    <div className="bg-white pt-10 pb-11 lg:py-16 flex flex-col items-center">
      <h2 className="font-header text-mh2 lg:text-h2 text-center">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-y-11 md:gap-x-16 items-center justify-center md:px-20">
        {data.allContentfulTeamMember.edges.map(({ node, index }) => (
          <div
            className="flex flex-col text-center items-center justify-center pt-8"
            key={index}
          >
            <GatsbyImage
              image={getImage(node.profilePicture)}
              alt={node.name}
              className="md:w-40 lg:w-auto"
            />
            <h4 className="text-mh4 lg:text-h4 font-medium font-body pt-3 md:pt-5 pb-1">
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
