import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Col, Card } from 'react-bootstrap';

// Action
import { controlPi, getEngineState } from '../../../../store/actions/pi';

// Component
import PanelLayout from './PanelLayout';

class Control extends Component {
    componentDidMount() {
        let client = this.props.match.params.id;
        this.props.GetEngineState(client);
    }

    render() {
        return (
            <Col className='p-0 m-0'>
                <Card className='m-0'>
                    <Card.Header>
                        <Card.Title as='h5'>Control Panel</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <PanelLayout control={this.props.ControlPi} />
                    </Card.Body>
                </Card>
            </Col>
        )
    };
};

const mapDispatchToProps = dispatch => {
    return {
        ControlPi: e => dispatch(controlPi(e)),
        GetEngineState: e => dispatch(getEngineState(e))
    };
};

export default withRouter(connect(null, mapDispatchToProps)(Control));