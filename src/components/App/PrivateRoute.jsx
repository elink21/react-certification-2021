import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSessionStorage } from '../Custom Hooks/useSessionStorage';

export const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props;
  const [isLogged, setIsLogged] = useSessionStorage('isLogged', '');

  const render = (props) => {
    if (!isLogged) {
      return <Redirect to="/"></Redirect>;
    }

    return <Component {...props}></Component>;
  };

  return <Route {...rest} render={render}></Route>;
};
