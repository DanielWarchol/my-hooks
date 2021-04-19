import React from 'react';
import './HooksList.css';

function HooksList(props) {

    let hooksList = props.hooksList;
    let hooksLiElements = hooksList.map((user) => {
        return <li key={user.id}>{user.name} <span onClick={() => {props.removeUserMethod(user.id);}}>X</span></li>
    });
    

    return(
        <ul className="the-list">
            {hooksLiElements}
        </ul>
    );
}

export default HooksList;