
import React from 'react';
import { Navigate } from 'react-router-dom';
import { routes } from '.';
import { useAuth } from '../utils';

const PrivateRoute = ({ element: Element }) => {
    const isLogin = useAuth();
    if (!isLogin) {
        return <Navigate to={routes.login.path} />
    }
    return <Element />
};

export default PrivateRoute;