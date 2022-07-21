import React, { useState } from "react";
import UsersList from "./components/usersList";
import SearchStatus from "./components/searchStatus";
import api from "./api";

const App = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) => {
    console.log(userId);
    setUsers((prevState) => prevState.filter((user) => user._id !== userId));
  };

  const handleBookmark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark };
        }
        return user;
      })
    );
  };

  return (
    <>
      <SearchStatus length={users.length} />
      <UsersList
        users={users}
        onDeleteUser={handleDelete}
        onToggleBookmark={handleBookmark}
      />
    </>
  );
};

export default App;
