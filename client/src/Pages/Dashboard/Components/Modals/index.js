import React from 'react';
import ConfigModal from '../Modals/ConfigModal';
import AddNewModal from '../Modals/AddFleetModal';

const Modals = (props) => {
    return (
        <div>
            <AddNewModal
                modal={props.state.addNewModal}
                switch={props.createNewFleet}
            />
            
            <ConfigModal
                modal={props.state.configModal}
                switch={props.updateFleetConfig}
            />
        </div>
    ) 
};
export default Modals;