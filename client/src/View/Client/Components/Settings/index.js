import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

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
                pump: { type: 'interval' },
                irragation: { type: 'interval' },
                lights: { type: 'clock' }
            },
            modules: {
                camera: { type: 'interval' }
            }
        }
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                form: this.props.config
            });
        }, 1000);
    };

    handleInput = (form, item, each) => {
        this.setState({
            ...this.state,
            form: {
                ...this.state.form,
                [item]: {
                    ...this.state.form[item],
                    [each]: {
                        ...this.state.form[item][each],
                        ...form[each]
                    }
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
                                                        form={this.state.form[item]} item={item} each={each} type={type}
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
                        <Button onClick={() =>
                            this.props.update(this.state.form, this.props.match.params.id)}
                        >Update</Button>
                    </Col>
                </Col>
            </Row>
        )
    }
};

export default withRouter(Settings);