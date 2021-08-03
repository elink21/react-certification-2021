import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import fileVideos from '../../json/videoList.json';
import { VideoList } from './VideoList';
import { VideoSearchView } from './VideoSearchView';
import axios from 'axios';

const MainContainer = styled.div`
  height: 100vh;
  padding: 0;
  margin: 0;
  display: grid;
  overflow-x: hidden;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr 11fr;
  gap: 10px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 50px;
`;

export const MainView = () => {
  const [searchViewEnabled, setSearchViewEnabled] = useState(false);
  const [videos, setVideos] = useState({ items: [] });
  const [actualVideo, setActualVideo] = useState({});
  const Key = 'AIzaSyAII9XvTdlHMGKadu3lmyxr9wuIcCjv4q8';

  useEffect(() => {
    console.log('Effect called');
    fetchVideos('search', 'rock');
    setVideos(fileVideos);
  }, []);

  const updateActualVideo = (video) => {
    setActualVideo(video);
  };

  const fetchVideos = (queryType, queryString) => {
    if (queryType === 'search') {
      axios
        .get(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${queryString}&type=video&maxResults=10&key=${Key}`
        )
        .then((response) => {
          setVideos(response.data);
        });
    } else {
      axios
        .get(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${queryString}&type=video&maxResults=10&key=${Key}`
        )
        .then((response) => {
          setVideos(response.data);
        });
    }
  };

  const toggleViewMode = (newValue) => {
    setSearchViewEnabled(newValue);
  };

  const updateVideoList = (queryType, queryString) => {
    fetchVideos(queryType, queryString);
  };

  let ActualView;

  if (searchViewEnabled) {
    ActualView = (
      <VideoSearchView
        updateActualVideo={updateActualVideo}
        updateVideoList={updateVideoList}
        toggleFunction={toggleViewMode}
        video={actualVideo}
        videos={videos}
      />
    );
  } else {
    ActualView = (
      <div>
        <Title>Welcome to the challenge</Title>
        <VideoList
          updateActualVideo={updateActualVideo}
          toggleFunction={toggleViewMode}
          updateVideoList={updateVideoList}
          videos={videos}
        ></VideoList>
      </div>
    );
  }

  return (
    <MainContainer>
      <Header toggleFunction={toggleViewMode} updateFunction={updateVideoList}></Header>
      {ActualView}
    </MainContainer>
  );
};
