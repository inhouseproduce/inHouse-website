import React from 'react';
import './style.css';

import { Button } from 'antd';

import logoImage from '../../Static/images/logo.png';
import LoginForm from './LoginForm';

const LoginPage = props => {
    const submitSignin = () => {
        props.history.push('/dashboard')
    }

    return (
        <div className='login-page-container'>
            <div className='login-page-inner'>
                <div className='col-4 login-sidebar'>
                    <div className='login-sidebar-logo'>
                        <div className='col-12'>
                            <img src={logoImage} />
                        </div>
                    </div>
                    <div className='sidbar-mid-message'>
                        <div className='col-12'>
                            <h2 className='color-fff'>Admin Login</h2>
                        </div>
                    </div>
                    <div className='sidebar-offical-site'>
                        <div className='col-12'>
                            <small>InHouse produce inc. ©</small>
                            <small className='px-2'>
                                <a href='https://inhouseproduce.com/'>Offical website</a></small>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-8'>
                    <div className='login-form-container'>
                        <div className='login-form-inner'>
                            <LoginForm/>
                            <div className='login-button'>
                                <Button onClick={submitSignin}>Log In</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LoginPage;