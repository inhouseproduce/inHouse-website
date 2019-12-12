import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

import Interval from '../../../../../../../Components/Menu/Interval';
import Clock from '../../../../../../../Components/Menu/Clock';

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
                    <Interval name='mainPump' handleInput={this.props.handleInput} />
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
                    <Clock name='lighting' handleInput={this.props.handleInput} />
                </SubMenu>
            </Menu>
        )
    }
};

export default ConfigMenu;