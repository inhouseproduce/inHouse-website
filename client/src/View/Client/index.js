import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Row, Col, Card, Tabs, Tab } from 'react-bootstrap';
import Aux from '../../hoc/_Aux';

// Statistic components
import AmChartStatistics7 from '../../Components/Chart/AmChartStatistics7';
import AmChartReplay from '../../Components/Chart/AmChartReplay';
import GaugeChart from '../../Components/Chart/GaugeChart';

// Components
import ControlPanel from './Components/ControlPanel';
import ImagesPanel from './Components/ImagesView';
import SettingsPanel from './Components/Settings';

// Actions
import { getClientProfile } from '../../store/actions/get';
import { updateSettings } from '../../store/actions/update';

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
        let client = this.props.match.params.id;
        this.props.GetClientProfile(client);
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
                                                <Col xl={{ span: 6 }} className='mt-lg-3'>
                                                    <Tabs defaultActiveKey='Images' id='uncontrolled-tab-example'>
                                                        <Tab eventKey={'Images'} title={'Images'}>
                                                            <ImagesPanel />
                                                        </Tab>
                                                        <Tab eventKey={'Control'} title={'Control'}>
                                                            <ControlPanel />
                                                        </Tab>
                                                        <Tab className='p-0'eventKey={'Settings'} title={'Settings'}>
                                                            <SettingsPanel update={this.props.UpdateSettings}/>
                                                        </Tab>
                                                    </Tabs>
                                                </Col>
                                                <Col xl={{ span: 6 }} className='mt-lg-3'>
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
        profile: state.clientProfile
    }
};

const mapDispatchToProps = dispatch => {
    return {
        UpdateSettings: e => dispatch(updateSettings(e)),
        GetClientProfile: e => dispatch(getClientProfile(e))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Client);