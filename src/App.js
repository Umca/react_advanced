import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Chat from './Chat';
import rootReducer from './reducers';


const store = createStore(rootReducer);

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