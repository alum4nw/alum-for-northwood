import * as React from "react";
import Pathway from "../components/Pathway.js";
import Button from "./Button.js";

const PathwayOverview = () => {
  return (
    <div className="flex flex-col bg-white justify-center items-center pb-20 pt-10">
      <Pathway />
      <Pathway />
      <Pathway />
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
