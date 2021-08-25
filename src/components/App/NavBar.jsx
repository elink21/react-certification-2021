import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GlobalContext from '../context/GlobalContext';

const NavBarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 15vw;
  height: 90vh;
  margin: 0;
  border: 1px solid black;
  background-color: ${(props) => props.theme.primary}  ;
  color: white;
  padding: 10px;
  font-size: 18px;
`;

const LinkWrapper = styled.div`
  border-top: 1px solid wheat;
  padding: 10px;
`;

const CloseButton = styled.div`
  cursor: pointer;
`;

export const NavBar = (props) => {
  const globalContext = useContext(GlobalContext);
  NavBarWrapper.defaultProps = {
    theme: globalContext.theme,
  };
  return (
    <NavBarWrapper>
      <LinkWrapper>
        <Link style={{ textDecoration: 'none', color:'white' }} to="/">
          Home
        </Link>
      </LinkWrapper>
      <br />

      <LinkWrapper>
        <Link style={{ textDecoration: 'none', color:'white' }} to="/favoriteVideos">
          Favorite videos
        </Link>
      </LinkWrapper>

      <LinkWrapper>
        <CloseButton onClick={() => props.setShowNavBar(false)}>Close ❌</CloseButton>
      </LinkWrapper>
    </NavBarWrapper>
  );
};
