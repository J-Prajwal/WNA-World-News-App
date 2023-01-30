import axios from "axios";
import * as types from "./news.actionTypes";

export const getLatestNews = () => (dispatch) => {
  dispatch({ type: types.GET_LATEST_NEWS_LOADING });
  return axios
    .get("https://newsdata.io/api/1/news?apikey=pub_8388f9e9492da67b017e34d4bdd4eca23d1b")
    .then((res) =>
      dispatch({ type: types.GET_LATEST_NEWS_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.GET_LATEST_NEWS_FAILURE }));
};
