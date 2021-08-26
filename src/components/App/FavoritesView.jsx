import React, { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import { useLocalStorage } from '../Custom Hooks/useLocalStorage';
import { Header } from './Header';
import { VideoList } from './VideoList';
export const FavoritesView = () => {
  const [favoriteVideos, setFavoriteVideos] = useLocalStorage('favoriteVideos', {items:[]});
  return (
    <div>
      <VideoList videos={favoriteVideos}></VideoList>
    </div>
  );
};
