import React, { Component } from 'react';

import { Row, Col, Card, Tabs, Tab } from 'react-bootstrap';
import Aux from '../../hoc/_Aux';

import AmChartStatistics7 from '../../Components/Chart/AmChartStatistics7';
import AmChartReplay from '../../Components/Chart/AmChartReplay';
import GaugeChart from '../../Components/Chart/GaugeChart';

import Control from './Components/controlPanel/control';

class Client extends Component {
    state = {
        list: [
            {
                name: 'module-1'
            },
            {
                name: 'module-2'
            }
        ]
    };

    render() {
        return (
            <Aux>
                <Row>
                    <Col xl={12} className='m-b-30'>
                        <Tabs defaultActiveKey='module-1' id='uncontrolled-tab-example'>
                            {this.state.list.map(item => {
                                return (
                                    <Tab eventKey={item.name} title={item.name}>
                                        <Aux>
                                            <Row>
                                                <Col xl={{ span: 6 }} className='p-3 mt-3' >
                                                    <Tabs defaultActiveKey='Control' id='uncontrolled-tab-example'>
                                                        <Tab eventKey={'Control'} title={'Control'}> 
                                                            <Control />
                                                        </Tab>
                                                        <Tab eventKey={'Config'} title={'Config'}>
                                                            <h1>Config</h1>
                                                        </Tab>
                                                    </Tabs>
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
                                    </Tab>
                                )
                            })}
                        </Tabs>
                    </Col>
                </Row>
            </Aux>
        )
    };
};

export default Client;