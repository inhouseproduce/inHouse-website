import React from 'react';
import './style.css';

import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

const SideMenu = () => {
    const handleClick = e => {
        console.log('click ', e);
    };

    return (
        <Menu
            onClick={handleClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            mode='inline'
        >
            <SubMenu
                key='sub1'
                title={
                    <span>
                        <Icon type='schedule' />
                        <span>Schedule</span>
                    </span>
                }
            >
                <Menu.Item key='1'>Main Pump</Menu.Item>
                <Menu.Item key='2'>Second Pump</Menu.Item>
                <Menu.Item key='3'>Lighting</Menu.Item>
            </SubMenu>

            <SubMenu
                key='sub4'
                title={
                    <span>
                        <Icon type='alert' />
                        <span>Alerts</span>
                    </span>
                }
            >
                <Menu.Item key='4'>Helth</Menu.Item>
                <Menu.Item key='5'>Errors</Menu.Item>
                <Menu.Item key='6'>Test</Menu.Item>
            </SubMenu>

            <SubMenu
                key='sub5'
                title={
                    <span>
                        <Icon type='tags' />
                        <span>Images</span>
                    </span>
                }
            >
                <Menu.Item key='7'>Images</Menu.Item>
                <Menu.Item key='8'>Temperature</Menu.Item>
                <Menu.Item key='9'>Extra Data</Menu.Item>
            </SubMenu>
        </Menu>
    )
};

export default SideMenu;