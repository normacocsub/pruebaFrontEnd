import { ActionTypes } from "../constants/action-types";

export const saveHistory = (onSuccess, city) => ({
    payload: {
        method: 'POST',
        headers: ActionTypes.TOKEN,
        url: `${ActionTypes.API_HISTORY}api/History`,
        data: city,
        postProcessSuccess:onSuccess,
        api: 'History'
    }
});

export const getHistorys = (onSuccess) => ({
    payload: {
        method: 'GET',
        headers: ActionTypes.TOKEN,
        url: `${ActionTypes.API_HISTORY}api/History`,
        postProcessSuccess:onSuccess,
        api: 'History'
    }
});
