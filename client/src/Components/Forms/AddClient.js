import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Form, Input } from 'antd';

const AddClientForm = props => {
    return (
        <Form>
            <Row className='mb-3'>
                <Col sm={6}>
                    <Form.Item>
                        <Input onChange={props.handleInput} name='name' placeholder='Client Name' />
                    </Form.Item>
                </Col>
                <Col sm={6}>
                    <Form.Item>
                        <Input onChange={props.handleInput} name='location' placeholder='Client Location' />
                    </Form.Item>
                </Col>
                <Col sm={6}>
                    <Input onChange={props.handleInput} name='image' placeholder='Image Url' />
                </Col>
            </Row>
        </Form>
    )
};

export default AddClientForm;