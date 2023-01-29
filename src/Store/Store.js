import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import { authReducer } from "./Auth/auth.reducer";
import { newsReducer } from "./News/news.reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
  news: newsReducer,
});

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
