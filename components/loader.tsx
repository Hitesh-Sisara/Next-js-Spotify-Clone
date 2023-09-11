// CircularLoader.js
import React from "react";

const CircularLoader = () => {
  const spinAnimation = {
    animation: "spin 1s linear infinite",
    background: "conic-gradient(#00FF00, #FFFFFF, #00FF00)",
  };

  return <div style={spinAnimation} className="rounded-full h-5 w-5"></div>;
};

export default CircularLoader;
