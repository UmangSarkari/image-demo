import React from "react";
import ActiveDPContext from "../contexts/ActiveDPContext";
import { getActiveDP } from "../Utility";

export default class ActiveDP extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: window.innerWidth || 0 };
  }

  onResizeWindow = () => {
    let { innerWidth: width } = window || {};
    if (this.state.width !== width && Math.abs(this.state.width - width) > 5) {
      this.setState({ width });
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.onResizeWindow);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.onResizeWindow);
  }

  render() {
    let { width = 0 } = this.state;
    let activeDP = getActiveDP(width);
    return <ActiveDPContext.Provider value={activeDP}>{this.props.children}</ActiveDPContext.Provider>;
  }
}
