import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardPage = React.lazy(() => import('./View/Dashboard'));
const ClientPage = React.lazy(() => import('./View/Client'));

const routes = [
    { path: '/dashboard', exact: true, private: true, name: 'Dashboard Page', component: DashboardPage },
    { path: '/client/:id', exact: true, private: true, name: 'Client Page', component: ClientPage },
];

export default routes;