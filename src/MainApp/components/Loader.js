import React from "react";
import { loaderStyle } from "../styles";

const Loader = () => {
  let { containerStyle, animationStyle } = loaderStyle;

  return (
    <div style={containerStyle}>
      <div style={animationStyle} />
    </div>
  );
};

export default Loader;
