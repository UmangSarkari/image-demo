import React, { useState, useEffect } from "react";

// virtual list:: need to provide data items of fixed height
const VirtualizedList = props => {
  const { data = [], itemHeight, renderItem } = props;
  const dataLength = data.length;
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

  const virtualHeight = dataLength * itemHeight;
  let startIndex = Math.floor(scrollTop / itemHeight);
  let endIndex = Math.min(dataLength - 1, Math.floor((scrollTop + windowHeight) / itemHeight));

  // taking an extra margin of one item on both sides
  startIndex = Math.max(0, startIndex - 1);
  endIndex = Math.min(dataLength - 1, endIndex + 1);

  const items = [];
  for (let i = startIndex; i <= endIndex; i++) {
    items.push(
      <div
        style={{
          position: "absolute",
          top: i * itemHeight,
          width: "100%"
        }}
      >
        {renderItem({
          item: data[i],
          index: i
        })}
      </div>
    );
  }

  return <div style={{ position: "relative", height: virtualHeight }}>{items}</div>;
};

export default VirtualizedList;
