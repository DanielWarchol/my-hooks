import React from 'react';
import './UsersList.css';

function UsersList(props) {

    let UsersList = props.UsersList;
    let UsersLiElements = UsersList.map((user) => {
        return <li key={user.id}>{user.name} <span onClick={() => {props.removeUserMethod(user.id);}}>X</span></li>
    });
    

    return(
        <ul className="the-list">
            {UsersLiElements}
        </ul>
    );
}

export default UsersList;