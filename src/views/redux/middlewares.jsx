import axios from "axios";
import { ActionTypes } from "./constants/action-types";

export const apiMiddleware =  
        ({ dispatch, getState }) =>
        (next) =>
        (action) => {
            let BASE_URL = 'https://newsapi.org/v2/top-headlines?country=';

            let heders = {}
            
            const { url, method, success, data, postProcessSuccess, postProcessError, api } =
			action.payload;

            if(api == 'News')
            {
                BASE_URL = BASE_URL +  url; 
                heders = {"X-Api-Key": ActionTypes.TOKEN,  "Content-Type": "application/x-www-form-urlencoded"}
                //axios.defaults.headers.common["X-Api-Key"] = ActionTypes.TOKEN;
            }
            if(api == 'UniversalFirst')
            {
                BASE_URL = ActionTypes.API_ROUTE_UNIVERSAL + url;
                heders = {"Accept": "application/json", "api-token": ActionTypes.TOKEN_UNIVERSAL, "user-email": "normacocsub@gmail.com"};
                //axios.defaults.headers.common["Accept"] = "application/json";
                //axios.defaults.headers.common["api-token"] = ActionTypes.TOKEN_UNIVERSAL;
                //axios.defaults.headers.common["user-email"] = "normacocsub@gmail.com"
            }
            if(api == 'UniversalSearchs')
            {
                const TOKEN_UNIVERSAL = localStorage.getItem('token-universal');
                BASE_URL = ActionTypes.API_ROUTE_UNIVERSAL + url;
                heders = {"Accept":"application/json", "Authorization" : `Bearer ${TOKEN_UNIVERSAL}`};
                //axios.defaults.headers.common["Accept"] = "application/json";
                //axios.defaults.headers.common["Authorization"] = 'Bearer '+ TOKEN_UNIVERSAL;
            }

            if(api == 'Wheater')
            {
                BASE_URL =   ActionTypes.API_OPEN_WHEATHER + url;
                heders = {"Accept": "application/json", "Access-Control-Allow-Origin": "*"};
                //axios.defaults.headers.common["Accept"] = "application/json";
                //axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
            }
            if(api == 'History')
            {
                BASE_URL = url;
                heders = {"Accept": "application/json", "Access-Control-Allow-Origin": "*"};
            }
    
            
            
            if(method)
            {
                axios({
                    method,
                    url: BASE_URL,
                    data: data != undefined ? data : null,
                    headers: heders
                })
                    .then((response) => {
					    if (postProcessSuccess) postProcessSuccess(response.data);
                    })
                    .catch((err) => {
                        if (!err.response) console.warn(err);
                            if (err.response.data.error) {
                                if (postProcessError) postProcessError(err.response.data.error);
                            }
                        
                    });
            }
        }