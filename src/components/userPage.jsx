import React, { useState, useEffect } from "react";
import API from "../api";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const UserPage = ({ userId }) => {
    const [user, setUser] = useState();
    useEffect(() => {
        API.users.getById(userId).then((data) => setUser(data));
    }, []);

    const history = useHistory();

    const handleSwitch = () => {
        history.push("/users");
    };

    if (user) {
        return (
            <div>
                <h1>{user.name}</h1>
                <h2>{`Профессия: ${user.profession.name}`}</h2>
                <p>
                    {user.qualities.map((qual) => (
                        <span
                            key={qual._id}
                            className={"badge m-1 bg-" + qual.color}
                        >
                            {qual.name}
                        </span>
                    ))}
                </p>
                <p>{`completedMeetings: ${user.completedMeetings}`}</p>
                <h2>{`Rate: ${user.rate}`}</h2>
                <button onClick={() => handleSwitch()}>Все пользователи</button>
            </div>
        );
    } else {
        return <h2>Loading...</h2>;
    }
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};
export default UserPage;
