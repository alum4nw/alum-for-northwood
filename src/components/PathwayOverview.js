import * as React from "react";
import Button from "./Button.js";

const PathwayOverview = ({ data }) => {
  return (
    <div className="flex flex-col bg-white justify-center items-center pb-11 md:pb-20 pt-10">
      <div className="space-y-12 pb-11">
        {data.allContentfulPathway.edges.map(({ node, index }) => (
          <div
            className="grid grid-cols-1 md:grid-cols-2 md:w-7/12 place-items-center"
            key={index}
          >
            <div className="w-1/2 md:w-1/4 flex justify-center pb-7">
              <img
                src={node.photo.file.url}
                alt={node.name}
                className="object-contain"
              />
            </div>
            <div className="w-4/5 md:w-2/3">
              <h4 className="text-center md:text-left md:text-h4 text-mh4 font-body pb-3">
                {node.name}
              </h4>
              <div
                className="text-body font-body"
                dangerouslySetInnerHTML={{
                  __html: node.description.childMarkdownRemark.html,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <Button
        padding="py-3 px-5"
        textSize="text-body"
        description="Receive more information"
      />
      <p className="text-center text-small md:text-body pt-6 font-body w-2/3">
        Interested in a pathway we don’t have yet?
        <br className="md:hidden" /> Tell us at contact@alumfornorthwood.org :)
      </p>
    </div>
  );
};

export default PathwayOverview;
