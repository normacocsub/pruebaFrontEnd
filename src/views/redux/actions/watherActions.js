import { ActionTypes } from "../constants/action-types";

export const getTime = (onSuccess, city) => ({
    payload: {
        method: 'GET',
        headers: ActionTypes.TOKEN_OPEN_WEATHER,
        url: `${ActionTypes.TOKEN_OPEN_WEATHER}&query=${city}`,
        data: [],
        postProcessSuccess:onSuccess,
        api: 'Wheater'
    }
});