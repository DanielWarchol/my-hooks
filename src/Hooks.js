import React, {Component} from 'react';
import './Hooks.css';
import HooksList from './HooksList';

class Hooks extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            users:[]
        };
    }

    addUser = (event) => {
        event.preventDefault();
        console.log(this._inputValue.value);

        let newHooks = {
            id: Date.now(),
            name: this._inputName.value
        }

        this.setState((state) => {
            return({
                users: state.users.concat(newHooks)
            });
        })

        this._inputName.value = '';

        removeUser = (userID) => {
            this.setState((state)=> {
                return({
                    users: state.users.filter(user => user.id !== userID)
                });
            })
        }


    }

    render() {
        return(
            <div className="Hooks-main">
                <h1>Hook's List</h1>
                <form onSubmit={this.addUser}>
                    <input re={(element) => {this._inputName = element;}} type="text" placeholder="Enter name" />
                    <button type="submit"> Add Hooks</button>
                </form>
                <HooksList hooksList={this.state.users} removeUserMethod={this.removeUser} />
            </div>
        )
    }

}

export default Hooks;