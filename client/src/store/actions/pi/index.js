import axios from 'axios';
import headerAuth from '../../../utility/headerAuth';

export const controlPi = data => {
    return async (dispatch, getState) => {
        console.log('sending requerst')
        try {
            let request = await axios.post('/control/pi/', data, await headerAuth());
            console.log('imp request', request)
        }
        catch (error) {
            throw error;
        };
    };
};