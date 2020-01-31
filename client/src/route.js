import React from 'react';

const SignIn1 = React.lazy(() => import('./Pages/Authentication'));

const route = [
    { path: '/authentication', exact: true, name: 'Signin 2', component: SignIn1 }
];

export default route;