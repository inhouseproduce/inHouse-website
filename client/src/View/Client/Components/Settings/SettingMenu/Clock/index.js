import React, { Component } from 'react';

import { Row, Col, Button } from 'react-bootstrap';
import { TimePicker, Input, Select } from 'antd';

import moment from 'moment';
const { Option } = Select;

class clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clockArr: [{
                action: 'on',
                time: '12:00'
            }],
        };
    }

    addClockArr = () => {
        this.state.clockArr.push({
            action: 'on',
            time: '12:00'
        });
        this.setState({
            clockArr: this.state.clockArr
        });
    }

    handleSelect = data => {
        let { value, index, name } = data;

        // Emulate object by index and set to state
        this.state.clockArr[index][name] = value;

        // Set sorted arr to state 
        this.setState({
            clockArr: this.sortAlgorithm(this.state.clockArr)
        });

        // Send clock array back to parent /props
        this.props.handleInput({
            [this.props.each]: this.state.clockArr
        });
    }

    sortAlgorithm = (arr) => {
        function bubbleSort(a, par) {
            var swapped;
            do {
                swapped = false;
                for (var i = 0; i < a.length - 1; i++) {
                    if (a[i][par] > a[i + 1][par]) {
                        var temp = a[i];
                        a[i] = a[i + 1];
                        a[i + 1] = temp;
                        swapped = true;
                    }
                }
            } while (swapped);
        }
        bubbleSort(arr, 'time');
        return arr;
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
                                        <Select className='mx-1' defaultValue='on'
                                            onChange={(opt) => this.handleSelect({
                                                value: opt, index: i, name: 'action'
                                            })}
                                        >
                                            <Option value='on'>On</Option>
                                            <Option value='off'>Off</Option>
                                            <Option value='pwm'>Pwm</Option>
                                        </Select>
                                    </Col>
                                    <Col className='p-0' xs={7} sm={8}>
                                        <TimePicker
                                            defaultValue={moment('12:00', 'HH:mm')} format={'HH:mm'}
                                            onChange={(tm, tms) => this.handleSelect({
                                                value: tms, index: i, name: 'time'
                                            })}
                                        />
                                    </Col>
                                    <Col className='p-0' xs={2} sm={2}>
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