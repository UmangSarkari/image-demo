import React, { useState, useEffect } from "react";

// virtual list:: need to provide data items of fixed height
const VirtualizedList = props => {
  const { dataLength = 0, itemHeight, renderItem } = props;
  const windowHeight = window.innerHeight;

  const [scrollTop, setScrollTop] = useState(0);
  const onScrollEvent = () => {
    setScrollTop(document.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScrollEvent);
    return () => {
      window.removeEventListener("scroll", onScrollEvent);
    };
  });

  let startIndex = Math.floor(scrollTop / itemHeight);
  let endIndex = Math.min(dataLength - 1, Math.floor((scrollTop + windowHeight) / itemHeight));

  // taking an extra margin of two items on both sides
  startIndex = Math.max(0, startIndex - 2);
  endIndex = Math.min(dataLength - 1, endIndex + 2);
  let items = [];
  for (let index = 0; index < dataLength; index++) {
    items.push(renderItem({ index, isVisible: index >= startIndex && index <= endIndex }));
  }
  return <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>{[...items]}</div>;
};

export default VirtualizedList;
