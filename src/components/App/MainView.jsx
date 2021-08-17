import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { VideoList } from './VideoList';
import { VideoSearchView } from './VideoSearchView';
import GlobalContext from '../context/GlobalContext';

const MainContainer = styled.div`
  height: 100vh;
  padding: 0;
  margin: 0;
  display: grid;
  overflow-x: hidden;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr 11fr;
  gap: 10px;
  background-color: ${(props) => props.theme.primaryLight};
  color: ${(props) => props.theme.color};
`;

const Title = styled.h1`
  text-align: center;
  font-size: 50px;
`;

export const MainView = () => {
  const globalContext = useContext(GlobalContext);
  MainContainer.defaultProps = {
    theme: globalContext.theme,
  };

  const [searchViewEnabled, setSearchViewEnabled] = useState(false);

  useEffect(() => {
    globalContext.getVideos('search', 'wizeline');
    console.log('Effect called');
  }, []);



  const toggleViewMode = (newValue) => {
    setSearchViewEnabled(newValue);
  };


  let ActualView;

  if (searchViewEnabled) {
    ActualView = (
      <VideoSearchView
        toggleFunction={toggleViewMode}
      />
    );
  } else {
    ActualView = (
      <div>
        <Title>Search term: {globalContext.searchTerm}</Title>
        <VideoList
          toggleFunction={toggleViewMode}
        ></VideoList>
      </div>
    );
  }

  return (
    <MainContainer>
      <Header toggleFunction={toggleViewMode} ></Header>
      {ActualView}
    </MainContainer>
  );
};
