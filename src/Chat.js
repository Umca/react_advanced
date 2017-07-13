import React, {Component} from 'react';
import {connect} from 'react-redux';
import Users from './users';  
import Messages from './messages';
import {bindActionCreators} from 'redux';
import {addNewUser, addNewMessage} from './actions';

class Chat extends Component{
    constructor(){
        super();
    }
    render(){
       return(
           <main>
                <div>
                    <Messages messages = {this.props.messages} addNewMessage={this.props.addNewMessage}/>
                    <Users users={this.props.users} addNewUser={this.props.addNewUser} />
                </div>
           </main>
       )
    }
}

const mapStateToProps = (state) => {
    console.log(111, state)
    return {
        users: state.usersReducer,
        messages: state.messagesReducer
    }
};
const mapDispatchToProps = (dispatch) => {
    return{
        addNewUser: bindActionCreators(addNewUser, dispatch),
        addNewMessage: bindActionCreators(addNewMessage, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat)