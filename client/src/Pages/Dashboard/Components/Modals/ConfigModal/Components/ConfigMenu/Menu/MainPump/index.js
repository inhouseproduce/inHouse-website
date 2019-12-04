import React from 'react';
import './style.css';

import { Icon, Input, Popover } from 'antd';

const Help = {
    Interval: () => {
        return <div>Turns on every X minutes</div>
    },
    Clock: () => {
        return <div>On for X minutes</div>
    }
};

const MainPump = props => {
    return (
        <div className='main-pump-menu-container'>
            <div className='main-pump-menu-inner'>
                <div className='main-pump-run-interval'>
                    <span>
                        <Popover content={<Help.Interval />} title='Run Interval'>
                            <a><Icon type='info-circle' /></a>
                        </Popover>
                    </span>
                    <span>Run Interval</span>
                    <span>
                        <Input className='input-style' />
                        <small> / Minutes</small>
                    </span>
                </div>
                <div className='main-pump-run-period'>
                    <span>
                        <Popover content={<Help.Clock />} title='On Period'>
                            <a><Icon type='info-circle' /></a>
                        </Popover>
                    </span>
                    <span>On Period</span>
                    <span style={{ paddingLeft: '1.2rem' }}>
                        <Input className='input-style' />
                        <small> / Minutes</small>
                    </span>
                </div>
            </div>
        </div>
    )
};

export default MainPump;