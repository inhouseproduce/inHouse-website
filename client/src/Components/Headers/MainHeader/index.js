import React, { Component } from 'react';
import { Menu, Dropdown, Icon, Button } from 'antd';
import './style.css';

import logoImage from '../../../Static/images/logo.png';
import menu from './ClientMenu';

class Header extends Component {
    render(){
        return(
            <div className='main-header-container'>
                <div className='main-header-inner'>
                    <div className='main-header-logo-wrapper'>
                        <img src={ logoImage }/>
                    </div>
                </div>
                <div className='right-side-options'>
                    <div className='main-header-dropdowns'>
                        <div className='main-header-dropdowns-inner'>
                            <span className='px-2'>
                                <Dropdown overlay={menu}>
                                    <span className="ant-dropdown-link" href="#">
                                        options<Icon type="down" />
                                    </span>
                                </Dropdown>
                            </span>
                        </div>
                    </div>
                    <div className='main-header-stat-bttn'>
                        <div className='main-header-stat-bttn-inner'>
                            <Button>
                                <Dropdown overlay={menu}>
                                    <span className="ant-dropdown-link" href="#">
                                        Admin<Icon type="down" />
                                    </span>
                                </Dropdown>
                            </Button>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
};

export default Header;