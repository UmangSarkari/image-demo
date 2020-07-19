import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageListContainer from "./components/ImageListContainer";
import ActiveDP from "./components/ActiveDP";

class MainApp extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          flex: 1
        }}
      >
        <ActiveDP>
          <Header />
          <ImageListContainer />
          <Footer />
        </ActiveDP>
      </div>
    );
  }
}

export default MainApp;
