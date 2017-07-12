/**
 * Created by Horizone on 12.07.2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

class Chat extends Component{
    constructor(){
        super();
    }
    render(){
        console.log(this.props)
        return(
               <div>
                   <h1>Chat</h1>
                   <hr/>
                   <button onClick={this.props.addNewUser}> Add new user</button>
                   {this.props.users.map((u)=>{
                       return(
                           <p key={u}>{u}</p>
                       )
                   })}
               </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state
    }
};
const mapDispatchToProps = (dispatch) => {
    return{
        addNewUser: () =>dispatch({type: 'ADD_NEW_USER'})
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat)