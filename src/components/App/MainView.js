import React from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { VideoCard } from './VideoCard';
import videos from '../../json/videoList.json';

const MainContainer = styled.div`
  height: 100vh;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr 11fr;
  gap: 10px;
`;

const VideosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
  gap: 20px;
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 50px;
`;

export const MainView = () => {
  return (
    <MainContainer>
      <Header></Header>
      <Title>Welcome to the Challenge!</Title>

      <VideosContainer>
        {videos.items.map(function (video, i) {
          if(i!==0)
          return (
            <VideoCard
              key={i}
              imageUrl={video.snippet.thumbnails.high.url}
              title={video.snippet.title}
              description={video.snippet.description}
            ></VideoCard>
          );
          return null;
        })}
      </VideosContainer>
    </MainContainer>
  );
};
