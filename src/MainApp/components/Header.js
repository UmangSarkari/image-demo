import React from "react";
import ActiveDPContext from "../contexts/ActiveDPContext";
import { withContext, resolveDPValue } from "../Utility";
import { headerStyles } from "../styles";
import { appLogo } from "../Images";

const NAV_ITEMS = [
  { text: "About" },
  { text: "How it works" },
  { text: "Contact" },
  { type: "separator" },
  { text: "List a Space" },
  { text: "Find a Space" },
  { type: "separator" },
  { text: "Sign Up", type: "bold" },
  { text: "Login", type: "bold" }
];

const Separator = ({ style }) => <div style={style} />;

const Header = props => {
  let { activeDP } = props;
  let { containerStyle, navItemsContainerStyle, navItemStyle, navItemBoldStyle, separatorStyle } = resolveDPValue(
    headerStyles,
    ["containerStyle", "navItemsContainerStyle", "navItemStyle", "navItemBoldStyle", "separatorStyle"],
    activeDP
  );

  return (
    <div style={containerStyle}>
      <img src={appLogo} width={120} alt="logo" />
      <div style={navItemsContainerStyle}>
        {NAV_ITEMS.map((item, index) => {
          if (item.type === "separator") {
            return <Separator key={index} style={separatorStyle} />;
          } else {
            if (item.type === "bold") {
              navItemStyle = { ...navItemStyle, ...navItemBoldStyle };
            }
            return (
              <div key={index} style={navItemStyle} title={item.text}>
                {item.text}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default withContext(ActiveDPContext, Header, "activeDP");
