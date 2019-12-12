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
                    prefix={<Icon type='mail' />}
                    name='username' 
                    placeholder='username'
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