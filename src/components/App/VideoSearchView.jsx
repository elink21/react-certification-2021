import React from 'react';
import { VideoList } from './VideoList';
import styled from 'styled-components';

const SearchView = styled.div`
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

export const VideoSearchView = (props) => {
  return (
    <SearchView>
      <VideoFrame>
        <iframe
          title="video"
          width="100%"
          height="500px"
          src={'https://www.youtube.com/embed/' + props.video.id.videoId}
        ></iframe>

        <VideoData>
          <h1>{props.video.snippet.title}</h1>
          <small>{props.video.snippet.description.substring(0,200)}</small>
        </VideoData>
      </VideoFrame>

      <VideoListWrapper>
        <span role="img" aria-label="link">🔗</span>
        <h3>Related videos </h3>
        <VideoList
          videos={props.videos}
          updateActualVideo={props.updateActualVideo}
          updateVideoList={props.updateVideoList}
          toggleFunction= {props.toggleFunction}
        ></VideoList>
      </VideoListWrapper>
    </SearchView>
  );
};
