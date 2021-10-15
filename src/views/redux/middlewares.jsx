import axios from "axios";
import { ActionTypes } from "./constants/action-types";

export const apiMiddleware =  
        ({ dispatch, getState }) =>
        (next) =>
        (action) => {
            var BASE_URL = 'https://newsapi.org/v2/top-headlines?country=co';
            
            const { url, method, success, data, postProcessSuccess, postProcessError, api } =
			action.payload;

            if(api == 'News')
            {
                axios.defaults.headers.common["X-Api-Key"] = ActionTypes.TOKEN;
            }
            if(api == 'UniversalFirst')
            {
                BASE_URL = ActionTypes.API_ROUTE_UNIVERSAL + url;
                axios.defaults.headers.common["Accept"] = "application/json";
                axios.defaults.headers.common["api-token"] = ActionTypes.TOKEN_UNIVERSAL;
                axios.defaults.headers.common["user-email"] = "normacocsub@gmail.com"
            }
            if(api == 'UniversalSearchs')
            {
                const TOKEN_UNIVERSAL = localStorage.getItem('token-universal');
                BASE_URL = ActionTypes.API_ROUTE_UNIVERSAL + url;
                axios.defaults.headers.common["Accept"] = "application/json";
                axios.defaults.headers.common["Authorization"] = 'Bearer '+ TOKEN_UNIVERSAL;
            }
            

            
                axios({
                    method,
                    url: BASE_URL,
                    data: data != undefined ? data : null,
                })
                    .then((response) => {
                        if (success) dispatch(success(response.data));
					    if (postProcessSuccess) postProcessSuccess(response.data);
                    })
                    .catch((err) => {
                        if (!err.response) console.warn(err);
                            if (err.response.data.error) {
                                if (postProcessError) postProcessError(err.response.data.error);
                            }
                        
                    });
            
        }