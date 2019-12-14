import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';

// Components
import FleetForm from './Components/FleetForm';

// Actions
import { registerFleet } from '../../../../../Store/actions/crud/createFleet';

class AddNewFleetModal extends Component {
    constructor(props) {
        super(props);

        this.handleInput = this.handleInput.bind(this);
        this.handleRegisterFleet = this.handleRegisterFleet.bind(this);
    };

    handleRegisterFleet() {
        this.props.submitFleetForm(this.state);
    }

    handleInput(input) {
        this.setState(input);
    }

    render() {
        console.log('chekcing state', this.state)
        return (
            <Modal
                title='Add New Fleet'
                visible={this.props.modal}
                onOk={this.handleRegisterFleet}
                onCancel={this.props.switch}
            >
                <div className='config-modal-container'>
                    <div className='config-modal-inner'>
                        <div className='config-modal-menu'>
                            <FleetForm { ...this } />
                        </div>
                    </div>
                </div>
            </Modal>
        )
    };
};

const mapStateToProps = state => {
    return {
    }
};

const mapDispatchToProps = dispatch => {
    return {
        submitFleetForm: (form) => dispatch(registerFleet(form))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewFleetModal);