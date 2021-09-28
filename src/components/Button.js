import * as React from "react";
import * as classnames from "classnames";

const Button = ({ padding, textSize, description }) => {
  const classStr = classnames(
    "bg-blue-dark text-white font-body rounded-lg transform",
    "hover:shadow-custom hover:-translate-x-1 hover:-translate-y-1 hover:bg-blue ",
    padding,
    textSize
  );
  return <button className={classStr}>{description}</button>;
};

export default Button;
