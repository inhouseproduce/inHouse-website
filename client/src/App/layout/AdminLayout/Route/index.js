import React, { useContext, Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { AuthContext } from '../../../../Provider/AuthProvider';

export const PrivateRoute = ({ component: RouteComponent, ...props }) => {
    const { currentUser } = useContext(AuthContext);
    return (
        <Route
            {...props}
            render={routeProps => {
                return !!currentUser || !props.private ? (
                    <Suspense fallback={'Loading...'}>
                        <RouteComponent {...routeProps} />
                    </Suspense>
                ) : (
                    <Redirect to={{
                        pathname: '/auth',
                        state: { from: routeProps.location.pathname }
                    }} />
                )
            }}
        />
    )
};