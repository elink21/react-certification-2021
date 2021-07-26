import React from 'react';

import styled from 'styled-components';
import Switch from '@material-ui/core/Switch';

const AppHeader = styled.div`
  background-color: #ec407a;
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
  background: #ff77a9;
  color: white;
  font-size: 16px;
  border: none;

  &:focus {
    outline: none;
  }
  &:hover{
      opacity:0.9;
  }
`;

const ToggleButton = styled.div``;


const LoginButton = styled.span`
cursor: pointer;
`;

export const Header = () => {
  return (
    <AppHeader>
      <MenuIcon className="material-icons">menu</MenuIcon>
      <SearchBar placeholder="Search..." placeholderTextColor="green"></SearchBar>
      <div></div>

      <ToggleButton>
        <Switch
          name="checkedTheme"
          inputProps={{ 'aria-label': 'default color checkbox' }}
          color="default"
        />
        <span>Dark mode</span>
      </ToggleButton>
      <LoginButton className="material-icons">account_circle</LoginButton>
    </AppHeader>
  );
};
