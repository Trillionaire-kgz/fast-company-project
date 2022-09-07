import React, { useState } from "react";
import PropTypes, { array, object } from "prop-types";

const UserSearch = ({ data }) => {
    const [value, setValue] = useState("");
    const filteredUsers = data.filter((user) => {
        return user.name.includes(value);
    });

    return (
        <div className="input-group mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Search..."
                onChange={(event) => setValue(event.target.value)}
            ></input>
        </div>
    );
};

UserSearch.propTypes = {
    data: PropTypes.oneOfType(array, object)
};

export default UserSearch;
