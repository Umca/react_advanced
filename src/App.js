import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import Chat from './Chat';
import rootReducer from './reducers';
import {addNewUser} from './actions';
import reduxThunk from 'redux-thunk';

const loggerMiddleware = (store) => {
    return function(next){
        return function (action){
            console.debug('trigger', action)
            return next(action);
        }
    }
}

const checkUserMW = store => next=> action =>{
    if(action.type ==='CONNECTION_RESOLVE'){
        let fakeRequest = () => new Promise(resolve => {
            setTimeout(()=> {
                resolve();
            }, 2000)
        })

        fakeRequest().then(()=>{
            store.dispatch(addNewUser())
        })
    }
    return next(action);
}

const store = createStore(rootReducer, applyMiddleware(reduxThunk, loggerMiddleware));


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