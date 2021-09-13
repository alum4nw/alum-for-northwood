import * as React from "react";

const ButtonLight = ({ children }) => {
  return (
    <button class="bg-white font-body py-2 px-4 rounded-lg text-base">
      {children}
    </button>
  );
};

export default ButtonLight;
