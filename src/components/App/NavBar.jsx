import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GlobalContext from '../context/GlobalContext';
import { useSessionStorage } from '../Custom Hooks/useSessionStorage';

const NavBarWrapper = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: -300px;
  width: 200px;
  height: 90vh;
  border-radius: 10px;
  margin: 0;
  background-color: ${(props) => props.theme.primary};
  color: white;
  padding: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  font-size: 18px;
`;

const LinkWrapper = styled.div`
  border-top: 1px solid wheat;
  padding: 10px;
`;

const ReturnIcon = styled.i`
  text-align: center;
  font-size: 30px;
`;

export const NavBar = (props) => {
  const globalContext = useContext(GlobalContext);

  NavBarWrapper.defaultProps = {
    theme: globalContext.theme,
  };

  const [isLogged, setIsLogged] = useSessionStorage('isLogged', '');
  return (
    <NavBarWrapper className="navbar">
      <LinkWrapper>
        <div
          onClick={() => props.closeNavBar()}
          style={{ textAlign: 'center', cursor: 'pointer' }}
        >
          <ReturnIcon className="material-icons">arrow_back</ReturnIcon>
        </div>
      </LinkWrapper>
      <LinkWrapper>
        <Link style={{ textDecoration: 'none', color: 'white' }} to="/">
          Home
        </Link>
      </LinkWrapper>
      <br />
      {isLogged && (
        <LinkWrapper>
          <Link style={{ textDecoration: 'none', color: 'white' }} to="/favorites">
            Favorite videos
          </Link>
        </LinkWrapper>
      )}
    </NavBarWrapper>
  );
};
