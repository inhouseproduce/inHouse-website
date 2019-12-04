import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css';

import { Modal } from 'antd';

import ConfigMenu from './Components/ConfigMenu';

// Actions
import {addconfig} from '../../../../../Store/actions/CRUD/addconfig';

//default config
import config from '../../../assets/defaultconfig';

class ConfigModal extends Component {
  state = {
    config
  };

  render() {
    const submitConfig = () => {
      this.props.submitAddConfig();
    }

    const addScheduleArr = () => {
      this.setState({

      });
    }

    const addIntervalTime = () => {
      this.setState({
        
      });
    }

    return (
      <Modal
        title='Config'
        visible={this.props.modal}
        onOk={submitConfig}
        onCancel={this.props.switch}
      >
        <div className='config-modal-container'>
          <div className='config-modal-inner'>
            <div className='config-modal-menu'>
              <ConfigMenu 
                addScheduleArr={addScheduleArr}
                addIntervalTime={addIntervalTime}
              />
            </div>
          </div>
        </div>
      </Modal>
    )
  };
}

const mapStateToProps = state => {
  return {
  }
};

const mapDispatchToProps = dispatch => {
  return {
    submitAddConfig: ()=> dispatch( addconfig())
  }
};
export default connect( mapStateToProps, mapDispatchToProps)( ConfigModal );