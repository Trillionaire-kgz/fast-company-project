import React, { useState } from 'react';
import api from '../api';



const Users = ()=> {
   const [users, setUsers] = useState(api.users.fetchAll());

   const handleDelete = (userId) => {
        setUsers(prevState => prevState.filter(user => user !== userId))
        console.log(userId);
        
   }

   const renderPhrase = () => {
        switch(users) {
            case users.length > 4 && users.length <= 12:
                return <span>{users.length} человек тусанут с тобой</span>
            case users.length > 1 && users.length <= 4:
                return <span>{users.length} человека тусанут с тобой</span>
            case users.length === 1:
                return <span>{users.length} человек тусанет с тобой</span>;
            case users.length === 0:
                return <span className="badge bg-danger">Никто не тусанет с тобой!</span>;
            default:
                return <span>{users.length} человек тусанут с тобой</span>
        }
   }

   const renderQualities = () => {
      return  users.map(user => <span key={user._id}>{user.qualities.map(quality => <span>{quality.name}</span>)}</span>)
   }

   const renderUsers = () => {
    return users.map(user =>  
    <tr key={user._id}>
        <th scope="row">{user.name}</th>
        <td>{renderQualities()}</td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}</td>
        <td><button className='btn btn-danger btn-sm m-2' onClick={()=>handleDelete(user)}>Delete</button></td>
    </tr>)
   }

   return (<>
    <h2>
        <span className="badge bg-primary">{renderPhrase()}</span>
    </h2>
    <table class="table table-striped">
        <thead>
            <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody>
            {renderUsers()}
        </tbody>
    </table>
        </> );
}

export default Users;