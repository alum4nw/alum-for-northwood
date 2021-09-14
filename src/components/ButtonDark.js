import * as React from "react";

const ButtonDark = ({ children }) => {
  return (
    <button className="bg-blue-dark hover:bg-blue text-white font-body py-4 px-6 rounded-lg text-h4">
      {children}
    </button>
  );
};

export default ButtonDark;
