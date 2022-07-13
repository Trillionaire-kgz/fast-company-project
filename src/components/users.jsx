import React, { useState } from 'react';
import api from '../api';



const Users = ()=> {
   const [users, setUsers] = useState(api.users.fetchAll());

   const handleDelete = (userId) => {
        setUsers(prevState => prevState.filter(user => user !== userId))
        console.log(userId);
        
   }

   const renderPhrase = (number) => {
        if(number > 4 && number < 15) {
            return 'человек тусанет'}
            else if(number <= 4 && number > 1) {
                return 'человека тусанут'
            } else if (number === 1) {
                return 'человек тусанет'
            }
        
   }

   const renderQualities = (qualities) => {
    let colorData = 'badge m-2 bg-'

      return qualities.map((quality) => <span className={colorData+quality.color}>{quality.name}</span>)
   }

   const renderUsers = () => {
    return users.map(user =>  
    <tr key={user._id}>
        <th scope="row">{user.name}</th>
        <td>{renderQualities(user.qualities)}</td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}</td>
        <td><button className='btn btn-danger btn-sm m-2' onClick={()=>handleDelete(user)}>Delete</button></td>
    </tr>)
   }

   return (<>
    <h2>
        <span className={'badge ' + (users.length > 0 ? 'bg-primary' : 'bg-danger')}>
            {users.length > 0 ? `${users.length + ' ' + renderPhrase(users.length)} с тобой` : 'Никто с тобой не тусанет'}
        </span>
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