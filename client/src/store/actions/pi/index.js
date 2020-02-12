import axios from 'axios';

export const controlPi = (action) => {
    return async (dispatch, getState) => {
        console.log('imp xxx---', action)
        try {
            let request = await axios.post('/control/pi/', action);
        }
        catch (error) {
            throw error;
        };
    };
};