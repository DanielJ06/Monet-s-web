import React, { useContext } from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactRouteProps,
  Redirect
} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

interface RouteProps extends ReactRouteProps {
  isPrivate ?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ 
    isPrivate = false,
    component: Component,
    ...rest 
  }) => {
  const { user } = useContext(AuthContext);

  return (
    <ReactDOMRoute 
      {...rest} 
      render={() => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: isPrivate ? '/' : '/dashboard' }} />
        )
      }} 
    />
  );
}

export default Route;