import React, { Component } from 'react';
import { withRouter } from 'react-router';

import { Row, Col, Button } from 'react-bootstrap';
import { Slider, Switch, Icon } from 'antd';

class CustomButton extends Component {
    state = {
        pump: false,
        irrigation: false,
        lights: false,
        reset: false,
        level: 100
    };

    componentWillReceiveProps(nextProps) {
        this.controlPanelPresist(nextProps);
    }

    controlPanelPresist = (nextProps) => {
        let logs = nextProps.record.logs.engine;
        Object.keys(logs).map(log => {
            this.setState({
                [log]: logs[log].state
            })
        });
    }

    controlPi = data => {
        this.props.control({
            id: this.props.match.params.id,
            ...data
        });
    }

    handleLockSwitch = context => {
        this.setState({
            [`${context}Lock`]: !this.state[`${context}Lock`]
        }, () => {
            this.controlPi({
                lock: this.state[`${context}Lock`],
                action: context,
            });
        });
    }

    handleButtonSwitch = context => {
        this.setState({
            [context]: !this.state[context],
        }, () => {
            this.controlPi({
                status: this.state[context],
                action: context,
            });
        });
    }

    pwmLevel = (context, event) => {
        this.setState({ level: event, pivot: true }, () => {
            if (this.state.pivot) {
                setTimeout(() => { // Deleay for 600 Ms
                    if (!this.state.pivot) {
                        this.controlPi({
                            status: this.state[context],
                            action: context,
                            level: this.state.level,
                        });
                        this.setState({ pivot: true });
                    };
                }, 600);
                this.setState({ pivot: false });
            };
        });
    }

    render() {
        const styles = {
            base: {
                height: '180px',
                boxShadow: '0 3px 10px 0 rgba(0, 0, 0, 0.05)'
            },
            bb: {
                borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
            },
            br: {
                borderRight: '1px solid rgba(0, 0, 0, 0.05)',
            },
        };

        const controlList = [
            {
                context: 'pump',
                style: { ...styles.bb, ...styles.br, ...styles.base },
                bttnStatus: this.state.pump ? 'primary' : 'danger'

            },
            {
                context: 'irrigation',
                style: { ...styles.bb, ...styles.base },
                bttnStatus: this.state.irrigation ? 'primary' : 'danger'
            },
            {
                context: 'lights',
                style: { ...styles.br, ...styles.base },
                bttnStatus: this.state.lights ? 'primary' : 'danger',
                slider: true
            },
            {
                context: 'reset',
                style: { ...styles.base },
                bttnStatus: this.state.reset ? 'primary' : 'danger'
            }
        ];

        return (
            <Row>
                {(controlList || []).map((item, i) => (
                    <Col xs={{ span: 6 }} key={i} className='p-0'>
                        <div style={item.style}>
                            <Col>
                                <b><p className='py-3 text-center'>{item.context}</p></b>
                            </Col>
                            <Col className='text-center'>
                                <Button
                                    size='lg' variant={item.bttnStatus}
                                    onClick={() => this.handleButtonSwitch(item.context)}
                                >
                                    {this.state[item.context] ? 'ON' : 'OFF'}
                                </Button>
                            </Col>
                            <Col className='text-center'>
                                <Switch
                                    size='small'
                                    checked={this.state[`${item.context}Lock`]}
                                    onChange={() => this.handleLockSwitch(item.context)}
                                    checkedChildren={<Icon className='d-block' type='lock' />}
                                    unCheckedChildren={<Icon className='d-block' type='unlock' />}
                                />
                            </Col>
                            <Col>
                                {item.slider && this.state[item.context] &&
                                    <>
                                        <b><small>{`Intencity: ${this.state.level}%`}</small></b>
                                        <Slider onChange={(e) => this.pwmLevel(item.context, e)} range defaultValue={[this.state.level]} />
                                    </>
                                }
                            </Col>
                        </div>
                    </Col>
                ))}
            </Row>
        )
    };
};

export default withRouter(CustomButton);