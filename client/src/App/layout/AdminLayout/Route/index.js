import React, { useContext, Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Loading from '../../../../Components/Loading';

import { AuthContext } from '../../../../Provider/Auth';

export const PrivateRoute = ({ component: RouteComponent, ...props }) => {
    const { currentUser } = useContext(AuthContext);
    return (
        <Route
            {...props}
            render={routeProps => {
                return !!currentUser || !props.private ? (
                    <Suspense fallback={<Loading />}>
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