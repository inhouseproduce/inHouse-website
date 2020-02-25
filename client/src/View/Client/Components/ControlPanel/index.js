import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Card } from 'react-bootstrap';

// Action
import { controlPi } from '../../../../store/actions/pi';

// Component
import PanelLayout from './PanelLayout';

const Control = props => {
    return (
        <Col className='p-0 m-0'>
            <Card className='m-0'>
                <Card.Header>
                    <Card.Title as='h5'>Control Panel</Card.Title>
                </Card.Header>
                <Card.Body>
                    <PanelLayout
                        info={props.info}
                        control={props.ControlPi} />
                </Card.Body>
            </Card>
        </Col>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        ControlPi: e => dispatch(controlPi(e)),
    };
};

export default connect(null, mapDispatchToProps)(Control);