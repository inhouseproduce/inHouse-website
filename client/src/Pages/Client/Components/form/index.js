import React, { Component } from 'react';

import { Row, Col, Card, Form, Button } from 'react-bootstrap';
import { ValidationForm, TextInput, BaseFormControl, SelectGroup, FileInput, Checkbox, Radio } from 'react-bootstrap4-form-validation';

class ConfigForm extends Component {
    render() {
        const handleSubmit = () => { }
        const handleErrorSubmit = () => { }
        const handleChange = () => { }

        return (
            <div>
                <ValidationForm onSubmit={handleSubmit} onErrorSubmit={handleErrorSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} md="6">
                            <Form.Label htmlFor="name">Client Name</Form.Label>
                            <TextInput
                                name="name"
                                id="clientName"
                                placeholder="name"
                                onChange={handleChange}
                                autoComplete="off"
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="6">
                            <Form.Label htmlFor="location">Client Location</Form.Label>
                            <TextInput
                                name="location"
                                id="location"
                                placeholder="location"
                                onChange={handleChange}
                                autoComplete="off"
                            />
                        </Form.Group>
                    </Form.Row>
                </ValidationForm>
            </div>
        )
    }
}

export default ConfigForm;