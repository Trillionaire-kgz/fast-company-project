import React from "react";

const SearchStatus = (props) => {
  const renderPhrase = (number) => {
    if (number > 4 && number < 15) {
      return "человек тусанет";
    } else if (number <= 4 && number > 1) {
      return "человека тусанут";
    } else if (number === 1) {
      return "человек тусанет";
    }
  };
  return (
    <h2>
      <span
        className={"badge " + (props.length > 0 ? "bg-primary" : "bg-danger")}
      >
        {props.length > 0
          ? `${props.length + " " + renderPhrase(props.length)} с тобой`
          : "Никто с тобой не тусанет"}
      </span>
    </h2>
  );
};

export default SearchStatus;
