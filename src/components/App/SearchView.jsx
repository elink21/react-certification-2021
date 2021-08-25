import React, { useContext } from 'react';
import styled from 'styled-components';
import GlobalContext from '../context/GlobalContext';
import { VideoList } from './VideoList';


const Title = styled.h1`
  text-align: center;
  font-size: 50px;
`;

export const SearchView = () => {
  const globalContext = useContext(GlobalContext);

  return (
    <div>
      <Title>Search term: {globalContext.searchTerm}</Title>
      <VideoList></VideoList>
    </div>
  );
};
