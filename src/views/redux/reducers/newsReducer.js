import { ActionTypes } from "../constants/action-types";

const initialState = {
    news: [],
    loading: true
}

export const newsReducer = (state = initialState, action)=> {

    switch(action.type) {
        
        case ActionTypes.SET_NEWS:
            
            return {
                ...state,
                news: action.payload,
                loading: false
            };
        default:

            return state;
            
    }
}