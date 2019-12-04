import React from 'react';
import './style.css';

import { Menu, Dropdown, Icon, Checkbox } from 'antd';

const FleetBar = props => {

    const settingMenu = () => (
        <Menu>
            <Menu.Item key='0' onClick={props.modalSwitch}>
                <a>Add new device</a>
            </Menu.Item>
            <Menu.Item key='1'>
                <a>Delete selected</a>
            </Menu.Item>
        </Menu>
    );

    return (
        <div className='fleet-bar-container'>
            <div className='fleet-bar-inner'>
                <ul className='fleet-content'>
                    <li>
                        <Checkbox />
                    </li>
                    <li>
                        <small>Status</small>
                    </li>
                    <li>
                        <small>Images</small>
                    </li>
                    <li>
                        <small>Name</small>
                    </li>
                    <li>
                        <small>Location</small>
                    </li>
                    <li>
                        <Dropdown overlay={settingMenu} trigger={['click']}>
                            <a className='ant-dropdown-link' href='#'>
                                <Icon type='setting' />
                                <Icon type='down' className='font-10px pl-1' />
                            </a>
                        </Dropdown>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default FleetBar;