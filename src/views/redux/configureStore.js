import {createStore, applyMiddleware, compose}  from 'redux';
import reducers from './reducers';
import { apiMiddleware} from  './middlewares';


export default function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(reducers , initialState, composeEnhancers(applyMiddleware(apiMiddleware)))
}