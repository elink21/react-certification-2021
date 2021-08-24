import React, { useReducer } from 'react';
import GlobalReducer from './GlobalReducer';
import GlobalContext from './GlobalContext';
import axios from 'axios';
import fileVideos from '../../json/kofVideos.json'; //Im actually using a JSON file for the bug videos
//import alternativeVideos from '../../json/alternateVideoList.json';
import { SET_SEARCH_TERM, SET_THEME, SET_VIDEOS, SET_SELECTED_VIDEO } from './types';

const GlobalState = (props) => {
  let Key = 'AIzaSyAII9XvTdlHMGKadu3lmyxr9wuIcCjv4q8';
  let alternateKey = 'AIzaSyBlPrvGVNZJXVXB4Gzx50kBMFJnPYuWgnM';

  const themes = {
    light: {
      primary: '#ec407a',
      primaryLight: '##fff',
      color: '#000',
      searchBarFontColor: '#000',
      toggleColor: 'default',
      cardFontColor: 'gray',
    },
    dark: {
      primary: '#212121',
      primaryLight: '#484848',
      color: '#fff',
      searchBarFontColor: '#fff',
      toggleColor: 'secondary',
      cardFontColor: 'wheat',
    },
  };

  const initialState = {
    videos: { items: [] },
    searchTerm: 'wizeline',
    theme: themes.light,
    selectedVideo: {},
  };

  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  const setTheme = (darkEnabled) => {
    let newTheme = themes.light;
    if (darkEnabled) {
      newTheme = themes.dark;
    }
    dispatch({
      type: SET_THEME,
      payload: newTheme,
    });
  };

  const setSearchTerm = (searchTerm) => {
    dispatch({
      type: SET_SEARCH_TERM,
      payload: searchTerm,
    });
  };

  const setSelectedVideo = (selectedVideo) => {
    dispatch({
      type: SET_SELECTED_VIDEO,
      payload: selectedVideo,
    });
  };

  const getVideos = async (queryType, queryTerm) => {
    if (queryType === 'search') {
      dispatch({
        type: SET_VIDEOS,
        payload: fileVideos,
      });

      dispatch({
        type: SET_SEARCH_TERM,
        payload: queryTerm,
      });
      /*await axios
        .get(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${queryTerm}&type=video&maxResults=10&key=${Key}`
        )
        .then((response) => {
          console.log(response);
          dispatch({
            type: GET_VIDEOS,
            payload: response.data,
          });
        });
        */
    } else {
      await axios
        .get(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${queryTerm}&type=video&maxResults=10&key=${Key}`
        ).then((response) => {
          dispatch({
            type: SET_VIDEOS,
            payload: { ...response.data },
          });
        });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        videos: state.videos,
        searchTerm: state.searchTerm,
        theme: state.theme,
        selectedVideo: state.selectedVideo,
        setTheme,
        getVideos,
        setSearchTerm,
        setSelectedVideo,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
