import React from "react";
import Bookmark from "./bookmark";
import Qualities from "./qualities";

const User = ({
  _id,
  name,
  qualities,
  profession,
  completedMeetings,
  rate,
  onDeleteUser,
  onToggleBookmark,
  bookmark,
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

export default User;
