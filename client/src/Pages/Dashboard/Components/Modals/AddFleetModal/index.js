import React from 'react';
import { Modal, Input } from 'antd';

const AddNewFleetModal = (props) => {
    return (
        <Modal
            title='Add New Fleet'
            visible={props.modal}
            onOk={props.switch}
            onCancel={props.switch}
        >
            <div className='config-modal-container'>
                <div className='config-modal-inner'>
                    <div className='config-modal-menu'>
                        <Input placeholder='Client Name'/>
                    </div>
                </div>
            </div>
        </Modal>
    )
};

export default AddNewFleetModal;