import React, { useState, useEffect } from "react";
import UsersList from "./components/usersList";
import api from "./api";

const App = () => {
    const [users, setUsers] = useState();
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data));
    }, []);

    const handleDelete = (userId) => {
        setUsers((prevState) =>
            prevState.filter((user) => user._id !== userId)
        );
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
            {users && (
                <UsersList
                    users={users}
                    onDeleteUser={handleDelete}
                    onToggleBookmark={handleBookmark}
                />
            )}
        </>
    );
};

export default App;
