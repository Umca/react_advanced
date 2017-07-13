import faker from 'faker';


// export const addNewUser = () => {
//     const rndUsername = `@${faker.internet.userName().toLowerCase()}`;
//     return {
//         type: 'ADD_NEW_USER',
//         username: rndUsername
//     }
// }

export const addNewUser = () => {
    const rndUsername = `@${faker.internet.userName().toLowerCase()}`;
    return dispatch => {
        dispatch({
            type: 'ADD_NEW_USER',
            username: rndUsername
        })
        dispatch(addNewMessage(
            rndUsername,
            'Hi there',
            Date.now(),
            
        ))
    }
}

export const addNewMessage = (author, text, datetime) => {
    return {
        type: 'ADD_NEW_MESSAGE',
        author,
        text, 
        datetime
    }
}