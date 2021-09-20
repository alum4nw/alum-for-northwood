import * as React from "react";
import * as classnames from "classnames";

const ButtonDark = ({ padding, textSize, description }) => {
  const classStr = classnames(
    "bg-blue-dark hover:bg-blue text-white font-body rounded-lg",
    padding,
    textSize
  );
  return <button className={classStr}>{description}</button>;
};

export default ButtonDark;
