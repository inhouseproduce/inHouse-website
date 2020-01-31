import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import '../../assets/scss/style.scss';
import Aux from '../../hoc/_Aux';
import Breadcrumb from '../../App/layout/AdminLayout/Breadcrumb';

import back3 from '../../assets/images/bg-images/bg3.jpg';

// Actions
import { auth } from '../../store/actions/auth';

class Authentication extends React.Component {
    state = {
        form: {}
    };

    handleInputChange = (e) => {
        let { name, value } = e.target;
        this.setState({
            from: {
                ...this.state,
                [name]: value
            }
        });
    };

    render() {
        return (
            <Aux>
                <Breadcrumb />
                <div className='auth-wrapper aut-bg-img' style={{ backgroundImage: `url(${back3})`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
                    <div className='auth-content'>
                        <div className='text-white'>
                            <div className='card-body text-center'>
                                <div className='mb-4'>
                                    <i className='feather icon-unlock auth-icon' />
                                </div>
                                <h3 className='mb-4 text-white'>Login</h3>
                                <div className='input-group mb-3'>
                                    <input type='email' className='form-control' placeholder='Email' />
                                </div>
                                <div className='input-group mb-4'>
                                    <input onChange={this.handleInputChange} type='password' className='form-control' placeholder='password' />
                                </div>
                                <div className='form-group text-left'>
                                    <div className='checkbox checkbox-fill d-inline'>
                                        <input onChange={this.handleInputChange} type='checkbox' name='checkbox-fill-1' id='checkbox-fill-a1' />
                                        <label htmlFor='checkbox-fill-a1' className='cr'> Save credentials</label>
                                    </div>
                                </div>
                                <button onClick={() => this.props.adminAuth(this.state.form)} className='btn btn-primary shadow-2 mb-4'>Login</button>
                                <p className='mb-2 text-muted'>Forgot password? <NavLink to='/auth/reset-password-3' className='text-white'>Reset</NavLink></p>
                                <p className='mb-0 text-muted'>Don’t have an account? <NavLink to='/auth/signup-3' className='text-white'>Signup</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
    }
};

const mapDispatchToProps = dispatch => {
    return {
        adminAuth: form => dispatch(auth(form))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Authentication);