import React from "react";
import Bookmark from "./bookmark";
import Qualities from "./qualities";
import PropTypes from "prop-types";

const User = ({
    _id,
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    onDeleteUser,
    onToggleBookmark,
    bookmark
}) => {
    return (
        <tr key={_id}>
            <th scope="row">{name}</th>
            <td key={qualities}>
                {qualities.map((qual) => (
                    <Qualities key={qual._id} {...qual} />
                ))}
            </td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate}</td>
            <td>
                <Bookmark
                    status={bookmark}
                    onToggleBookmark={onToggleBookmark}
                    id={_id}
                />
            </td>
            <td>
                <button
                    onClick={() => onDeleteUser(_id)}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

User.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    qualities: PropTypes.array.isRequired,
    profession: PropTypes.object.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    onDeleteUser: PropTypes.func.isRequired,
    onToggleBookmark: PropTypes.func.isRequired,
    bookmark: PropTypes.bool.isRequired
};

export default User;
