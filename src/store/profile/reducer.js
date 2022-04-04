import { CHANGE_VISIBLE_PROFILE, CHANGE_FIRST_NAME, CHANGE_LAST_NAME} from './type';

const initialState = {
    isVisibleProfile: true,
    firstName: '',
    lastName: '',
}

export const profileReducer = (state = initialState, actions) =>{
    switch (actions.type){
        case CHANGE_VISIBLE_PROFILE:
            return {...state, isVisibleProfile: !state.isVisibleProfile}
        case CHANGE_LAST_NAME:
            return {...state, lastName: actions.payload}
        case CHANGE_FIRST_NAME:
            return {...state, firstName: actions.payload}
        default:
            return state

    }
}