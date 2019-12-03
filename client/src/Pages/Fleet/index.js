import React from 'react';
import './style.css';

import { Icon, Button } from 'antd';

import Header from '../../Components/Headers/MainHeader';
import SideMenu from './Components/SideMenu';

const FleetPage = () => {
    return (
        <div className='fleet-view-container'>
            <div className='fleet-view-inner'>
                <Header/>
                <div className='fleet-body-header-container'>
                    <div className='fleet-body-header-inner'>
                        <a href='/dashboard'>
                            <Button size='small'><Icon type='caret-left'/>Go Back</Button>
                        </a>
                    </div>
                </div>
                <div className='fleet-body-container'>
                    <div className='fleet-body-inner'>
                        <div className='col-md-4 col-lg-3'>
                            <SideMenu/>
                        </div>
                        <div className='col-12 col-md-8 col-lg-9'>
                            <div className='fleet-contant-container'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FleetPage;