import React from 'react';
import './style.css';

import { Modal } from 'antd';

import ConfigMenu from './Components/ConfigMenu';

const ConfigModal = props => {
  return (
    <Modal
      title='Config'
      visible={props.modal}
      onOk={props.switch}
      onCancel={props.switch}
    >
      <div className='config-modal-container'>
        <div className='config-modal-inner'>
          <div className='config-modal-menu'>
            <ConfigMenu/>
          </div>
        </div>
      </div>
    </Modal>
  )
};

export default ConfigModal;