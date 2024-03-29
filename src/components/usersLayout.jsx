import React from "react";
import { useParams } from "react-router-dom";
import UserPage from "./userPage";
import UsersList from "./usersList";

const UsersLayout = () => {
    const params = useParams();
    const { userId } = params;
    return <>{userId ? <UserPage userId={userId} /> : <UsersList />}</>;
};

export default UsersLayout;
