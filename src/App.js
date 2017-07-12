/**
 * Created by Horizone on 12.07.2017.
 */
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Chat from './Chat';

const usersState = ['@adam', '@lucas', '@yoda'];
const reducer = (state = usersState, action)=> {
    switch(action.type){
        case 'ADD_NEW_USER':
            return state.concat('@newUser'+Date.now())
    }
    console.log(action);
    return state;
};
const store = createStore(reducer);

window.store = store;

export default class App extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <Provider store={store}>
                <Chat />
            </Provider>
        )
    }
}