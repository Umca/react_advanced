import {combineReducers} from 'redux';

const usersState = ['@adam', '@lucas', '@yoda'];
const messagesState = [
    {
        text:'Hello',
        datetime: 13547654343547674,
        author: '@adam'
    },
    {
        text:'Hello',
        datetime: 13547654343547674,
        author: '@lucas'
    },
];

export const usersReducer = (state = usersState, action)=> {
    switch(action.type){
        case 'ADD_NEW_USER':
        console.log(action)
            return state.concat(action.username);
    }
    return state;
};

export const messagesReducer = (state = messagesState, action)=> {
    switch(action.type){
        case 'ADD_NEW_MESSAGE':
            return state.concat({author: action.author, text: action.text, datetime: action.datetime});
    }
    return state;
};

export default combineReducers({usersReducer, messagesReducer})
