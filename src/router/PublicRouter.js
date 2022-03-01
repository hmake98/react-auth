import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { routes } from '.';
import { useAuth } from '../utils/index';

const PublicRoute = ({ isRestricted, element, path }) => {
    const isLogin = useAuth();
    console.log(isRestricted, path);
    if (isLogin && isRestricted) {
        return <Navigate to={routes.home.path} />
    }
    return <Route path={path} element={element} />
};

export default PublicRoute;