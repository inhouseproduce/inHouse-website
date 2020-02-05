import React from 'react';

const Auth = React.lazy(() => import('./Pages/Authentication'));

const route = [
    { path: '/auth', exact: true, name: 'auth', component: Auth }
];

export default route;