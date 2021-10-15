import { ActionTypes } from "../constants/action-types";


export const getToken = (onSuccess) => ({
    payload: {
        method: 'GET',
        headers: ActionTypes.TOKEN_UNIVERSAL,
        url: '/api/getaccesstoken',
        data: [],
        postProcessSuccess:onSuccess,
        api: 'UniversalFirst'
    }
});

export const getContries = (onSuccess) => ({
    payload: {
        method: 'GET',
        headers: ActionTypes.TOKEN_UNIVERSAL,
        url: '/api/countries/',
        data: [],
        postProcessSuccess:onSuccess,
        api: 'UniversalSearchs'
    }
});

export const getEstados = (onSuccess, value) => ({
    payload: {
        method: 'GET',
        headers: ActionTypes.TOKEN_UNIVERSAL,
        url: `/api/states/${value}`,
        data: [],
        postProcessSuccess:onSuccess,
        api: 'UniversalSearchs'
    }
});

export const getCiudades = (onSuccess, value) => ({
    payload: {
        method: 'GET',
        headers: ActionTypes.TOKEN_UNIVERSAL,
        url: `/api/cities/${value}`,
        data: [],
        postProcessSuccess:onSuccess,
        api: 'UniversalSearchs'
    }
});

