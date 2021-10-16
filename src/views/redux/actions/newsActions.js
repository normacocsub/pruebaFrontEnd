
import { ActionTypes } from "../constants/action-types";


export const getNews = (onSuccess, country) => ({
    payload: {
        method: 'GET',
        headers: ActionTypes.TOKEN,
        url: country,
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