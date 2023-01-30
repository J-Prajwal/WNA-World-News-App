import * as types from "./news.actionTypes";

const init = {
  isLoading: false,
  isError: false,
  news: [],
  latest: [],
};

export const newsReducer = (state = init, { type, payload }) => {
  switch (type) {
    case types.GET_LATEST_NEWS_LOADING:
      return { ...state, isLoading: true, isError: false };
    case types.GET_LATEST_NEWS_SUCCESS:
      return { ...state, isLoading: false, isError: false, latest: payload };
    case types.GET_LATEST_NEWS_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
