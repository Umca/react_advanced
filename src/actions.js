import faker from 'faker';


export const addNewUser = () => {
    const rndUsername = `@${faker.internet.userName().toLowerCase()}`;
    return {
        type: 'ADD_NEW_USER',
        username: rndUsername
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