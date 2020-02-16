import React, { Component } from 'react';

import { Row, Col, Button } from 'react-bootstrap';
import { TimePicker, Input, Select } from 'antd';

import moment from 'moment';
const { Option } = Select;

class clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clock: [''],
            clockArr: [{}],
        };
    }

    addClockArr = () => {
        // If required index not exists push new (empty) object
        let defaultOpt = {
            action: 'on'
        };
        this.state.clockArr.push(defaultOpt);
        this.setState({
            clockArr: this.state.clockArr
        });
    }

    handleInput = (e, i) => {
        let { name, value } = e.target;

        // Emulate object in specified index
        this.state.clockArr[i][name] = value;
        this.setState({ clockArr: this.state.clockArr });

        // Send clock array back to parent /props
        this.props.handleInput({ [this.props.name]: this.state.clockArr });
    }

    selectOption = (value, i) => {
        this.state.clockArr[i].action = value;
        this.setState({ clock: this.state.clockArr, option: value });
        this.props.handleInput({ [this.props.name]: this.state.clockArr });
    }

    render() {
        return (
            <>
                <Row>
                    {(this.state.clockArr || []).map((item, i) => {
                        return (
                            <Col key={i} xs={12}>
                                <Row className='p-1 text-center'>
                                    <Col className='p-0' xs={3} sm={2}>
                                        <Select className='mx-1' defaultValue='on' onChange={(e) => this.selectOption(e, i)}>
                                            <Option value='on'>On</Option>
                                            <Option value='off'>Off</Option>
                                            <Option value='pwm'>Pwm</Option>
                                        </Select>
                                    </Col>
                                    <Col className='p-0' xs={7} sm={8}>
                                        <TimePicker onChange={e => this.handleInput(e, i)} defaultValue={moment('12:08', 'HH:mm')} format={'HH:mm'} />
                                    </Col>
                                    <Col className='p-0' xs={2} sm={2}>
                                        {console.log('imp checking', this.state.option)}
                                        {this.state.option === 'pwm' &&
                                            <Input placeholder='%' />
                                        }
                                    </Col>
                                </Row>
                            </Col>
                        )
                    })}
                </Row>
                <Row className='p-3'>
                    <Col className='text-right'>
                        <Button size='sm' onClick={this.addClockArr}>Add time</Button>
                    </Col>
                </Row>
            </>
        );
    };
};

export default clock;