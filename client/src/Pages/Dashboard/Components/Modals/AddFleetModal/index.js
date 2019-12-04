import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Modal } from 'antd';

import FleetForm from './Components/FleetForm';

// Actions
import { registerFleet } from '../../../../../Store/actions/CRUD/registerFleet';

class AddNewFleetModal extends Component {
    render() {
        const handleRegisterFleet = () => {
            this.props.submitFleetForm();
        }

        const handleFleetForm = () => {

        }

        return (
            <Modal
                title='Add New Fleet'
                visible={this.props.modal}
                onOk={handleRegisterFleet}
                onCancel={this.props.switch}
            >
                <div className='config-modal-container'>
                    <div className='config-modal-inner'>
                        <div className='config-modal-menu'>
                            <FleetForm
                                submitFleetForm={handleRegisterFleet}
                                handleFleetForm={handleFleetForm}
                            />
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
      submitFleetForm: ()=> dispatch( registerFleet())
    }
  };
  export default connect( mapStateToProps, mapDispatchToProps)( AddNewFleetModal );