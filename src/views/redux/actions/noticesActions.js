
import { ActionTypes } from "../constants/action-types";


export const getNotices = (onSuccess) => ({
    payload: {
        method: 'GET',
        headers: ActionTypes.TOKEN,
        url: ActionTypes.API_ROUTE_NOTICES,
        success: (response) => (setNotices(response)),
        postProcessSuccess:onSuccess
    }
})

export const setNotices = (notices) => {
    return {
        type: ActionTypes.SET_NOTICES,
        payload: notices
    };
}