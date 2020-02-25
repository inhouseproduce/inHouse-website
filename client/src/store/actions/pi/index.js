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