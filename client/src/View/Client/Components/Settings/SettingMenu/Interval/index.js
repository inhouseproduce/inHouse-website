import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Icon, Input, Popover } from 'antd';

class Interval extends Component {
    handleInput = event => {
        let { name, value } = event.target;
        this.setState({
            [name]: value
        },
            () => {
                this.props.handleInput({
                    [this.props.each]: this.state
                });
            });
    };

    render() {
        return (
            <Col>
                <Row className='py-1'>
                    <Col xs={2}>
                        <Popover content={'help'} title='Time Interval'>
                            <a><Icon type='info-circle' /></a>
                        </Popover>
                    </Col>
                    <Col xs={10}>
                        <Input onChange={this.handleInput} name='time_interval' placeholder='Time Interval' />
                    </Col>
                </Row>
                <Row className='py-1'>
                    <Col xs={2}>
                        <Popover content={'help'} title='Run Period'>
                            <a><Icon type='info-circle' /></a>
                        </Popover>
                    </Col>
                    <Col xs={10}>
                        <Input onChange={this.handleInput} name='run_period' placeholder='Run period' />
                    </Col>
                </Row>
            </Col>
        );
    };
};

export default Interval;

