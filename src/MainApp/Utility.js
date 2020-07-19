import React from "react";

const BREAKPOINTS = [
  { minWidth: 0, dp: "SM" },
  { minWidth: 550, dp: "MD" },
  { minWidth: 900, dp: "LG" }
];

const breakPointMap = BREAKPOINTS.reduce((accum, value, index) => {
  accum[value.dp] = { dp: value.dp, index };
  return accum;
}, {});

export const getActiveDP = width => {
  if (BREAKPOINTS && BREAKPOINTS.length && width) {
    for (var index = BREAKPOINTS.length - 1; index >= 0; index--) {
      let breakPoint = BREAKPOINTS[index];
      if (width >= breakPoint.minWidth) {
        return breakPointMap[breakPoint.dp];
      }
    }
  }
};

export const resolveDPValue = (props, propsToCheck, activeDP = {}) => {
  let { dp, index } = activeDP;

  let resultProps = {};
  for (let prop of propsToCheck) {
    let dpValue = props[`${prop}${dp}`];
    if (dpValue === undefined && index !== undefined && BREAKPOINTS) {
      for (var i = index - 1; i >= 0; i--) {
        let breakPoint = BREAKPOINTS[i];
        let breakPointDPValue = props[`${prop}${breakPoint.dp}`];
        if (breakPointDPValue !== undefined) {
          dpValue = breakPointDPValue;
          break;
        }
      }
    }
    if (dpValue === undefined) {
      dpValue = props[prop];
    }
    if (dpValue !== undefined) {
      resultProps[prop] = dpValue;
    }
  }
  return resultProps;
};

export const withContext = (Context, Component, propsToProvide) => {
  return props => (
    <Context.Consumer>
      {value => {
        let contextProps = { [propsToProvide]: value };
        return <Component {...props} {...contextProps} />;
      }}
    </Context.Consumer>
  );
};
