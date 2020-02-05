import React, { Component } from 'react';
import { Row, Card, Tabs, Tab, Button } from 'react-bootstrap';

import Aux from '../../../../hoc/_Aux';
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

    };

    handleInput = (form) => {
        console.log('from', form)
    };

    render() {
        return (
            <Aux>
                <Row>
                    <Card>
                        <Card.Header>
                            <Card.Title as='h5'>Settings</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tabs defaultActiveKey='Basic' id='uncontrolled-tab-example'>
                                {Object.keys(config).map(item => {
                                    return (
                                        <Tab key={item} eventKey={item} title={item}>
                                            <Tabs defaultActiveKey='pump' id='uncontrolled-tab-example'>
                                                {Object.keys(config[item]).map(each => {
                                                    let type = config[item][each].type;
                                                    return (
                                                        <Tab key={item + each} eventKey={each} title={each}>
                                                            {<SettingMenu handleInput={this.handleInput} type={type} />}
                                                        </Tab>
                                                    )
                                                })}
                                            </Tabs>
                                        </Tab>
                                    )
                                })}
                            </Tabs>
                        </Card.Body>
                    </Card>
                    <Button onClick={this.props.update}>Update</Button>
                </Row>
            </Aux>
        )
    }
};

export default Settings;