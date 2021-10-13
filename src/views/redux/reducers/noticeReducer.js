import { ActionTypes } from "../constants/action-types";

const initualState = {
    notices: [],
    loading: true
}

export const noticeReducer = (state = initualState, {type, payload})=> {
    switch(type) {
        case ActionTypes.SET_NOTICES:
            return {
                ...state,
                notices: payload,
                loading: false
            };
        default:
            return state;
    }
}