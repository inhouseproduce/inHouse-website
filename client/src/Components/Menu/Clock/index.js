import React, { Component } from 'react';

import { Icon, Input, Select, Button } from 'antd';
const { Option } = Select;

class clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clock: [''],
            clockArr: [{}],
        };

        this.selectOption = this.selectOption.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.addClockArr = this.addClockArr.bind(this);
    }

    addClockArr() {
        // If required index not exists push new (empty) object
        let defaultOpt = {
            action: 'on'
        };
        this.state.clockArr.push(defaultOpt);
        this.setState({
            clockArr: this.state.clockArr
        });
    }

    handleInput(e, i) {
        let { name, value } = e.target;

        // Emulate object in specified index
        this.state.clockArr[i][name] = value;
        this.setState({ clockArr: this.state.clockArr });

        // Send clock array back to parent /props
        this.props.handleInput({ [this.props.name]: this.state.clockArr });
    }

    selectOption(value, i) {
        this.state.clockArr[i].action = value;
        this.setState({ clock: this.state.clockArr });
        this.props.handleInput({ [this.props.name]: this.state.clockArr });
    }

    render() {
        return (
            <div className='clock-menu-container'>
                <div className='clock-menu-inner'>
                    <div className='clock-menu-add-button'>
                        <div className='col-12 px-3 p-2'>
                            <Button type='primary' onClick={this.addClockArr}>
                                <Icon type='plus' />Add an action
                            </Button>
                        </div>
                    </div>
                    <div className='clock-menu-options-container'>
                        {(this.state.clockArr || []).map((item, i) => {
                            return (
                                <div key={i} className='clock-menu-option-list'>
                                    <div className='col-12 p-0'>
                                        <span><b> {i + 1} </b></span>

                                        <Input className='input-style' name='time' onChange={(e) => this.handleInput(e, i)} />

                                        <Select style={{width:'80px'}} className='mx-1' defaultValue='on' onChange={(e) => this.selectOption(e, i)}>
                                            <Option value='on'>On</Option>
                                            <Option value='off'>Off</Option>
                                            { this.props.name === 'lighthing' && <Option value='dim'>Dimmgin</Option> }
                                        </Select>
                                        {this.state.clockArr[i].action === 'dim' && this.props.name === 'lighthing' &&
                                            <span>
                                                <Input style={{ width: '70px' }} name='level' placeholder='Brightness' onChange={(e) => this.handleInput(e, i)}/>
                                                <span>%</span>
                                            </span>
                                        }
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    };
};

export default clock;