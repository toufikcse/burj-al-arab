import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const RivateRoute = ({children, ...rest}) => {
    const {user} = useAuth();
    const location = useLocation();
    if (!user.email) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RivateRoute;