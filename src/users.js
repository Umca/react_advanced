import React , {Component}  from 'react';

export default class Users extends Component{
    render(){
        return(
            <div>
                <h3>Online users:</h3>
                <ul>
                    {this.props.users.map((user, i) => {
                        return <li key = {i}>{user}</li>
                    })}
                </ul>
                <button onClick={this.props.addNewUser}>Add new user</button>
            </div>
        );
    }
}