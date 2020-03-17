import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Icon, Input, Popover } from 'antd';

const IntervalForm = props => {
    const handleInput = e => {
        props.handleInput({
            [props.each]: {
                [e.target.name]: Number(e.target.value)
            }
        });
    };

    let { time_interval, run_period } = props.form[props.each];

    return (
        <Col>
            <Row className='py-1'>
                <Col xs={2}>
                    <Popover content={'help'} title='Time Interval'>
                        <span><Icon type='info-circle' /></span>
                    </Popover>
                </Col>
                <Col xs={9} sm={10}>
                    <Input value={time_interval} onChange={handleInput} name='time_interval' placeholder='Time Interval' />
                </Col>
            </Row>
            <Row className='py-1'>
                <Col xs={2}>
                    <Popover content={'help'} title='Run Period'>
                        <span><Icon type='info-circle' /></span>
                    </Popover>
                </Col>
                <Col xs={9} sm={10}>
                    <Input value={run_period} onChange={handleInput} name='run_period' placeholder='Run period' />
                </Col>
            </Row>
        </Col>
    );
};

export default IntervalForm;

