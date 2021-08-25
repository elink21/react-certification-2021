import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import GlobalContext from '../context/GlobalContext';

const LoginButton = styled.button`
  padding: 10px;
  background-color: white;
  border-radius: 5px;
`;
const LoginContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: '. center .';
`;

const LoginForm = styled.div`
  grid-area: center;
  display: grid;
  justify-items: center;
  text-align: center;
  cursor: pointer;
`;

const LoginInput = styled.input`
  border-radius: 5px;
  padding: 10px;
  background: ${(props) => props.theme.primaryLight};
  color: ${(props) => props.theme.searchBarFontColor};
  font-size: 16px;
  border: none;
`;

export const LoginView = () => {
  const globalContext = useContext(GlobalContext);
  LoginInput.defaultProps = {
    theme: globalContext.theme,
  };
  return (
    <LoginContainer>
      <LoginForm>
        <h1>Login view</h1>

        <form autoComplete="nope">
          <LoginInput placeholder="Username" type="text" /> <br /> <br />
          <LoginInput placeholder="Password" type="password" /> <br /> <br />
          <LoginButton>Send</LoginButton>
        </form>
      </LoginForm>
    </LoginContainer>
  );
};
