import * as React from "react";

const Mission = () => {
  return (
    <div className="bg-white text-center flex flex-col items-center justify-center">
      <h1 className="font-header text-h2 pt-16 pb-5">Our Mission</h1>
      <p className="font-body text-left text-h4 w-1/2 pb-16">
        At ALUM, we strive to <span className="font-bold">bridge the gap</span>{" "}
        between high school students and alumni through mentorship and{" "}
        <span className="font-bold">build a community</span> around shared
        experiences. We believe{" "}
        <span className="font-bold">every student should have a mentor</span>{" "}
        who knows what life is like at Northwood because they’ve lived it.
      </p>
    </div>
  );
};

export default Mission;
