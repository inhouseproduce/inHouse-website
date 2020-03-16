import React from 'react';

import { Row, Col, Button } from 'react-bootstrap';
import { TimePicker, Input, Select } from 'antd';

import moment from 'moment';
const { Option } = Select;

const clock = props => {
    let { each, form } = props;
    let actions = form[each].actions;

    const handleSelectOption = (option, index) => {
        actions[index].action = option;
        props.handleInput({ [each]: actions });
    }

    const handleTimeInput = (time, index) => {
        actions[index].time = time
        props.handleInput({ [each]: actions });
    }

    const addClockArr = actions => {
        // Add to list with default cred.
        actions.push({ action: 'off', time: '12:00' });
        props.handleInput({ [each]: actions });
    }
    return (
        <>
            <Row>
                {(actions || []).map((item, i) => {
                    return (
                        <Col key={i} xs={12}>
                            <Row className='p-1 text-center'>
                                <Col className='p-0' xs={3} sm={2}>
                                    <Select className='mx-1' defaultValue={item.action || 'off'} onChange={(e) => handleSelectOption(e, i)}>
                                        <Option value='on'>On</Option>
                                        <Option value='off'>Off</Option>
                                        <Option value='pwm'>Pwm</Option>
                                    </Select>
                                </Col>
                                <Col className='p-0' xs={7} sm={8}>
                                    <TimePicker onChange={(e, t) => handleTimeInput(t, i)} defaultValue={moment(`${item.time || '12:00'}`, 'HH:mm')} format={'HH:mm'} />
                                </Col>
                                <Col className='p-0' xs={2} sm={2}>
                                    {item.level &&
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
                    <Button size='sm' onClick={() => addClockArr(actions)}>Add time</Button>
                </Col>
            </Row>
        </>
    );
};

export default clock;