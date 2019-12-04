import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

import MainPump from './Menu/MainPump';
import Lighting from './Menu/Lignting';

const { SubMenu } = Menu;

class ConfigMenu extends Component {
    render() {
        return (
            <Menu
                onClick={this.props.handleClick}
                selectedKeys={[]}
                mode="inline"
            >
                <SubMenu
                    key='mainpump'
                    title={
                        <span>
                            <Icon type="appstore" />
                            <span>Main Pump</span>
                        </span>
                    }
                >
                    <MainPump />
                </SubMenu>

                <SubMenu
                    key='lighting'
                    title={
                        <span>
                            <Icon type="appstore" />
                            <span>Lighting</span>
                        </span>
                    }
                >
                    <Lighting />
                </SubMenu>
            </Menu>
        )
    }
};

export default ConfigMenu;