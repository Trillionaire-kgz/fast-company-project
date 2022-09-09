import React from "react";
import PropTypes from "prop-types";

const SearchUser = ({ type, className, placeholder, value, onChange }) => {
    return (
        <div className="input-group mb-3">
            <input
                type={type}
                className={className}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            ></input>
        </div>
    );
};

SearchUser.propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default SearchUser;
