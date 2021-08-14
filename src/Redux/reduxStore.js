import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import searchReducer from "./searchReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    searchPage: searchReducer,
})

let store = createStore(reducers)

export default store;
window.store = store;