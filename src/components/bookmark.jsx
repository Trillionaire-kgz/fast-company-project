import React from "react";

const Bookmark = ({ status, onToggleBookmark, id }) => {
  return (
    <i
      onClick={() => onToggleBookmark(id)}
      className={"bi bi-bookmark" + status ? "-fill" : ""}
    ></i>
  );
};

export default Bookmark;
