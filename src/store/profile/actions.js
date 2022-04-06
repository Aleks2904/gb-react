import {CHANGE_LAST_NAME} from "./type";
import {CHANGE_FIRST_NAME} from "./type";
import {CHANGE_VISIBLE_PROFILE} from "./type";

export const changeLastName = (name) =>{
    return {type: CHANGE_LAST_NAME, payload: name}
}

export const changeFirstName = (name) =>{
    return {type: CHANGE_FIRST_NAME, payload: name}
}

export const toggleVisibleProfile = () =>{
    return {type: CHANGE_VISIBLE_PROFILE}
}