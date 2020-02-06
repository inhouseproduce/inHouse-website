import React, { Component } from 'react';
import Interval from './Interval';
import Clock from './Clock';

class SettingMenu extends Component {
    render() {
        if (this.props.type === 'interval') {
            return <Interval {...this.props}/>
        }

        else if (this.props.type === 'clock') {
            return <Clock {...this.props} />
        };
    };
};

export default SettingMenu;