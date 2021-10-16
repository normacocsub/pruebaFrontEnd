import { ActionTypes } from "../constants/action-types";

export const getTime = (onSuccess, city, country) => ({
    payload: {
        method: 'GET',
        headers: ActionTypes.TOKEN_OPEN_WEATHER,
        url: `${city}&country=${country}&lang=es&key=${ActionTypes.TOKEN_OPEN_WEATHER}`,
        data: [],
        postProcessSuccess:onSuccess,
        api: 'Wheater'
    }
});