import { themeColor, greyishBlack } from "./colors";
import { regular_12, semi_bold_14, semi_bold_16 } from "./fonts";

const containerStyle = {
  paddingTop: 10,
  paddingBottom: 10,
  display: "flex",
  backgroundColor: themeColor,
  alignItems: "center",
  justifyContent: "center"
};

const navContainerStyle = {
  paddingTop: 10,
  paddingBottom: 10,
  display: "flex",
  flex: 1,
  backgroundColor: themeColor,
  justifyContent: "space-between"
};

export const footerStyles = {
  navContainerStyleSM: { ...navContainerStyle, paddingLeft: 30, paddingRight: 30 },
  navContainerStyleLG: { ...navContainerStyle, paddingLeft: 95, paddingRight: 95 },
  navGroupStyle: { display: "flex", flexDirection: "column" },
  navHeadingStyleSM: { ...semi_bold_14, marginTop: 4, marginBottom: 4 },
  navHeadingStyleLG: { ...semi_bold_16, marginTop: 4, marginBottom: 4 },
  navTextStyleSM: { ...regular_12, color: greyishBlack, marginTop: 3, marginBottom: 3 },
  navTextStyleLG: {
    ...regular_12,
    fontSize: 14,
    color: greyishBlack,
    marginTop: 3,
    marginBottom: 3,
    cursor: "pointer"
  },
  socialIconStyle: { color: greyishBlack, marginTop: 3, marginBottom: 3, cursor: "pointer" },

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
  textContainerStyleSM: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    justifyContent: "center"
  },
  textStyle: { marginLeft: 5, marginRight: 5, paddingLeft: 5, paddingRight: 5, color: greyishBlack, ...regular_12 }
};
