import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

import { Icon, Divider } from 'antd';

const SideBar = () => {
    return (
        <ul className='dashboard-sidbar'>
            <li>
                <NavLink to="/dashboard">
                    <Icon type='home' />
                </NavLink>
            </li>
                <Divider className='m-0' />
            <li>
                <NavLink to="/x">
                    <Icon type='tool' />
                </NavLink>
            </li>
                <Divider className='m-0' />
            <li>
                <NavLink to='/'>
                    <Icon type='experiment' />
                </NavLink>
            </li>
        </ul>
    )
};

export default SideBar;