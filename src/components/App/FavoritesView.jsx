import React, { useContext, useEffect } from 'react';
import GlobalContext from '../context/GlobalContext';
import { useLocalStorage } from '../Custom Hooks/useLocalStorage';
import { Header } from './Header';
import { VideoList } from './VideoList';
export const FavoritesView = () => {
  const [favoriteVideos, setFavoriteVideos] = useLocalStorage('favoriteVideos', {
    items: [],
  });
  const globalContext = useContext(GlobalContext);

  return (
    <div>
      {favoriteVideos.items.length==0 && <h2>Favorites list is empty</h2>}
      <VideoList  videos={favoriteVideos} forFavorites={true}></VideoList>
    </div>
  );
};
