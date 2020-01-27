import React, { Component } from 'react';
import { Row, Col, Card, Table, Tabs, Tab } from 'react-bootstrap';

import Aux from '../../hoc/_Aux';
import DEMO from '../../store/constant';

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';

class WdgtTable extends Component {
    render() {
        const tabContent = (
            <Aux>
                <div className='media friendlist-box align-items-center justify-content-center m-b-20'>
                    <div className='m-r-10 photo-table'>
                        <a href={DEMO.BLANK_LINK}><img className='rounded-circle' style={{ width: '40px' }} src={avatar1} alt='activity-user' /></a>
                    </div>
                    <div className='media-body'>
                        <h6 className='m-0 d-inline'>Silje Larsen</h6>
                        <span className='float-right d-flex  align-items-center'><i className='fa fa-caret-up f-22 m-r-10 text-c-green' />3784</span>
                    </div>
                </div>
                <div className='media friendlist-box align-items-center justify-content-center m-b-20'>
                    <div className='m-r-10 photo-table'>
                        <a href={DEMO.BLANK_LINK}><img className='rounded-circle' style={{ width: '40px' }} src={avatar2} alt='activity-user' /></a>
                    </div>
                    <div className='media-body'>
                        <h6 className='m-0 d-inline'>Julie Vad</h6>
                        <span className='float-right d-flex  align-items-center'><i className='fa fa-caret-up f-22 m-r-10 text-c-green' />3544</span>
                    </div>
                </div>
                <div className='media friendlist-box align-items-center justify-content-center m-b-20'>
                    <div className='m-r-10 photo-table'>
                        <a href={DEMO.BLANK_LINK}><img className='rounded-circle' style={{ width: '40px' }} src={avatar3} alt='activity-user' /></a>
                    </div>
                    <div className='media-body'>
                        <h6 className='m-0 d-inline'>Storm Hanse</h6>
                        <span className='float-right d-flex  align-items-center'><i className='fa fa-caret-down f-22 m-r-10 text-c-red' />2739</span>
                    </div>
                </div>
                <div className='media friendlist-box align-items-center justify-content-center m-b-20'>
                    <div className='m-r-10 photo-table'>
                        <a href={DEMO.BLANK_LINK}><img className='rounded-circle' style={{ width: '40px' }} src={avatar1} alt='activity-user' /></a>
                    </div>
                    <div className='media-body'>
                        <h6 className='m-0 d-inline'>Frida Thomse</h6>
                        <span className='float-right d-flex  align-items-center'><i className='fa fa-caret-down f-22 m-r-10 text-c-red' />1032</span>
                    </div>
                </div>
                <div className='media friendlist-box align-items-center justify-content-center m-b-20'>
                    <div className='m-r-10 photo-table'>
                        <a href={DEMO.BLANK_LINK}><img className='rounded-circle' style={{ width: '40px' }} src={avatar2} alt='activity-user' /></a>
                    </div>
                    <div className='media-body'>
                        <h6 className='m-0 d-inline'>Silje Larsen</h6>
                        <span className='float-right d-flex  align-items-center'><i className='fa fa-caret-up f-22 m-r-10 text-c-green' />8750</span>
                    </div>
                </div>
                <div className='media friendlist-box align-items-center justify-content-center'>
                    <div className='m-r-10 photo-table'>
                        <a href={DEMO.BLANK_LINK}><img className='rounded-circle' style={{ width: '40px' }} src={avatar3} alt='activity-user' /></a>
                    </div>
                    <div className='media-body'>
                        <h6 className='m-0 d-inline'>Storm Hanse</h6>
                        <span className='float-right d-flex  align-items-center'><i className='fa fa-caret-down f-22 m-r-10 text-c-red' />8750</span>
                    </div>
                </div>
            </Aux>
        );

        return (
            <Aux>
                <Row>
                    <Col xl={8}>
                        <Card className='User-Activity'>
                            <Card.Header>
                                <Card.Title as='h5'>User Activity</Card.Title>
                            </Card.Header>
                            <Card.Body className='pb-0'>
                                <Table responsive hover>
                                    <thead>
                                        <tr>
                                            <th>Client</th>
                                            <th>Activity</th>
                                            <th>Time</th>
                                            <th>Status</th>
                                            <th className='text-right' />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(this.props.list || []).map((client, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td>
                                                        <a href='client'>
                                                            <h6 className='m-0'><img className='rounded-circle m-r-10' style={{ width: '40px' }} src={avatar1} alt='activity-user' />Ida Jorgensen</h6>
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <h6 className='m-0'>The quick brown fox</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className='m-0'>3:28 PM</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className='m-0 text-c-green'>Done</h6>
                                                    </td>
                                                    <td className='text-right'><i className='fa fa-circle text-c-green f-10' /></td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} className='m-b-30'>
                        <Tabs defaultActiveKey='today' id='uncontrolled-tab-example'>
                            <Tab eventKey='today' title='Today'>
                                {tabContent}
                            </Tab>
                            <Tab eventKey='week' title='This Week'>
                                {tabContent}
                            </Tab>
                            <Tab eventKey='all' title='All'>
                                {tabContent}
                            </Tab>
                        </Tabs>
                    </Col>

                </Row>
            </Aux>
        );
    }
}

export default WdgtTable;