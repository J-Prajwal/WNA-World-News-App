import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Auth/auth.reducer";
import { newsReducer } from "./News/news.reducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    auth: authReducer,
    news: newsReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));