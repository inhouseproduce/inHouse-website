import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardPage = React.lazy(() => import('./Pages/Dashboard'));
const ClientPage = React.lazy(() => import('./Pages/Client'));

const routes = [
    { path: '/dashboard', exact: true, name: 'Dashboard Page', component: DashboardPage },
    { path: '/client', exact: true, name: 'Client Page', component: ClientPage },
];

export default routes;