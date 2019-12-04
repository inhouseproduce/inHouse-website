import React, { Component } from 'react';

import { Icon, Input, Select, Button } from 'antd';
const { Option } = Select;

class clock extends Component {
    state = {
        clock: ['']
    }

    render() {
        const addClockArr = () => {
            let arr = this.state.clock;
            arr.push('1')
            this.setState({ clock: arr })
        };

        return (
            <div className='clock-menu-container'>
                <div className='clock-menu-inner'>
                    <div className='clock-menu-add-button'>
                        <div className='col-12 px-3 p-2'>
                            <Button type='primary' onClick={addClockArr}>
                                <Icon type='plus' />Add an action
                            </Button>
                        </div>
                    </div>
                    <div className='clock-menu-options-container'>
                        {(this.state.clock || []).map((item,i) => {
                            return (
                                <div key={i} className='clock-menu-option-list'>
                                    <span><b> {i+1} </b></span>
                                    <span>
                                        <Input className='input-style' />
                                        <Select defaultValue='Switch'>
                                            <Option value='Switch'>Switch</Option>
                                            <Option value='Dimming'>Dimmgin</Option>
                                        </Select>
                                    </span>
                                    <span>
                                        <Select defaultValue='On'>
                                            <Option value='On'>On</Option>
                                            <Option value='Off'>Off</Option>
                                        </Select>
                                    </span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
};

export default clock;