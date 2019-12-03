import React from 'react';
import './style.css';

import { Icon, Badge } from 'antd';

const BodyHeader = () => {
    return (
        <div className='dashboard-body-header'>
            <span>
                <Icon type='setting' className='dashboard-icon-style' />
            </span>
            <span>
                <Badge dot={true}>
                    <Icon type='schedule' className='dashboard-icon-style' />
                </Badge>
            </span>
            <span>
                <Badge dot={true}>
                    <Icon type='bell' className='dashboard-icon-style' />
                </Badge>
            </span>
        </div>
    )
};

export default BodyHeader;