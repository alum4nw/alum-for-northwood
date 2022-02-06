import * as React from "react";
import * as classnames from "classnames";

const Button = ({ padding, textSize, description, isModal = false }) => {
  const classStr = classnames(
    "bg-blue-dark text-white font-body rounded-lg hover:bg-blue",
    padding,
    textSize,
    {
      "md:rounded-l-none md:rounded-r-xl": isModal,
      "hover:-translate-x-1 hover:-translate-y-1 hover:shadow-custom transform":
        !isModal,
    }
  );
  return <button className={classStr}>{description}</button>;
};

export default Button;
