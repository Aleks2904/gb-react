import {ADD_NEW_MESSAGE} from "./type";

export const changeChat = (chat) =>{
    return {type: ADD_NEW_MESSAGE, payload: chat}
}