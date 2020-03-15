import React, { Component } from 'react';
import { Row, Col, Tabs, Tab, Button } from 'react-bootstrap';

// Components
import SettingMenu from './SettingMenu';

class Settings extends Component {
    state = {
        changes: {
            engine: {},
            modules: {}
        },
        form: {
            engine: {
                pump: { type: 'interval', time_interval: '' },
                irragation: { type: 'interval', time_interval: '' },
                lights: { type: 'clock', time_interval: '' }
            },
            modules: {
                camera: { type: 'interval', time_interval: '' }
            }
        }
    };

    componentWillReceiveProps() {
        if (this.props.config) {
            this.setState({
                form: this.props.config
            });
        };
    };

    handleInput = (form, item, each) => {
        this.setState({
            ...this.state,
            form: {
                ...this.state.form,
                [item]: {
                    ...this.state.form[item],
                    ...form
                }
            },
            changes: {
                ...this.state.changes,
                [item]: {
                    ...this.state.changes[item],
                    [each]: {
                        ...this.state.changes[item][each],
                        ...{ [item]: each }
                    }
                }
            }
        });
    };

    render() {
        console.log('imp changes', this.state.changes)
        return (
            <Row>
                <Col>
                    <Tabs defaultActiveKey='Basic' id='uncontrolled-tab-example'>
                        {Object.keys(this.state.form).map(item => {
                            return (
                                <Tab key={item} eventKey={item} title={item}>
                                    <Tabs defaultActiveKey='pump' id='uncontrolled-tab-example'>
                                        {Object.keys(this.state.form[item]).map(each => {
                                            let type = this.state.form[item][each].type;
                                            return (
                                                <Tab key={item + each} eventKey={each} title={each}>
                                                    <SettingMenu
                                                        handleInput={(form) => this.handleInput(form, item, each)}
                                                        form={this.state.form[item][each]} each={each} type={type}
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