import { extra_bold_16, regular_12, semi_bold_16 } from "./fonts";
import { greyishBlack, themeColor } from "./colors";

export const listContainerStyle = {
  containerStyleSM: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 25,
    marginRight: 25
  },
  containerStyleLG: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 90,
    marginRight: 90
  },
  colPerRowLG: 3,
  colPerRowMD: 2,
  colPerRowSM: 1,
  rowStyle: { display: "flex", flex: 1 },
  colStyle: {
    marginLeft: 12,
    marginRight: 12,
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    flexDirection: "column"
  },

  imgContainerStyle: {
    marginBottom: 4,
    width: "100%",
    backgroundColor: "#D3D3D3",
    height: 250,
    borderRadius: 5
  },
  imgStyle: {
    width: "100%",
    height: "100%",
    style: { objectFit: "cover", borderRadius: 5 }
  },
  headerStyle: {
    marginTop: 4,
    ...extra_bold_16,
    color: greyishBlack,
    whiteSpace: "noWrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    textTransform: "uppercase"
  },
  descStyle: { marginTop: 4, ...regular_12, whiteSpace: "noWrap", textOverflow: "ellipsis", overflow: "hidden" },
  loadMoreStyle: {
    alignSelf: "center",
    backgroundColor: themeColor,
    borderRadius: 5,
    padding: 10,
    ma: 5,
    color: greyishBlack,
    ...semi_bold_16,
    cursor: "pointer"
  }
};
