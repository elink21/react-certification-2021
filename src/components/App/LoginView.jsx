import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import GlobalContext from '../context/GlobalContext';
import { useSessionStorage } from '../Custom Hooks/useSessionStorage';
import loginApi from '../Login/login.api';

const LoginButton = styled.button`
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
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
  border: 2px solid ${(props) => props.theme.primary};
`;

export const LoginView = () => {
  const globalContext = useContext(GlobalContext);
  const [isLogged, setIsLogged] = useSessionStorage('isLogged', false);

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function mockupLogin() {
    if (loginApi(userName, password)) {
      setIsLogged(true);
      alert("You're in");
      window.location = '/';
    }
  }

  LoginInput.defaultProps = {
    theme: globalContext.theme,
  };
  return (
    <LoginContainer>
      <LoginForm>
        <h1>Login view</h1>

        <form>
          <LoginInput
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
            type="text"
          />{' '}
          <br /> <br />
          <LoginInput
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />{' '}
          <br /> <br />
          <LoginButton
            onClick={(e) => {
              e.preventDefault();
              mockupLogin();
            }}
          >
            Send
          </LoginButton>
        </form>
      </LoginForm>
    </LoginContainer>
  );
};
