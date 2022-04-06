import { ADD_NEW_MESSAGE } from './type';

const initialState = {
    chats: [],
}

export const chatsReducer = (state = initialState, actions) =>{
    switch (actions.type){
        case ADD_NEW_MESSAGE:
            return {chats: actions.payload}
        default:
            return state

    }
}