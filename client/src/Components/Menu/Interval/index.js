import React, { Component } from 'react';
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


class MainPump extends Component {
    constructor(props){
        super(props);

        this.state={};

        this.handleInput = this.handleInput.bind(this);
    };

    handleInput(e){
        let { name, value } = e.target;
        this.setState({
            ...this.state,
            [this.props.name]: {
                ...this.state[this.props.name],
                [name]: value
            }
        }, () => {
            this.props.handleInput(this.state);
        });
    }

    render() {
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
                            <Input className='input-style' name='run_interval' onChange={this.handleInput}/>
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
                            <Input className='input-style' name='run_period' onChange={this.handleInput} />
                            <small> / Minutes</small>
                        </span>
                    </div>
                </div>
            </div>
        )
    };
}

export default MainPump;