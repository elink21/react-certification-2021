import React, { useContext } from 'react';
import styled from 'styled-components';
import { VideoCard } from './VideoCard';
import GlobalContext from '../context/GlobalContext';

const VideosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  justify-items: center;
  gap: 20px;
  padding: 20px;
`;

export const VideoList = (props) => {
  return (
    <VideosContainer>
      {props.videos.items.map(function (video, i) {
        return (
          <VideoCard
            key={i}
            imageUrl={video.snippet?.thumbnails.high.url}
            title={video.snippet?.title}
            description={video.snippet?.description}
            videoId={video.id.videoId}
            video={video}
            forFavorites={props.forFavorites}
          ></VideoCard>
        );
      })}
    </VideosContainer>
  );
};
