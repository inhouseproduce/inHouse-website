import React, { Component } from 'react';
import { Row, Card, Col, Tabs, Tab, Button } from 'react-bootstrap';

// Components
import SettingMenu from './SettingMenu';

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
    state = {
        form: {}
    };

    handleInput = (form, item) => {
        this.setState({
            ...this.state,
            form: {
                ...this.state.form,
                [item]: {
                    ...this.state.form[item],
                    ...form
                }
            }
        });
    };

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
                                                        handleInput={(form) => this.handleInput(form, item)} each={each} type={type}
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
                        <Button onClick={() => this.props.update(this.state.form)}>Update</Button>
                    </Col>
                </Col>
            </Row>
        )
    }
};

export default Settings;