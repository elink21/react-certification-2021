import { SET_SEARCH_TERM, GET_VIDEOS, SET_THEME, SET_SELECTED_VIDEO } from './types';

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_VIDEOS:
      return {
        ...state,
        videos: payload,
      };

    case SET_THEME:
      return {
        ...state,
        theme: payload,
      };
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: payload,
      };
    case SET_SELECTED_VIDEO:
      return {
        ...state,
        selectedVideo: payload,
      };
    default:
      return state;
  }
};
