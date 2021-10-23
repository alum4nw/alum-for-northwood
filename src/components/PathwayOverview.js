import * as React from "react";
import Button from "./Button.js";

const PathwayOverview = ({ data }) => {
  return (
    <div className="flex flex-col bg-white justify-center items-center pb-11 lg:py-20 pt-10">
      <div className="space-y-14 lg:space-y-20 pb-11 md:mr-36 lg:mr-48">
        {data.allContentfulPathway.edges.map(({ node, index }) => (
          <div
            className="grid grid-cols-1 md:grid-cols-2 md:gap-y-14 place-items-center"
            key={index}
          >
            <div className="w-48 md:ml-20 md:w-auto md:h-40 lg:h-60 flex justify-center pb-7 md:pb-0">
              <img src={node.photo.file.url} alt={node.name} />
            </div>
            <div className="px-8 sm:max-w-md md:w-auto lg:max-w-lg">
              <h4 className="text-center md:text-left lg:text-h4 text-mh4 font-medium font-body pb-3">
                {node.name}
              </h4>
              <div
                className="text-body font-body md:text-tbody lg:text-body"
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
      <p className="text-center text-small pt-6 md:pt-11 font-body md:text-tbody lg:text-body w-2/3 md:w-auto">
        Interested in a pathway we don’t have yet?
        <br className="md:hidden" /> Tell us at contact@alumfornorthwood.org :)
      </p>
    </div>
  );
};

export default PathwayOverview;
