import React, { Component } from 'react';
import './style.css';

import { connect } from 'react-redux';
import { Modal } from 'antd';

// Components
import ConfigMenu from './Components/ConfigMenu';

// Actions
import { addconfig } from '../../../../../Store/actions/crud/updateFleet';

//default config
import config from '../../../assets/defaultconfig';

class ConfigModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.submitConfig = this.submitConfig.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  submitConfig() {
    this.props.submitAddConfig(this.state);
  }

  handleInput(e, part) {
    let { name, value } = e.target;
    this.setState({
      ...this.state,
      [part]: {
        ...this.state[part],
        [name]: value
      }
    });
  }

  render() {
    console.log('check state', this.state)
    return (
      <Modal
        title='Config'
        visible={this.props.modal}
        onOk={this.submitConfig}
        onCancel={this.props.switch}
      >
        <div className='config-modal-container'>
          <div className='config-modal-inner'>
            <div className='config-modal-menu'>
              <ConfigMenu {...this} />
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
    submitAddConfig: () => dispatch(addconfig())
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(ConfigModal);