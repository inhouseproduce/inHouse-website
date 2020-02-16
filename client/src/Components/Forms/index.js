import React from 'react';

// Forms
import AddClient from './AddClient';
import Config from './Config';

const Forms = {
    AddClientForm: props => {
        return <AddClient {...props} />
    },

    ClientConfig: props => {
        return <Config {...props} />
    }
};

export default Forms;