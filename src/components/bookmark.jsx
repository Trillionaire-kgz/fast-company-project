import React from "react";

const Bookmark = ({ status, onToggleBookmark, id }) => {
  return (
    <button>
      <i
        onClick={() => onToggleBookmark(id)}
        className={"bi bi-bookmark" + (status ? "-heart-fill" : "")}
      ></i>
    </button>
  );
};

export default Bookmark;
