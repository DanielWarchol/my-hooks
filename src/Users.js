import React, {useState} from 'react';
import Users from './Users.css';
import UsersList from './UsersList';

const Users = (props) => {

    const [users, setUsers] = useState();
    const [inputValue, setInputValue] = useState('');
    
    setUsers = (event) => {
        event.preventDefault();
        console.log(inputValue.value);

        let newUser = {
            id: Date.now(),
            name: inputValue.value
        }

        this.setState((state) => {
            return({
                users: state.users.concat(newUser)
            });
        })

        inputValue.value = '';
    }

    render() 
        return(
            <div className="users-main">
                <h1>User's List</h1>
                <form onSubmit={this.addUser}>
                    <input onChange={e=>setInputValue(e.target.value)} placeholder="Enter name" />
                    <button type="submit">Add user</button>
                </form>
                <UsersList usersList={this.state.users} removeUserMethod={this.removeUser} />
            </div>
        )
}

export default Users;