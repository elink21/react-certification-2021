import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { NavBar } from './NavBar';
import styled from 'styled-components';
import Switch from '@material-ui/core/Switch';
import GlobalContext from '../context/GlobalContext';
import { useSessionStorage } from '../Custom Hooks/useSessionStorage';
import { useHistory } from 'react-router';
import user from '../Login/users.json';
import { Power4, gsap } from 'gsap';
import { red } from '@material-ui/core/colors';
import { useRef } from 'react';
import { useEffect } from 'react';

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
const AvatarContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
`;
const Avatar = styled.img`
  max-width: 50px;
  border-radius: 50%;
`;

const ToggleButton = styled.div``;

const LoginButton = styled.span`
  cursor: pointer;
`;

export const Header = () => {
  const globalContext = useContext(GlobalContext);
  const [showNavBar, setShowNavBar] = useState(false);
  const [isLogged, setIsLogged] = useSessionStorage('isLogged', '');
  const history = useHistory();

  /*GSAP NavBar animation*/
  const navbar = document.querySelector('.navbar');

  const timeline = gsap.timeline({
    defaults: {
      duration: 0.5,
      ease: Power4.easeInOut,
    },
  });

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
      history.push('/');
    }
  };

  const closeNavBar = () => {
    console.log('reversed');
    timeline.to(navbar, {
      x: -300,
      opacity: 0,
    });
  };

  const [switchState, setSwitchState] = useState(false);

  useEffect(() => {
    if (globalContext.storageTheme === 'dark') {
      setSwitchState(true);
    }
  }, []);

  return (
    <AppHeader>
      <MenuIcon
        onClick={(e) => {
          timeline.to(navbar, {
            x: 300,
            opacity: 1,
          });
        }}
        className="material-icons"
      >
        menu
      </MenuIcon>
      <NavBar closeNavBar={closeNavBar}></NavBar>

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
          onChange={(e) => {
            console.log(globalContext.theme);
            globalContext.setTheme(e.target.checked ? 'dark' : 'light');
            setSwitchState(!switchState);
          }}
          checked={switchState}
        />

        <span>Dark mode</span>
      </ToggleButton>
      {!isLogged && (
        <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
          <LoginButton className="material-icons">account_circle</LoginButton>
        </Link>
      )}

      {isLogged && (
        <AvatarContainer>
          <Avatar src={user.avatarUrl} alt="" />
          <LoginButton
            onClick={() => {
              setIsLogged(false);
              window.location = '/';
            }}
            className="material-icons"
          >
            logout
          </LoginButton>
        </AvatarContainer>
      )}
    </AppHeader>
  );
};
