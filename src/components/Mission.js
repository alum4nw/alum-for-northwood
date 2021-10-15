import * as React from "react";

const Mission = () => {
  return (
    <div className="bg-white text-center flex flex-col items-center justify-center pt-10 pb-11 lg:py-16">
      <h1 className="font-header text-mh2 lg:text-h2 pb-4">Our Mission</h1>
      <p className="font-body text-left text-body lg:text-h4 px-9 md:w-3/4">
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
