import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Header } from './Header';
import { PlayerView } from './PlayerView';
import { SearchView } from './SearchView';
import GlobalContext from '../context/GlobalContext';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { LoginView } from './LoginView';

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

export const MainView = () => {
  const globalContext = useContext(GlobalContext);
  MainContainer.defaultProps = {
    theme: globalContext.theme,
  };

  const [searchViewEnabled, setSearchViewEnabled] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await globalContext.getVideos('search', 'KOF XV');
    }

    fetchData();
    console.log('Effect called');
  }, []);

  return (
    <BrowserRouter>
      <MainContainer>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <SearchView></SearchView>
          </Route>

          <Route path="/watchVideo">
            <Header></Header>
            <PlayerView></PlayerView>
          </Route>

          <Route path="/login">
            <Header></Header>
            <LoginView></LoginView>
          </Route>
        </Switch>
      </MainContainer>
    </BrowserRouter>
  );
};
