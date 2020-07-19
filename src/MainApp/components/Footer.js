import React from "react";
import ActiveDPContext from "../contexts/ActiveDPContext";
import { withContext, resolveDPValue } from "../Utility";
import { footerStyles } from "../styles";
import { appLogo } from "../Images";

const NAV_ITEMS = [
  [{ type: "header", text: "Category" }, { text: "Home" }, { text: "Contact Us" }, { text: "Listings" }],
  [
    { type: "header", text: "Your Account" },
    { text: "Sign Up" },
    { text: "Login" },
    { text: "Find a Space" },
    { text: "List a Space" }
  ],
  [{ type: "header", text: "Company" }, { text: "About" }, { text: "Meet The Team" }, { text: "Contribute" }],
  [
    { type: "header", text: "Social" },
    { type: "icon", props: { className: "fa fa-facebook" } },
    { type: "icon", props: { className: "fa fa-instagram" } },
    { type: "icon", props: { className: "fa fa-linkedin" } },
    { type: "icon", props: { className: "fa fa-pinterest" } }
  ]
];

const Footer = props => {
  let { activeDP } = props;
  let {
    containerStyle,
    textContainerStyle,
    textStyle,
    navContainerStyle,
    navGroupStyle,
    navHeadingStyle,
    navTextStyle,
    socialIconStyle
  } = resolveDPValue(
    footerStyles,
    [
      "containerStyle",
      "textContainerStyle",
      "textStyle",
      "navContainerStyle",
      "navGroupStyle",
      "navHeadingStyle",
      "navTextStyle",
      "socialIconStyle"
    ],
    activeDP
  );

  let navRender = [];
  for (let i = 0; i < NAV_ITEMS.length; i++) {
    let navGroup = NAV_ITEMS[i];
    let row = [];
    for (let j = 0; j < navGroup.length; j++) {
      let { text, type, props } = navGroup[j];
      row.push(
        <div
          key={i + "_" + j}
          style={type === "header" ? navHeadingStyle : type === "icon" ? socialIconStyle : navTextStyle}
          {...props}
        >
          {text}
        </div>
      );
    }
    navRender.push(
      <div key={i} style={navGroupStyle}>
        {[...row]}
      </div>
    );
  }

  return (
    <>
      <div style={navContainerStyle}>{[...navRender]}</div>
      <div style={containerStyle}>
        <img src={appLogo} width={120} alt="logo" />
        <div style={textContainerStyle}>
          <div style={textStyle}>© {new Date().getFullYear()} A Perfect Space</div>
          <div style={textStyle}>Cookies</div>
          <div style={textStyle}>Terms & Policies</div>
        </div>
      </div>
    </>
  );
};

export default withContext(ActiveDPContext, Footer, "activeDP");
