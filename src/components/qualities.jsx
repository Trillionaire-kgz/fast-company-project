import React from "react";

const Qualities = ({ qualities }) => {
  let colorData = "badge m-1 bg-";

  return qualities.map((quality) => (
    <span className={colorData + quality.color}>{quality.name}</span>
  ));
};

export default Qualities;
