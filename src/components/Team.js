import * as React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const Team = ({ data }) => {
  return (
    <div className="bg-white py-16 flex flex-col items-center">
      <h2 className="font-header text-h2 text-center pb-11">Our Team</h2>
      <div className="grid grid-cols-3 gap-y-11 gap-x-16 items-center justify-center w-1/2">
        {data.allContentfulTeamMember.edges.map(({ node, index }) => (
          <div
            className="flex flex-col text-center items-center justify-center"
            key={index}
          >
            <GatsbyImage
              image={getImage(node.profilePicture)}
              alt={node.name}
            />
            <h4 className="text-h4 font-body pt-5 pb-2">{node.name}</h4>
            <p className="text-body font-body">{node.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
