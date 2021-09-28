import * as React from "react";
import profile from "../images/profilePhoto.png";

const TeamMember = ({ name, title }) => {
  return (
    <div className="flex flex-col text-center items-center justify-center">
      <img src={profile} alt="profile" width="200" />
      <h4 className="text-h4 font-body pt-5 pb-2">{name}</h4>
      <p className="text-body font-body">{title}</p>
    </div>
  );
};

export default TeamMember;
