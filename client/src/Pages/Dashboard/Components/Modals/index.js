import React from 'react';
import ConfigModal from '../Modals/ConfigModal';
import AddNewModal from '../Modals/AddFleetModal';

const Modals = (props) => {
    return (
        <div>
            <AddNewModal
                modal={props.newFleetModal}
                switch={props.newFleetSwtich}
            />
            <ConfigModal
                modal={props.configModal}
                switch={props.configSwitch}
            />
        </div>
    )
};
export default Modals;