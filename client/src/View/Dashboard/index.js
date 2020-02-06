import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card } from 'react-bootstrap';

import Aux from '../../hoc/_Aux';
import ClientList from './Components/ClientList';

// Actions
import { getClientList } from '../../store/actions/get';

class Dashboard extends Component {

    componentDidMount() {
        this.props.GetClientList();
    }

    render() {
        return (
            <Aux>
                <Row>
                    <Col md={4} sm={6}>
                        <Card className='user-card'>
                            <Card.Body>
                                <h5 className='m-b-15'>Register User</h5>
                                <h4 className='f-w-300'>1205</h4>
                                <span className='text-muted'><label className='label theme-bg text-white f-12 f-w-400'>20%</label>Monthly Increase</span>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={6}>
                        <Card className='user-card'>
                            <Card.Body>
                                <h5 className='f-w-400 m-b-15'>Daily User</h5>
                                <h4 className='f-w-300'>467</h4>
                                <span className='text-muted'><label className='label theme-bg text-white f-12 f-w-400'>10%</label>Weekly Increase</span>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='user-card'>
                            <Card.Body>
                                <h5 className='f-w-400 m-b-15'>Premium User</h5>
                                <h4 className='f-w-300'>346</h4>
                                <span className='text-muted'><label className='label theme-bg text-white f-12 f-w-400'>50%</label>Yearly Increase</span>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={12}>
                        <Card>
                            <ClientList list={this.props.clientList} />
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    };
};


const mapStateToProps = state => {
    return {
        clientList: state.clientList
    }
};

const mapDispatchToProps = dispatch => {
    return {
        GetClientList: e => dispatch(getClientList(e)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);