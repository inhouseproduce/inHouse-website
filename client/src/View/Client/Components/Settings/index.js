import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Row, Col, Tabs, Tab, Button } from 'react-bootstrap';

// Components
import SettingMenu from './SettingMenu';

// Actions
import { updateSettings } from '../../../../store/actions/update';

let config = {
    engine: {
        pump: { type: 'interval' },
        irragation: { type: 'interval' },
        lights: { type: 'clock' }
    },
    modules: {
        camera: { type: 'interval' }
    }
};

class Settings extends Component {
    state = {};

    render() {
        return (
            <Row>
                <Col>
                    <Tabs defaultActiveKey='Basic' id='uncontrolled-tab-example'>
                        {Object.keys(config).map(item => {
                            return (
                                <Tab key={item} eventKey={item} title={item}>
                                    <Tabs defaultActiveKey='pump' id='uncontrolled-tab-example'>
                                        {Object.keys(config[item]).map(each => {
                                            let type = config[item][each].type;
                                            return (
                                                <Tab key={item + each} eventKey={each} title={each}>
                                                    <SettingMenu
                                                        handleInput={(data) => this.setState({ ...data })} each={each} type={type}
                                                    />
                                                </Tab>
                                            )
                                        })}
                                    </Tabs>
                                </Tab>
                            )
                        })}
                    </Tabs>
                    <Col className='text-right mt-3'>
                        <Button onClick={() => this.props.UpdateSettings(this.state.form)}>Update</Button>
                    </Col>
                </Col>
            </Row>
        )
    }
};

const mapDispatchToProps = dispatch => {
    return {
        UpdateSettings: e => dispatch(updateSettings(e)),
    }
};

export default connect(null, mapDispatchToProps)(Settings);