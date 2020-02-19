import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { Row, Col, Button, Card } from 'react-bootstrap';
import { Slider, Switch, Icon } from 'antd';
import Aux from '../../../../hoc/_Aux';

// Actions
import { controlPi } from '../../../../store/actions/pi';

class Control extends Component {
    state = {
        pump: false,
        irrigation: false,
        lights: false,
        reset: false,
        level: 100
    };

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

        const handleLockSwitch = context => {
            this.setState({
                [`${context}Lock`]: !this.state[`${context}Lock`]
            }, () => {
                this.props.piControl({
                    lock: this.state[`${context}Lock`],
                    action: context,
                    id: this.props.match.params.id
                });
            });
        };

        const handleButtonSwitch = context => {
            this.setState({
                [context]: !this.state[context],
            }, () => {
                this.props.piControl({
                    status: this.state[context],
                    action: context,
                    id: this.props.match.params.id
                });
            });
        };

        const pwmLevel = (context, event) => {
            this.setState({ level: event, pivot: true }, () => {
                if (this.state.pivot) {
                    setTimeout(() => { // Deleay for 600 Ms
                        if (!this.state.pivot) {
                            this.props.piControl({
                                status: this.state[context],
                                action: context,
                                level: this.state.level,
                                id: this.props.match.params.id
                            });
                            this.setState({ pivot: true });
                        };
                    }, 600);
                    this.setState({ pivot: false });
                };
            });
        };

        return (
            <Col className='p-0 m-0'>
                <Card className='m-0'>
                    <Card.Header>
                        <Card.Title as='h5'>Control Panel</Card.Title>
                    </Card.Header>
                    <Card.Body>
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
                                                onClick={() => handleButtonSwitch(item.context)}
                                            >
                                                {this.state[item.context] ? 'ON' : 'OFF'}
                                            </Button>
                                        </Col>
                                        <Col className='text-center'>
                                            <Switch
                                                size='small'
                                                onChange={() => handleLockSwitch(item.context)}
                                                checkedChildren={<Icon className='d-block' type='lock' />}
                                                unCheckedChildren={<Icon className='d-block' type='unlock' />}
                                            />
                                        </Col>
                                        <Col>
                                            {item.slider && this.state[item.context] &&
                                                <Aux>
                                                    <b><small>{`Intencity: ${this.state.level}%`}</small></b>
                                                    <Slider onChange={(e) => pwmLevel(item.context, e)} range defaultValue={[this.state.level]} />
                                                </Aux>
                                            }
                                        </Col>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        piControl: e => dispatch(controlPi(e))
    };
};

export default withRouter(connect(null, mapDispatchToProps)(Control));