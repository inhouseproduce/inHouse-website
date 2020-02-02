import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Row, Col, Card, Tabs, Tab, Button } from 'react-bootstrap';
import Aux from '../../hoc/_Aux';

// Statistic components
import AmChartStatistics7 from '../../Components/Chart/AmChartStatistics7';
import AmChartReplay from '../../Components/Chart/AmChartReplay';
import GaugeChart from '../../Components/Chart/GaugeChart';

// Components
import Control from './Components/controlPanel';
import Images from './Components/imagesView';
import Form from '../../Components/Forms';

// Actions
import { getImages } from '../../store/actions/get';

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

    componentDidMount() {
        this.props.getUnitImages();
    };

    render() {
        return (
            <Aux>
                <Row>
                    <Col xl={12}>
                        <Tabs defaultActiveKey='module-1' id='uncontrolled-tab-example'>
                            {this.state.list.map((item, i) => {
                                return (
                                    <Tab key={i} eventKey={item.name} title={item.name}>
                                        <Aux>
                                            <Row>
                                                <Col xl={{ span: 6 }}>
                                                    <Tabs defaultActiveKey='Control' id='uncontrolled-tab-example'>
                                                        <Tab eventKey={'Control'} title={'Control'}>
                                                            <Control />
                                                        </Tab>
                                                        <Tab eventKey={'Config'} title={'Config'}>
                                                            <Col>
                                                                <Form.ClientConfig />
                                                            </Col>
                                                            <Col>
                                                                <Button>Update</Button>
                                                            </Col>
                                                        </Tab>
                                                        <Tab eventKey={'Images'} title={'Images'}>
                                                            <Images />
                                                        </Tab>
                                                    </Tabs>
                                                </Col>
                                                <Col xl={{ span: 6 }}>
                                                    <Tabs defaultActiveKey='General' id='uncontrolled-tab-example'>
                                                        <Tab eventKey='General' title='General'>
                                                            <Col>
                                                                <Card className='m-0 p-2'>
                                                                    <Card.Header>
                                                                        <Card.Title as='h5'>Statistics</Card.Title>
                                                                    </Card.Header>
                                                                    <Card.Body>
                                                                        <AmChartStatistics7 height={'345px'} />
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

const mapStateToProps = state => {
    return {
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getUnitImages: e => dispatch(getImages(e))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Client);