import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Row, Col, Card, Tabs, Tab } from 'react-bootstrap';

// Statistic components
import SystemInfo from '../../Components/Chart/SystemInfo';
import AmChartReplay from '../../Components/Chart/AmChartReplay';
import GaugeChart from '../../Components/Chart/GaugeChart';

// Components
import ControlPanel from './Components/ControlPanel';
import ImagesPanel from './Components/ImagesView';
import SettingsPanel from './Components/Settings';

// Actions
import { getClientProfile } from '../../store/actions/get';
import { updateSettings, updateImages } from '../../store/actions/update';

class Client extends Component {
    state = {};

    componentDidMount() {
        this.getClientData();
    };

    getClientData = () => {
        let client = this.props.match.params.id;
        this.props.GetClientProfile(client);
        setInterval(() => {
            this.props.GetClientProfile(client);
        }, 15000);
    }


    render() {
        return (
            <Card className='p-3'>
                <Row>
                    <Col xl={{ span: 6 }} className='mt-lg-3'>
                        <Tabs defaultActiveKey='Images' id='uncontrolled-tab-example'>
                            <Tab eventKey={'Images'} title={'Images'}>
                                <ImagesPanel
                                    update={this.props.UpdateImages}
                                    images={this.props.images}
                                />
                            </Tab>
                            <Tab eventKey={'Control'} title={'Control'}>
                                <ControlPanel info={this.props.engine} />
                            </Tab>
                            <Tab className='p-0' eventKey={'Settings'} title={'Settings'}>
                                <SettingsPanel
                                    config={this.props.config}
                                    update={this.props.UpdateSettings}
                                />
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
                                            <SystemInfo module={this.props.module} info={this.props.system} />
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
            </Card>
        )
    };
};

const mapStateToProps = state => {
    console.log('state-->', state)
    return {
        client: state.clientProfile.client,
        config: state.clientProfile.config,
        images: state.clientProfile.record.images,
        engine: state.clientProfile.record.logs.engine,
        system: state.clientProfile.record.logs.system,
        module: state.clientProfile.record.logs.module
    }
};

const mapDispatchToProps = dispatch => {
    return {
        UpdateSettings: (config, id) => dispatch(updateSettings(config, id)),
        GetClientProfile: e => dispatch(getClientProfile(e)),
        UpdateImages: id => dispatch(updateImages(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Client);