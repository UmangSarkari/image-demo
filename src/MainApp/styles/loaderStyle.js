import { themeColor } from "./colors";

export const loaderStyle = {
  containerStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
    // position: "absolute",
    // zIndex: 100,
    // left: 0,
    // top: 0,
    // right: 0,
    // bottom: 0
  },
  animationStyle: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    border: `4px solid ${themeColor}`,
    boxSizing: "border-box",
    borderRightColor: "transparent",
    animationName: "spinnerRotate",
    animationDuration: "0.75s",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear"
  }
};
