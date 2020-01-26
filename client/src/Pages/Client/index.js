import React, { Component } from 'react';

import { Row, Col, Card, Tabs, Tab } from 'react-bootstrap';
import Aux from '../../hoc/_Aux';

import AmChartStatistics7 from './AmChartStatistics7';
import AmChartReplay from './AmChartReplay';
import GaugeChart from './GaugeChart';

class Client extends Component {

    render() {
        const statistics = (
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as='h5'>Statistics</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <AmChartStatistics7 />
                            <div className="row">
                                <div className="col-sm-12 pt-2 pb-2">
                                    <span className="mr-3"><i className="feather icon-circle text-c-green  mr-2" />page Views</span>
                                    <span className="float-right">15.5 %</span>
                                </div>
                                <div className="col-sm-12 pt-2 pb-2">
                                    <span className="mr-3"><i className="feather icon-circle text-c-blue  mr-2" />page Clicks</span>
                                    <span className="float-right">23.5 %</span>
                                </div>
                                <div className="col-sm-12 pt-2">
                                    <span className="mr-3"><i className="feather icon-circle text-c-purple  mr-2" />page Likes</span>
                                    <span className="float-right">36.3 %</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col >
                    <Card>
                        <Card.Header>
                            <Card.Title as='h5'>Statistics</Card.Title>
                        </Card.Header>
                        <AmChartReplay height='320px' />
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Gauge Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <GaugeChart />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        );

        const tabContent = (
            <Aux>
                <Col xl={12} className='m-b-30'>
                    <Tabs defaultActiveKey='General' id='uncontrolled-tab-example'>
                        <Tab eventKey='General' title='General'>
                            <h1>General</h1>
                        </Tab>
                        <Tab eventKey='statistics' title='statistics'>
                            {statistics}
                        </Tab>
                        <Tab eventKey='module-3' title='module-3'>
                            {statistics}
                        </Tab>
                    </Tabs>
                </Col>
            </Aux>
        );

        return (
            <Aux>
                <Row>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title className='m-0'>Overdue Tasks</Card.Title>
                            </Card.Header>
                            <Card.Body className='border-bottom'>
                                <div className='row align-items-center'>
                                    <div className='col-8'>
                                        <h2 className='f-w-300 m-0'>34</h2>
                                        <span className='text-muted'>Last Week 60%</span>
                                    </div>
                                    <div className='col-4 text-right'>
                                        <h5 className='text-c-red f-w-400'>10%</h5>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title className='m-0'>Tasks to Do</Card.Title>
                            </Card.Header>
                            <Card.Body className='border-bottom'>
                                <div className='row align-items-center'>
                                    <div className='col-8'>
                                        <h2 className='f-w-300 m-0'>25</h2>
                                        <span className='text-muted'>Last Week 40%</span>
                                    </div>
                                    <div className='col-4 text-right'>
                                        <h5 className='text-c-green f-w-400'>30%</h5>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card>
                            <Card.Header>
                                <Card.Title className='m-0'>Completed Task</Card.Title>
                            </Card.Header>
                            <Card.Body className='border-bottom'>
                                <div className='row align-items-center'>
                                    <div className='col-8'>
                                        <h2 className='f-w-300 m-0'>19</h2>
                                        <span className='text-muted'>Last Week 60%</span>
                                    </div>
                                    <div className='col-4 text-right'>
                                        <h5 className='text-c-red f-w-400'>25%</h5>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={12} className='m-b-30'>
                        <Tabs defaultActiveKey='module-1' id='uncontrolled-tab-example'>
                            <Tab eventKey='module-1' title='module-1'>
                                {tabContent}
                            </Tab>
                            <Tab eventKey='module-2' title='module-2'>
                                {tabContent}
                            </Tab>
                            <Tab eventKey='module-3' title='module-3'>
                                {tabContent}
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Aux>
        )
    };
};

export default Client;