import axios from "axios";
import { ActionTypes } from "./constants/action-types";

export const apiMiddleware = 
        ({ dispatch, getState }) =>
        (next) =>
        (action) => {
            const BASE_URL = 'https://newsapi.org/v2/top-headlines?country=co';
            axios.defaults.headers.common["X-Api-Key"] = ActionTypes.TOKEN;
            const { url, method, success, data, postProcessSuccess, postProcessError } =
			action.payload;

            if(method) {
                axios({
                    method,
                    url: BASE_URL,
                    data: data ? data : null,
                })
                    .then((response) => {
                        if (success) dispatch(success(response.data));
					    if (postProcessSuccess) postProcessSuccess(response.data);
                    })
                    .catch((err) => {
                        //dispatch({ type: constants.TOGGLE_LOADER })
    
                        if (!err.response) console.warn(err);
                            if (err.response.data.error) {
                                if (postProcessError) postProcessError(err.response.data.error);
                            }
                        
                    });
            }
        }