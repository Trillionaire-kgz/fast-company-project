import React, { useState, useEffect } from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import User from "./user";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import api from "../api";
import SearchStatus from "../components/searchStatus";

const UsersList = ({ users: allUsers, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfession] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const pageSize = 2;
    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data));
    }, []);
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const handleProfessionSelect = (item) => {
        console.log(item);
        setSelectedProf(item);
    };

    const clearFilter = () => {
        setSelectedProf();
    };

    const filteredUsers = selectedProf
        ? allUsers.filter(
              (user) =>
                  JSON.stringify(user.profession) ===
                  JSON.stringify(selectedProf)
          )
        : allUsers;
    const count = filteredUsers.length;
    const userCrop = paginate(filteredUsers, currentPage, pageSize);

    if (count > 0) {
        return (
            <div className="d-flex">
                {professions && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <GroupList
                            items={professions}
                            onItemSelect={handleProfessionSelect}
                            selectedItem={selectedProf}
                        />
                        <button
                            className="btn btn-secondary mt-2"
                            onClick={clearFilter}
                        >
                            Очистить
                        </button>
                    </div>
                )}

                <div className="d-flex flex-column">
                    <SearchStatus length={count} />
                    {count > 0 && (
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Имя</th>
                                    <th scope="col">Качества</th>
                                    <th scope="col">Профессия</th>
                                    <th scope="col">Встретился, раз</th>
                                    <th scope="col">Оценка</th>
                                    <th scope="col">Избранное</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {userCrop.map((user) => (
                                    <User key={user._id} {...user} {...rest} />
                                ))}
                            </tbody>
                        </table>
                    )}
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
};

UsersList.propTypes = {
    users: PropTypes.oneOfType(PropTypes.array, PropTypes.object),
    onDeleteUser: PropTypes.func.isRequired,
    onToggleBookmark: PropTypes.func.isRequired
};

export default UsersList;
