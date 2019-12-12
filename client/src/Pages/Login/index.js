import React, { Component } from 'react';
import './style.css';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { Button } from 'antd';

import logoImage from '../../Static/images/logo.png';
import LoginForm from './LoginForm';

import { loginAuth } from '../../Store/actions/auth/login';

class LoginPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
        };

        // Bind hooks
        this.submitSignin = this.submitSignin.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.resetForm = this.resetForm.bind(this);
    };

    resetForm() {
        this.setState({
            username: '',
            password: '',
        });
    }

    submitSignin() {
        this.props.handleLogin(this.state, this.props.history);
        this.resetForm();
    }

    handleInput(e) {
        let { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className='login-page-container'>
                <div className='login-page-inner'>
                    <div className='col-4 login-sidebar'>
                        <div className='login-sidebar-logo'>
                            <div className='col-12'>
                                <img src={logoImage} alt='logo-img'/>
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
                                <LoginForm handleInput={this.handleInput} />
                                <div className='login-button'>
                                    <Button onClick={this.submitSignin}>Log In</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handleLogin: (form,history) => dispatch(loginAuth(form,history))
    }
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));