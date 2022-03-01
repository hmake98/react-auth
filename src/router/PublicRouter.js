import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { routes } from '.';
import { useAuth } from '../utils/index';

const PublicRoute = ({ isRestricted, element: Element }) => {
    const isLogin = useAuth();
    if (isLogin && isRestricted) {
        return <Navigate to={routes.home.path} />
    }
    return <Element /> 
};

export default PublicRoute;