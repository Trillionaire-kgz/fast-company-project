import React from "react";

const Qualities = (props) => {
  let colorData = "badge m-1 bg-";

  return <span className={colorData + props.color}>{props.name}</span>;
};

export default Qualities;
