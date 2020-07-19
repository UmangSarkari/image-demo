import { themeColor, greyishBlack } from "./colors";
import { regular_12, bold_12 } from "./fonts";

const containerStyle = {
  paddingTop: 10,
  paddingBottom: 10,
  display: "flex",
  backgroundColor: themeColor,
  alignItems: "center",
  justifyContent: "center"
};

export const headerStyles = {
  containerStyleSM: {
    ...containerStyle,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: "column"
  },
  containerStyleLG: {
    ...containerStyle,
    paddingLeft: 95,
    paddingRight: 95,
    justifyContent: "space-between"
  },
  navItemsContainerStyle: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  navItemStyle: {
    marginLeft: 5,
    marginRight: 5,
    paddingLeft: 5,
    paddingRight: 5,
    color: greyishBlack,
    cursor: "pointer",
    ...regular_12
  },
  navItemBoldStyle: { ...bold_12 },
  separatorStyleLG: { height: 20, width: 1, backgroundColor: greyishBlack }
};
