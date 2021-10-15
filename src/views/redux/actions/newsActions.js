
import { ActionTypes } from "../constants/action-types";


export const getNews = (onSuccess) => ({
    payload: {
        method: 'GET',
        headers: ActionTypes.TOKEN,
        url: ActionTypes.API_ROUTE_NEWS,
        data: [],
        success: (response) => (setNews(response)),
        postProcessSuccess:onSuccess,
        api: 'News'
    }
})

export const setNews = (news) => ({
    type: ActionTypes.SET_NEWS,
    payload: news
});