import React from "react";
import PropTypes from "prop-types";

const Caret = ({ selectedSort, onToggleCaret }) => {
    return (
        <button>
            <i
                onClick={() => onToggleCaret()}
                className={
                    selectedSort.order === "asc"
                        ? "bi bi-caret-up-fill"
                        : "bi bi-caret-down-fill"
                }
            ></i>
        </button>
    );
};

Caret.propTypes = {
    selectedSort: PropTypes.object.isRequired,
    onToggleCaret: PropTypes.func.isRequired
};

export default Caret;
