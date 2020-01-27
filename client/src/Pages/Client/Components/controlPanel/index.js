import React, { Component } from 'react';

import { Row, Col, Card, Tabs, Tab } from 'react-bootstrap';
import Aux from '../../../../hoc/_Aux';

import AmChartStatistics7 from '../../../../Components/Chart/AmChartStatistics7';
import AmChartReplay from '../../../../Components/Chart/AmChartReplay';
import GaugeChart from '../../../../Components/Chart/GaugeChart';

import Control from './control';

class ControlPanel extends Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col xl={{ span: 6 }} className='p-3 mt-3' >
                        <Control />
                    </Col>
                    <Col xl={{ span: 6 }} className='m-b-30'>
                        <Tabs defaultActiveKey='General' id='uncontrolled-tab-example'>
                            <Tab eventKey='General' title='General'>
                                <Col>
                                    <Card>
                                        <Card.Header>
                                            <Card.Title as='h5'>Statistics</Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <AmChartStatistics7 />
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Tab>
                            <Tab eventKey='statistics' title='statistics'>
                                <Col>
                                    <Card>
                                        <Card.Header>
                                            <Card.Title as='h5'>Statistics</Card.Title>
                                        </Card.Header>
                                        <AmChartReplay height='320px' />
                                    </Card>
                                </Col>
                            </Tab>
                            <Tab eventKey='usage' title='usage'>
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
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Aux>
        )
    }
}

export default ControlPanel;