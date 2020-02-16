import React from 'react';
import { connect } from 'react-redux';

import '../../assets/scss/style.scss';

// Background
import back from '../../assets/images/bg-images/bg3.jpg';

// Helpers
import Aux from '../../hoc/_Aux';
import Breadcrumb from '../../App/layout/AdminLayout/Breadcrumb';

// Actions
import { adminAuth } from '../../store/actions/auth';

class Authentication extends React.Component {
    state = {
        form: {}
    };

    handleInputChange = (e) => {
        let { name, value } = e.target;
        this.setState({
            ...this.state,
            form: {
                ...this.state.form,
                [name]: value
            }
        });
    };

    render() {
        return (
            <Aux>
                <Breadcrumb />
                <div className='auth-wrapper aut-bg-img' style={{ backgroundImage: `url(${back})`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
                    <div className='auth-content'>
                        <div className='text-white'>
                            <div className='card-body text-center'>
                                <div className='mb-4'>
                                    <i className='feather icon-unlock auth-icon' />
                                </div>
                                <h3 className='mb-4 text-white'>Login</h3>
                                <div className='input-group mb-3'>
                                    <input onChange={this.handleInputChange} type='username' className='form-control' name='username' placeholder='username' />
                                </div>
                                <div className='input-group mb-4'>
                                    <input onChange={this.handleInputChange} type='password' className='form-control' name='password' placeholder='password' />
                                </div>
                                <button onClick={() => this.props.AdminAuth(this.state.form, this.props.history)} className='col-12 btn btn-primary shadow-2 mb-4'>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        );
    };
};

const mapDispatchToProps = dispatch => {
    return {
        AdminAuth: (f, h) => dispatch(adminAuth(f, h))
    };
};
export default connect(null, mapDispatchToProps)(Authentication);