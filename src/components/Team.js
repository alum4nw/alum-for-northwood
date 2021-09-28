import * as React from "react";
import TeamMember from "./TeamMember";

const Team = () => {
  return (
    <div className="bg-white py-16 flex flex-col items-center">
      <h2 className="font-header text-h2 text-center pb-11">Our Team</h2>
      <div className="grid grid-cols-3 gap-y-11 gap-x-16 items-center justify-center w-1/2">
        <TeamMember name="Viren Abhyankar" title="President" />
        <TeamMember name="Viren Abhyankar" title="President" />
        <TeamMember name="Viren Abhyankar" title="President" />
        <TeamMember name="Viren Abhyankar" title="President" />
        <TeamMember name="Viren Abhyankar" title="President" />
        <TeamMember name="Viren Abhyankar" title="President" />
      </div>
    </div>
  );
};

export default Team;
