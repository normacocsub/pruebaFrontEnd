import { combineReducers } from "redux";
import { noticeReducer } from "./noticeReducer";


const reducers = combineReducers({
    allNotices : noticeReducer
});

export default reducers;