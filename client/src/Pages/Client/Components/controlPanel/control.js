import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

class Control extends Component {
    state = {
        pump: false,
        irrigation: false,
        lights: false,
        reset: false
    };

    render() {
        const styles = {
            base: {
                height: '150px',
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
                status: this.state.pump,
                bttnStatus: this.state.pump ? 'primary' : 'danger'

            },
            {
                context: 'irrigation',
                style: { ...styles.bb, ...styles.base },
                status: this.state.irrigation ? 'on' : 'off',
                bttnStatus: this.state.irrigation ? 'primary' : 'danger'
            },
            {
                context: 'lights',
                style: { ...styles.br, ...styles.base },
                status: this.state.lights,
                bttnStatus: this.state.lights ? 'primary' : 'danger'
            },
            {
                context: 'reset',
                style: { ...styles.base },
                status: this.state.reset,
                bttnStatus: this.state.reset ? 'primary' : 'danger'
            }
        ];

        const onPress = context => {
            this.setState({
                [context]: !this.state[context]
            });
        };

        return (
            <Row>
                {(controlList || []).map(item => (
                    <Col xs={{ span: 6 }} className='p-0'>
                        <div style={item.style}>
                            <p className='p-3'>{item.context} : {item.status}</p>
                            <div className='text-center'>
                                <Button variant={item.bttnStatus} onClick={() => onPress(item.context)} size='lg'>
                                    {item.context}
                                </Button>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        )
    }
}

export default Control;