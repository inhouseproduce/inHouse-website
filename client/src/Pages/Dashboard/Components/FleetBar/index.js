import React from 'react';
import './style.css';

import { Icon, Checkbox } from 'antd';

const FleetBar = () => {
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
                        <a>
                            <Icon type='setting' />
                            <Icon type='down' style={{ fontSize: '10px', paddingLeft: '.25rem' }} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default FleetBar;