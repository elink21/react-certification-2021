import React, { useContext } from 'react';
import { VideoList } from './VideoList';
import styled from 'styled-components';
import GlobalContext from '../context/GlobalContext';

const PlayerViewWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

const VideoListWrapper = styled.div`
  max-height: 80vh;
  overflow-y: scroll;
  text-align: center;
`;

const VideoFrame = styled.div``;

const VideoData = styled.div`
  padding: 10px;
`;

export const PlayerView = (props) => {
  const globalContext = useContext(GlobalContext);
  return (
    <PlayerViewWrapper>
      <VideoFrame>
        <iframe
          title="video"
          width="100%"
          height="500px"
          allow="autoplay"
          src={
            'https://www.youtube.com/embed/' +
            globalContext.selectedVideo.id.videoId +
            '?autoplay=1'
          }
        ></iframe>

        <VideoData>
          <h1>{globalContext.selectedVideo.snippet.title}</h1>
          <small>
            {globalContext.selectedVideo.snippet.description.substring(0, 200)}
          </small>
        </VideoData>
      </VideoFrame>

      <VideoListWrapper>
        <span role="img" aria-label="link">
          🔗
        </span>
        <h3>Related videos </h3>
        <VideoList></VideoList>
      </VideoListWrapper>
    </PlayerViewWrapper>
  );
};
