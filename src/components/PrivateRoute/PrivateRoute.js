import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    // const {children, ...rest} = props;
    const {user} = useAuth();
    return (
        <Route
        {...rest}
        render={({location})=> user.email ? children : <Redirect to={{pathname: '/register',
    state: {from: location}}}></Redirect>}
        > 
        </Route>
    );
};

export default PrivateRoute;