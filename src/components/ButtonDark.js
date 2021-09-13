import * as React from "react";

const ButtonDark = ({ children }) => {
  return (
    <button class="bg-blue-dark hover:bg-blue text-white font-body py-4 px-6 rounded-lg text-xl">
      {children}
    </button>
  );
};

export default ButtonDark;
