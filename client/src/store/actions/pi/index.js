import axios from 'axios';
import headerAuth from '../../../utility/headerAuth';

export const controlPi = data => {
    return async (dispatch, getState) => {
        try {
            let request = await axios.post('/control/pi/', data, await headerAuth());
        }
        catch (error) {
            throw error;
        };
    };
};

export const getEngineState = client => {
    return async (dispatch, getState) => {
        try {
            let request = await axios.get(`/engine/state/${client}`, await headerAuth());
            console.log('request', request)
        }
        catch (error) {
            throw error;
        };
    };
};
