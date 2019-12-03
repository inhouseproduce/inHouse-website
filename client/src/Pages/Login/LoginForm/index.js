import React from 'react';
import { Input, Form, Icon } from 'antd';

const LoginForm = props => {
    return (
        <Form>
            <Form.Item
                hasFeedback
                className='m-0'
            >
                <Input
                    onChange={props.handleInput}
                    name='email' prefix={<Icon type='mail' />}
                    placeholder='Email'
                />
            </Form.Item>
            <Form.Item
                hasFeedback
            >
                <Input.Password
                    onChange={props.handleInput}
                    prefix={<Icon type='lock' />}
                    name='password'
                    placeholder='Password'
                />
            </Form.Item>
        </Form>
    )
};

export default LoginForm;