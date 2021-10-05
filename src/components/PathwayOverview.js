import * as React from "react";
import Button from "./Button.js";

const PathwayOverview = ({ data }) => {
  return (
    <div className="flex flex-col bg-white justify-center items-center pb-20 pt-10">
      {data.allContentfulPathway.edges.map(({ node, index }) => (
        <div
          className="flex flex-row w-7/12 justify-center items-center py-10"
          key={index}
        >
          <div className="w-1/4 flex justify-center">
            <img
              src={node.photo.file.url}
              alt={node.name}
              className="object-contain"
            />
          </div>
          <div className="w-2/3 pl-20">
            <h4 className="text-h4 font-body pb-3">{node.name}</h4>
            <div
              className="text-body font-body"
              dangerouslySetInnerHTML={{
                __html: node.description.childMarkdownRemark.html,
              }}
            ></div>
          </div>
        </div>
      ))}
      <Button
        padding="py-3 px-5"
        textSize="text-body"
        description="Receive more information"
      />
      <p className="text-body font-body pt-11">
        Interested in a pathway we don’t have yet? Tell us at
        contact@alumfornorthwood.org :)
      </p>
    </div>
  );
};

export default PathwayOverview;
