import React, { useContext } from 'react';

import styled from 'styled-components';
import Switch from '@material-ui/core/Switch';
import GlobalContext from '../context/GlobalContext';

const AppHeader = styled.div`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.color};
  font-size: 40px;
  display: grid;
  align-items: center;
  padding-left: 2em;
  font-size: 16px;
  grid-template-columns: 1fr 2fr 8fr 2fr 2fr;
`;

const MenuIcon = styled.span`
  padding: 0px;
  font-size: 30px;
  cursor: pointer;
`;

const SearchBar = styled.input`
  border-radius: 5px;
  padding: 10px;
  background: ${(props) => props.theme.primaryLight};
  color: ${(props) => props.theme.searchBarFontColor};
  font-size: 16px;
  border: none;

  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.9;
  }
`;

const ToggleButton = styled.div``;

const LoginButton = styled.span`
  cursor: pointer;
`;

export const Header = () => {
  const globalContext = useContext(GlobalContext);

  /*Passing theme to all styled components */
  SearchBar.defaultProps = {
    theme: globalContext.theme,
  };
  AppHeader.defaultProps = {
    theme: globalContext.theme,
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const valueToSearch = event.target.value;
      globalContext.getVideos('search', valueToSearch);
      globalContext.setSearchTerm(valueToSearch);
    }
  };

  return (
    <AppHeader>
      <MenuIcon className="material-icons">menu</MenuIcon>

      <SearchBar
        onKeyDown={handleKeyDown}
        placeholder="Search..."
        placeholderTextColor="green"
        id="searchTerm"
      ></SearchBar>

      <div></div>

      <ToggleButton>
        <Switch
          name="checkedTheme"
          inputProps={{ 'aria-label': 'default color checkbox' }}
          color="primary"
          onChange={(e) => globalContext.setTheme(e.target.checked)}
        />

        <span>Dark mode</span>
      </ToggleButton>
      <LoginButton className="material-icons">account_circle</LoginButton>
    </AppHeader>
  );
};
