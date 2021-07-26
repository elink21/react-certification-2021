import React from 'react';
import styled from 'styled-components';
import {Header} from './Header';

const MainContainer = styled.div`
  height: 100vh;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 11fr;
`;



const VideosContainer = styled.div`
display: grid;
grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
`;

export const MainView = () => {
  return (
    <MainContainer>
      <Header></Header>

      <VideosContainer></VideosContainer>
    </MainContainer>
  );
};
