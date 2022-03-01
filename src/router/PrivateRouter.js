
import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { routes } from '.';
import { useAuth } from '../utils';

const PrivateRoute = ({ element, path }) => {
    const isLogin = useAuth();
    console.log(path);
    if (!isLogin) {
        return <Navigate to={routes.login.path} />
    }
    return <Route path={path} element={element} />
};

export default PrivateRoute;