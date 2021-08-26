import React, { useContext, useEffect, useState } from 'react';
import { VideoList } from './VideoList';
import styled from 'styled-components';
import GlobalContext from '../context/GlobalContext';
import { useSessionStorage } from '../Custom Hooks/useSessionStorage';
import { useLocalStorage } from '../Custom Hooks/useLocalStorage';
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

const TitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
`;

const FavoriteButton = styled.button`
  background-color: white;
  border: 1px solid dark;
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;
`;

export const PlayerView = (props) => {
  const globalContext = useContext(GlobalContext);
  const [isLogged, setIsLogged] = useSessionStorage('isLogged', '');
  const [favoriteVideos, setFavoriteVideos] = useLocalStorage('favoriteVideos', []);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    console.log('Favorite effect called');
    setIsFavorite(false);
    for (const video of favoriteVideos) {
      if (globalContext.selectedVideo.snippet?.title === video.snippet?.title) {
        setIsFavorite(true);
        break;
      }
    }
  }, [favoriteVideos, globalContext.selectedVideo]);

  function manageFavorites() {
    const newFavorites = [...favoriteVideos];

    if (!isFavorite) {
      newFavorites.push(globalContext.selectedVideo);
      console.log(newFavorites);
      setFavoriteVideos(newFavorites);
    } else {
      for (let i = 0; i < newFavorites.length; i++) {
        if (newFavorites[i].id.videoId == globalContext.selectedVideo.id.videoId) {
          newFavorites.splice(i, 1);
        }
      }
      setFavoriteVideos(newFavorites);
      setIsFavorite(false);
    }
  }

  function isActualVideoAdded() {}
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
          <TitleWrapper>
            <h3>{globalContext.selectedVideo.snippet.title}</h3>
            {isLogged && (
              <FavoriteButton
                onClick={() => {
                  manageFavorites();
                }}
              >
                {isFavorite && 'Remove from favorites'}
                {!isFavorite && 'Add to favorites'}
              </FavoriteButton>
            )}
          </TitleWrapper>
          <small>
            {globalContext.selectedVideo.snippet?.description.substring(0, 200)}
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
